import { useState, } from "react";
import successSound from "./assets/Suce.mp3"; // Adicione o arquivo de áudio de sucesso
import errorSound from "./assets/Err.mp3"; // Adicione o arquivo de áudio de erro
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorCount, setErrorCount] = useState(0);
  const [isLocked, setIsLocked] = useState(false);
  
 const navigate = useNavigate();
  const correctUsername = "LvdDg";
  const correctPassword = "11/05/2024";

  // Função para salvar o estado no localStorage


  // Função para carregar o estado do localStorage


  const handleLogin = () => {
    if (isLocked) return;

    const successAudio = new Audio(successSound);
    const errorAudio = new Audio(errorSound);

    if (username === correctUsername && password === correctPassword) {
      successAudio.play();
      navigate("/Jogo");
      setErrorCount(0);
      setUsername("");
      setPassword("");
    } else {
      errorAudio.play();
      const newErrorCount = errorCount + 1;
      setErrorCount(newErrorCount);
      if (newErrorCount >= 99) {
        const lockTime = new Date();
        lockTime.setHours(lockTime.getHours() + 3);
        
        setIsLocked(true);
      }
    }
  };

  

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-cover bg-center bg-no-repeat bg-gradient-to-r from-red-500 to-red-800">
        <div className="mb-4 ">
        <h1 className="text-3xl font-bold text-center text-white">Jornada do Amor 💝</h1>
        <p className="text-center text-semibold text-xl text-white"> 💝Lv e Dg 💝</p>
        </div>
      <div className="bg-white p-6 rounded shadow-lg shadow-zinc-800 w-80">
        
      
          <> 
          <h1 className="text-2xl font-bold mb-4">Login</h1>
            <input
              type="text"
              placeholder="Usuário"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full p-2 mb-4 border-4 border-red-500 rounded"
            />
            <h1 className="text-2xl font-bold mb-4">Senha</h1>
            <input
              type="password"
              placeholder="Senha"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-2 mb-4 border-4 border-red-500 rounded"
            />
            <button
              onClick={handleLogin}
              disabled={isLocked}
              className="w-full bg-red-500 text-white p-2 rounded hover:bg-red-600"
            >
              Entrar
            </button>
          </>
       
      </div>
      <div className="mt-3">
        <h1 className="text-lg text-center opacity-10">usuario: LvDg,<br/> senha: 11/05/2024</h1>
       </div>
    </div>
  );
};

export default Login;
