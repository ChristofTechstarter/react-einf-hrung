import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Kontakt from "./pages/Kontakt/Kontakt";
import About from "./pages/About/About";
import Faq from "./pages/Faq/Faq";
import Impressum from "./pages/Impressum/impressum";
import Pokemon from "./pages/Pokemon/Pokemon";
import Starwars from "./pages/Starwars/Starwars";
import PokemonDetail from "./pages/PokemonDetail/PokemonDetail";
import Yugioh from "./pages/Yugioh/Yugioh";
import YugiohDetail from "./pages/YugiohDetail/YugiohDetail";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/kontakt" element={<Kontakt />} />
      <Route path="/about" element={<About />} />
      <Route path="/faq" element={<Faq />} />
      <Route path="/impressum" element={<Impressum />} />
      <Route path="/pokemon" element={<Pokemon />} />
      <Route path="/pokemon/:id" element={<PokemonDetail />} />
      <Route path="/starwars" element={<Starwars />} />
      <Route path="/yugioh" element={<Yugioh />} />
      <Route path="/yugioh/:id" element={<YugiohDetail />} />
    </Routes>
  </Router>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
