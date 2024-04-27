import React from "react";
import NavBar from "./components/NavBar";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import SuportDidactic from "./pages/SuportDidactic";
import Home from "./pages/Home";
import Clasa8 from "./pages/Clasa8";
import Clasa9 from "./pages/Clasa9";
import Clasa10 from "./pages/Clasa10";
import Clasa11 from "./pages/Clasa11";
import Clasa12 from "./pages/Clasa12";
import Manual8 from "./pages/manual8";
import Manual9 from "./pages/manual9";
import Manual10 from "./pages/manual10";
import Manual11 from "./pages/manual11";
import Manual12 from "./pages/manual12";
import Culegere from "./pages/Culegere";
import Algoritmi from "./pages/Algoritmi";
import News from "./pages/News";
import "./styles/banner.css";

function App() {
  const location = useLocation();
  return (
    <>
      <NavBar path={location.pathname} />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/suportdidactic" element={<SuportDidactic />}></Route>
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
        <Route path="/noutati" element={<News />}></Route>
      </Routes>
    </>
  );
}

export default App;
