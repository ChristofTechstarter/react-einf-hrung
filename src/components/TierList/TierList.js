import { useState, useEffect } from "react";
import TierCard from "../TierCard/TierCard";

function TierList() {
  const [tiere, setTiere] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/tiere")
      .then((res) => res.json())
      .then((data) => {
        setTiere(data);
      })
      .catch((err) => {
        console.error("Fehler beim Laden der Tiere:", err);
      });
  }, []);

  return (
    <div id="tierList">
      {tiere.map((tier) => (
        <TierCard
          key={tier.id}
          name={tier.name}
          art={tier.tierart}
          krankheit={tier.krankheit}
        />
      ))}
    </div>
  );
}

export default TierList;
