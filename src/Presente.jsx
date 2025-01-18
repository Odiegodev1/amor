import React, { useState } from "react";
import successSound from "./assets/Suce.mp3"; // Áudio de sucesso
// Áudio de erro
import Bau from "./assets/bau-de-tesouro.png"; // Imagem de presente

const gifts = [
  { id: 3, title: "Caixa 1", gift: "150 Reais Em SHEIN", image: Bau },
  { id: 5, title: "Caixa 2", gift: "Vestido FARM", image: Bau },
  { id: 1, title: "Caixa 3", gift: "10 Esmalte", image: Bau },
  { id: 4, title: "Caixa 4", gift: "Uma foto do casal", image: Bau },
  { id: 2, title: "Caixa 5", gift: "Uma surpresa", image: Bau },
];

const PresentBoxGame = () => {
  const [chosenBoxes, setChosenBoxes] = useState([]);
  const [showResult, setShowResult] = useState(false);
  const [rotation, setRotation] = useState(null);

  const handleBoxClick = (box) => {
    const successAudio = new Audio(successSound);
   
    if (chosenBoxes.length < 3 && !chosenBoxes.includes(box)) {
      setChosenBoxes([...chosenBoxes, box]);

      // Reproduz o som de sucesso quando o usuário escolhe a caixa
      successAudio.play();

      // Animação de rotação
      setRotation("rotate");

      setTimeout(() => {
        setRotation(null); // Para a rotação após a animação
      }, 1000); // Duração da rotação
    }
  };

  const handleSendToWhatsApp = () => {
    const message = `Surpresa do meu 1º ano de namoro: ${chosenBoxes
      .map((box) => box.gift)
      .join(", ")}! 💖`;

    const url = `https://wa.me/522992576952?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  // Calcular as caixas perdidas (não escolhidas)
  const lostBoxes = gifts.filter((box) => !chosenBoxes.includes(box));

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-cover bg-center bg-no-repeat bg-gradient-to-r from-red-500 to-red-800 p-4">
      <div className=" p-6 rounded-lg w-full max-w-md text-center">
        <h1 className="text-2xl font-bold mb-4">Abra seu presente!</h1>
        <div className="grid grid-cols-2 gap-4 mb-6">
          {gifts.map((box) => (
            <div
              key={box.id}
              className={`p-4 border rounded-lg cursor-pointer ${
                chosenBoxes.includes(box)
                  ? "bg-red-200"
                  : "bg-red-200"
              } transform transition duration-500 ${
                rotation && !chosenBoxes.includes(box) ? "rotate-180" : ""
              }`}
              onClick={() => handleBoxClick(box)}
            >
              <div className="flex justify-center items-center">
                <img src={box.image} alt={box.title} className="w-24 h-24 object-cover" />
              </div>
              <p className="font-semibold">{box.title}</p>
            </div>
          ))}
        </div>

        {chosenBoxes.length === 3 && !showResult && (
          <button
            className="bg-red-900 text-white py-2 px-4 rounded hover:bg-red-600"
            onClick={() => setShowResult(true)}
          >
            Ver o que você ganhou!
          </button>
        )}

        {showResult && (
          <div className="mt-6 bg-white p-6 rounded-lg">
            <h2 className="text-xl font-bold mb-2">Você ganhou:</h2>
            <ul className="text-left">
              {chosenBoxes.map((box) => (
                <li key={box.id} className="mb-2">
                  {box.gift}
                </li>
              ))}
            </ul>
            <button
              className="mt-4 bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600"
              onClick={handleSendToWhatsApp}
            >
              Enviar para o WhatsApp
            </button>
          </div>
        )}

        {/* Seção para mostrar os presentes perdidos */}
        {lostBoxes.length > 0 && (
          <div className="mt-6 bg-white p-6 rounded-lg">
            <h2 className="text-xl font-bold text-red-600 mb-2">Você perdeu:</h2>
            <ul className="text-left text-red-600">
              {lostBoxes.map((box) => (
                <li key={box.id} className="mb-2">
                  {box.gift}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default PresentBoxGame;
