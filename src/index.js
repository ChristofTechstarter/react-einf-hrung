import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import Titel from "./components/Titel/Titel";
import TierCard from "./components/TierCard/TierCard";
import Footer from "./components/Footer/Footer";
import Diagramm from "./components/Diagramm/Diagramm";
import TierList from "./components/TierList/TierList";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Titel />
    <TierList />
    <Diagramm />
    <Footer />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
