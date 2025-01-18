import { useState, useEffect, useRef } from "react";
import { Carousel } from "react-responsive-carousel";
import QRCode from "qrcode";
import Lovee from "./assets/amo1.jpeg";
import Loove from "./assets/mo2.jpeg";
import BaLove4u from "./assets/amor10.jpeg";
import BaLove10u from "./assets/amor8.jpeg";
import BaLove11u from "./assets/amor9.jpeg";
import { FaPlay } from "react-icons/fa";
import { FaPause } from "react-icons/fa";
import BaLove12u from "./assets/1mor2.jpeg";
import music from "./assets/cl.mp3"; // Adicione sua música aqui
import { useNavigate } from "react-router-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const CoupleCarousel = () => {
  const [timeTogether, setTimeTogether] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [qrCodeData, setQrCodeData] = useState("");
  const [isPlaying, setIsPlaying] = useState(true); // Estado para controlar se a música está tocando
  const audioRef = useRef(new Audio(music)); // Referência do áudio
  const navigate = useNavigate();
  const startDate = new Date("2024-05-11");

  // Atualiza o contador de tempo
  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const diff = now - startDate;
      const d = Math.floor(diff / (1000 * 60 * 60 * 24));
      const h = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const m = Math.floor((diff / (1000 * 60)) % 60);
      const s = Math.floor((diff / 1000) % 60);

      setTimeTogether({ d, h, m, s });
    }, 1000);

    // Inicia a música automaticamente
    audioRef.current.play();

    // Função de cleanup para parar a música ao desmontar o componente
    return () => {
      audioRef.current.pause();
    };
  }, []);

  // Função para abrir o presente
  const handlepresente = () => {
    navigate("/Presente");
  };

  // Gera o QR Code do site
  const generateQrCode = async () => {
    const url = "https://amor-snowy-ten.vercel.app"; // URL do seu site
    const qrCode = await QRCode.toDataURL(url);
    setQrCodeData(qrCode);
  };

  // Controla o play/pause da música
  const togglePlayPause = () => {
    if (isPlaying) {
      audioRef.current.pause(); // Pausa a música
    } else {
      audioRef.current.play(); // Reproduz a música
    }
    setIsPlaying(!isPlaying); // Alterna o estado de reprodução
  };

  return (
    <div className="flex flex-col items-center bg-gray-900 min-h-screen py-8">
      <button
        onClick={togglePlayPause}
        className="bg-red-500 flex items-center justify-center rounded-full text-white w-10 h-10 shadow hover:bg-red-600 mt-4"
      >
        {isPlaying ? <FaPause size={20} /> : <FaPlay size={20} />}
      </button>
      
      {/* Carrossel */}
      <div className="w-[90%] h-[70%] bg-cover bg-center bg-no-repeat bg-gradient-to-r from-red-500 to-red-800 mt-10 p-4 rounded-xl mb-10">
        <Carousel
          showThumbs={false}
          autoPlay
          infiniteLoop
          interval={3000}
          showStatus={false}
          dynamicHeight
        >
          {[Lovee, Loove, BaLove4u, BaLove10u, BaLove11u, BaLove12u].map((img, index) => (
            <div key={index}>
              <img src={img} alt={`Memory ${index + 1}`} className="rounded-lg" />
            </div>
          ))}
        </Carousel>
      </div>
      
      <div className="text-center mb-4">
        <h1 className="text-3xl font-bold text-white mb-4">Nossa Jornada  ❤️</h1>
        <p className="text-lg text-gray-300">Aqui vamos contar o quanto passamos juntos</p>
      </div>
      
      {/* Contador em grade */}
      <div className="grid grid-cols-4 space-x-2 px-4 gap-4 text-white text-center mb-8">
        {Object.entries(timeTogether).map(([key, value]) => (
          <div key={key} className="bg-gray-800 p-4 rounded-lg">
            <h2 className="text-2xl font-bold text-red-500">{value}</h2>
            <p className="text-lg capitalize">{key}</p>
          </div>
        ))}
      </div>

      {/* Botões */}
      <div className="flex flex-col items-center gap-4 mt-10">
        <button onClick={handlepresente} className="w-full h-full bg-red-500 text-white p-2 mt-3 rounded-lg shadow hover:bg-red-600">
          Abrir Presente
        </button>
        <button
          onClick={generateQrCode}
          className="bg-red-500 text-white px-4 py-2 rounded-lg shadow hover:bg-red-600"
        >
          Gerar QR Code
        </button>

        {qrCodeData && (
          <div className="flex flex-col items-center gap-4 mt-4 bg-red-800 p-4 rounded-lg">
            <img src={qrCodeData} alt="QR Code" className="w-60 h-60" />
            <div>
              <h1 className="text-xl font-bold text-white">Livia lv ❤️ te amo!!</h1>
              <button className="w-full h-full bg-red-500 text-white p-2 mt-3 rounded-lg shadow hover:bg-red-600">
                Baixar QR Code
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CoupleCarousel;
