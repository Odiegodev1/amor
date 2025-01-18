import VidedoM from './assets/mo.mov';
import { useNavigate } from 'react-router-dom'; // Para navegação

function Destino() {
  const navigate = useNavigate(); // Hook de navegação

  const handleVideoEnd = () => {
    // Aguardar 3 segundos antes de redirecionar
    setTimeout(() => {
      navigate('/Home'); // Redireciona para a tela inicial ou outra rota
    }, 3000); // 3000 milissegundos = 3 segundos
  };

  return (
    <div className="w-full h-screen bg-[conic-gradient(at_top_right,_var(--tw-gradient-stops))] from-neutral-700 via-purple-400 to-teal-800 flex justify-center items-center">
      <div className="flex flex-col justify-center items-center p-3 rounded-xl w-[90%] h-[80%] bg-red-500">
        <h1 className="mb-2 text-center font-bold text-white"> ♥️ TE AMO MINHA BOLOTINHA  ♥️</h1>
        <p className="text-center text-sm font-bold text-white">Obrigado por me apoiar, nosso primeiro ano ♥️ ♥️</p>
        <video
          src={VidedoM}
          onEnded={handleVideoEnd} // Chamado quando o vídeo termina
          autoPlay
          autoSave='true'
          className="rounded-xl border-4 border-white w-full h-auto" // Ajuste para evitar tela cheia
        />
      </div>
    </div>
  );
}

export default Destino;
