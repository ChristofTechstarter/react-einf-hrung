import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import Titel from "./components/Titel/Titel";
import TierCard from "./components/TierCard/TierCard";
import Footer from "./components/Footer/Footer";
import Diagramm from "./components/Diagramm/Diagramm";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Titel />
    <div id="tierList">
      <TierCard name="Leo" art="Löwe" krankheit="Zahnentzündung" />
      <TierCard name="Bella" art="Katze" krankheit="Nierenschwäche" />
      <TierCard name="Max" art="Hund" krankheit="Arthrose" />
      <TierCard name="Lilli" art="Kaninchen" krankheit="Schnupfen" />
      <TierCard name="Rex" art="Hund" krankheit="Hüftprobleme" />
      <TierCard name="Coco" art="Papagei" krankheit="Federverlust" />
    </div>
    <Diagramm />
    <Footer />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
