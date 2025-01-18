import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Contagem from "./Contagem";
import Destino from "./Destino";
import Jogo from "./Jogo";
import Home from "./Home";
import Login from "./Login";
import Presente from "./Presente";
function App() {
 
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Jogo" element={<Jogo />} />
        <Route path="/Contagem" element={<Contagem />} />
        <Route path="/Destino" element={<Destino />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/Presente" element={<Presente />} />
      </Routes>
    </Router>
  )
}

export default App
