import React from "react";
import NavBar from "./components/NavBar";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import Clasa8 from "./pages/Clase/Clasa8";
import Clasa9 from "./pages/Clase/Clasa9";
import Clasa10 from "./pages/Clase/Clasa10";
import Clasa11 from "./pages/Clase/Clasa11";
import Clasa12 from "./pages/Clase/Clasa12";
import Manual8 from "./pages/SuportDidactic/manual8";
import Manual9 from "./pages/SuportDidactic/manual9";
import Manual10 from "./pages/SuportDidactic/manual10";
import Manual11 from "./pages/SuportDidactic/manual11";
import Manual12 from "./pages/SuportDidactic/manual12";
import Culegere from "./pages/SuportDidactic/Culegere";
import Algoritmi from "./pages/SuportDidactic/Algoritmi";
import Exerseaza8 from "./pages/Exerseaza/Exerseaza8";
import Exerseaza9 from "./pages/Exerseaza/Exerseaza9";
import Exerseaza10 from "./pages/Exerseaza/Exerseaza10";
import Exerseaza11 from "./pages/Exerseaza/Exerseaza11";
import Exerseaza12 from "./pages/Exerseaza/Exerseaza12";
import News from "./pages/News";
import "./styles/banner.css";
import Login from "./views/Login";
import Register from "./views/Register";
function App() {
  const location = useLocation();
  return (
    <>
      <NavBar path={location.pathname} />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/clasa8" element={<Clasa8 />}></Route>
        <Route path="/clasa9" element={<Clasa9 />}></Route>
        <Route path="/clasa10" element={<Clasa10 />}></Route>
        <Route path="/clasa11" element={<Clasa11 />}></Route>
        <Route path="/clasa12" element={<Clasa12 />}></Route>
        <Route path="/culegere" element={<Culegere />}></Route>
        <Route path="/manual8" element={<Manual8 />}></Route>
        <Route path="/manual9" element={<Manual9 />}></Route>
        <Route path="/manual10" element={<Manual10 />}></Route>
        <Route path="/manual11" element={<Manual11 />}></Route>
        <Route path="/manual12" element={<Manual12 />}></Route>
        <Route path="/algoritmi" element={<Algoritmi />}></Route>
        <Route path="/exerseaza/clasa8" element={<Exerseaza8 />}></Route>
        <Route path="/exerseaza/clasa9" element={<Exerseaza9 />}></Route>
        <Route path="/exerseaza/clasa10" element={<Exerseaza10 />}></Route>
        <Route path="/exerseaza/clasa11" element={<Exerseaza11 />}></Route>
        <Route path="/exerseaza/clasa12" element={<Exerseaza12 />}></Route>
        <Route path="/noutati" element={<News />}></Route>
      </Routes>
    </>
  );
}

export default App;
