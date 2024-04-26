import React from "react";
import NavBar from "./components/NavBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SuportDidactic from "./pages/SuportDidactic";
import Home from "./pages/Home";
import Clasa8 from "./pages/Clasa8";
import Clasa9 from "./pages/Clasa9";
import Clasa10 from "./pages/Clasa10";
import Clasa11 from "./pages/Clasa11";
import Clasa12 from "./pages/Clasa12";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<NavBar />}>
            <Route path="/home" element={<Home />}></Route>
            <Route path="/suportdidactic" element={<SuportDidactic />}></Route>
            <Route path="/clasa8" element={<Clasa8 />}></Route>
            <Route path="/clasa9" element={<Clasa9 />}></Route>
            <Route path="/clasa10" element={<Clasa10 />}></Route>
            <Route path="/clasa11" element={<Clasa11 />}></Route>
            <Route path="/clasa12" element={<Clasa12 />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
