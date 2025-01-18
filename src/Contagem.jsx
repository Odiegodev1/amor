import  { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import Bau from './assets/bau-de-tesouro.png'
import Amor from './assets/love3.svg'
import Lovee from './assets/love4.svg'
import BaLove4u from './assets/love6.svg'

const targetDate = new Date("2025-01-11T00:00:00");
function Contagem() {

const navigate = useNavigate();
    
    
    const calculateTimeLeft = () => {
        const difference = new Date(targetDate) - new Date();
    if (difference > 0) {
      return {
        dias: Math.floor(difference / (1000 * 60 * 60 * 24)),
        horas: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutos: Math.floor((difference / (1000 * 60)) % 60),
        segundos: Math.floor((difference / 1000) % 60),
      };
    }
    return null;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      const newTimeLeft = calculateTimeLeft();
      setTimeLeft(newTimeLeft);

      if (!newTimeLeft) {
        clearInterval(timer);
        navigate("/destino"); // Redireciona para outra tela
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [navigate]);
  return (
    <div className=" flex flex-col justify-center items-center min-h-screen bg-cover bg-center bg-no-repeat bg-gradient-to-r from-red-500 to-red-800">
        <div className="mb-20">
          <img src={Amor} className='mx-auto w-16 opacity-30  absolute top-8 left-8 ' />
          <img src={Lovee} className='mx-auto w-16 opacity-30  absolute top-8 right-8 ' />
          <img src={BaLove4u} className='mx-auto w-16 opacity-30  absolute top-8 left-2  right-1' />
          </div> 
        <div className='w-60 h-80 bg-white rounded-2xl  '>
          <img src={Bau} className='mx-auto w-52  ' />
          <h1 className='text-center text-md font-bold mb-2 '>Faltam poucos dias para 1 ano de nós!</h1>
          <p className='text-center'> ♥️ ♥️ ♥️ ♥️ ♥️</p>
          <p className='text-center'>Te amo muito, Livia</p>
        
      </div>

      <div className="flex flex-col items-center space-y-4 mt-8">
      {timeLeft ? (
        <div className="p-2 grid grid-cols-4 gap-4 text-center">
          {Object.entries(timeLeft).map(([unit, value]) => (
            <div
              key={unit}
              className="flex flex-col border-4 items-center bg-red-800 text-white p-4 rounded-lg shadow-md"
            >
              <span className="text-2xl font-bold">{value}</span>
              <span className="text-sm uppercase">{unit}</span>
            </div>
          ))}
        </div>
      ) : (
        <span className="text-lg text-red-500 font-bold">te amo</span>
      )}
    </div>
    </div>
  )
}

export default Contagem
