import  { useState } from "react";
import { useNavigate } from 'react-router-dom';
const perguntas = [
  {
    pergunta: "Qual foi o dia que nos conhecemos?",
    opcoes: ["10 de janeiro", "6 de setembro", "25 de janeiro", "1 de fevereiro"],
    resposta: "6 de setembro",
  },
  {
    pergunta: "O que Lv me deu no dia 12 de junho de 2024, DIAS DOS NAMORADOS?",
    opcoes: ["Camisa", "Beijo e um abraço", "Caixinha supresa ", "Chocolates"],
    resposta: "Caixinha supresa",
  },
  {
    pergunta: "Qual foi o dia que conheci seus avós?",
    opcoes: ["28 de fevereiro", "11 de março", "9 de abril", "15 de maio"],
    resposta: "9 de abril",
  },
  {
    pergunta: "Qual é o dia mais importante que eu tinhamos juntos?",
    opcoes: ["Feito á feitura", "Praia", "Cinema", "Carnaval"],
    resposta: "Feito á feitura",
  },
];

function Jogo() {
  const [etapa, setEtapa] = useState(0);
  const [pontos, setPontos] = useState(1);
  const [finalizado, setFinalizado] = useState(false);

  const handleResposta = (opcao) => {
    if (opcao === perguntas[etapa].resposta) {
      setPontos(pontos + 1);
    }
    if (etapa + 1 < perguntas.length) {
      setEtapa(etapa + 1);
    } else {
      setFinalizado(true);
    }
  };

  const navigate = useNavigate();
  const reiniciarJogo = () => {
    navigate('/Contagem');
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[conic-gradient(at_top_right,_var(--tw-gradient-stops))] from-neutral-700 via-purple-400 to-teal-800 text-gray-800">
      {!finalizado ? (
        <div className="w-2/3 max-w-md p-6  bg-white rounded-lg shadow-lg">
          <h1 className="text-xl font-bold text-center mb-4">
            {`Pergunta ${etapa + 1} de ${perguntas.length}`}
          </h1>
          <p className="text-lg text-center mb-6">{perguntas[etapa].pergunta}</p>
          <div className="space-y-3">
            {perguntas[etapa].opcoes.map((opcao) => (
              <button
                key={opcao}
                onClick={() => handleResposta(opcao)}
                className="w-full py-2 px-4 bg-red-400 text-white rounded-lg hover:bg-pink-500"
              >
                {opcao}
              </button>
            ))}
          </div>
        </div>
      ) : (
        <div className="w-2/3 max-w-md p-6 bg-white rounded-lg shadow-lg text-center">
          <h1 className="text-2xl font-bold mb-4">Parabéns! 🎉</h1>
          <p className="text-lg mb-6">
            Você acertou {pontos} de {perguntas.length} perguntas!
          </p>
          <p className="text-lg mb-6">Livia você ganhou uma viagem inesquecível!</p>
          <button
            onClick={reiniciarJogo}
            className="py-2 px-4 bg-red-400 text-white rounded-lg hover:bg-pink-500"
          >
            Abri um presente
          </button>
        </div>
      )}
    </div>
  );
}

export default Jogo;
