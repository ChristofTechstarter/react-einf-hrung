import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import "./YugiohDetail.css";
import CircularProgress from "@mui/material/CircularProgress";

function YugiohDetail() {
  const { id } = useParams();
  const [karte, setKarte] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    fetch(`https://db.ygoprodeck.com/api/v7/cardinfo.php?id=${id}`)
      .then((res) => res.json())
      .then((data) => setKarte(data.data[0]));
  }, [id]);

  if (!karte)
    return (
      <>
        <Navbar />
        <div className="loadingContainer">
          <CircularProgress size={80} sx={{ color: "#ff3c38" }} />
        </div>
        <Footer />
      </>
    );

  return (
    <>
      <Navbar />
      <div className="detailContainer">
        <img
          src={karte.card_images[0].image_url}
          alt={karte.name}
          className="detailImage"
        />
        <div className="detailInfo">
          <h1>{karte.name}</h1>
          <p className="detailType">
            {karte.type} – {karte.race}
          </p>
          {karte.atk !== undefined && (
            <p className="detailStats">
              ATK: {karte.atk} / DEF: {karte.def}
            </p>
          )}
          {karte.level && <p className="detailLevel">Level: {karte.level}</p>}
          <p className="detailDesc">{karte.desc}</p>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default YugiohDetail;
