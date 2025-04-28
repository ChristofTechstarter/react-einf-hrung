import { useState, useEffect } from "react";
import TierCard from "../TierCard/TierCard";
import "./TierList.css";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";

function TierList() {
  const [tiere, setTiere] = useState([]);
  const [showForm, setShowForm] = useState(false); // Zustand für das Anzeigen des Formulars
  const [formData, setFormData] = useState({
    tierart: "",
    name: "",
    krankheit: "",
    age: "",
    gewicht: "",
  });

  function loadTiere() {
    fetch("http://localhost:3001/tiere")
      .then((res) => res.json())
      .then((data) => {
        setTiere(data);
      })
      .catch((err) => {
        console.error("Fehler beim Laden der Tiere:", err);
      });
  }

  useEffect(() => {
    loadTiere();
  }, []);

  function handleFormSubmit(event) {
    event.preventDefault();

    fetch("http://localhost:3001/tiere", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then(() => {
        loadTiere();
        setShowForm(false);
        setFormData({
          tierart: "",
          name: "",
          krankheit: "",
          age: "",
          gewicht: "",
        });
      })
      .catch((err) => {
        console.error("Fehler beim Hinzufügen des Tiers:", err);
      });
  }

  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  }

  return (
    <>
      <div id="tierList">
        {tiere.map((tier) => (
          <TierCard
            key={tier.id}
            id={tier.id}
            name={tier.name}
            art={tier.tierart}
            age={tier.age}
            gewicht={tier.gewicht}
            krankheit={tier.krankheit}
            onUpdate={loadTiere}
          />
        ))}
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          textAlign: "center",
          margin: "2rem",
        }}
      >
        <Stack direction="row" spacing={2}>
          <Button
            variant="outlined"
            sx={{
              color: "#c9302d",
              borderColor: "#c9302d",
              "&:hover": { color: "#ff3c38", borderColor: "#ff3c38" },
            }}
            onClick={() => setShowForm(true)}
          >
            Tier hinzufügen
          </Button>
        </Stack>
      </div>

      {showForm && (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            marginTop: "2rem",
          }}
        >
          <form onSubmit={handleFormSubmit}>
            <label>
              Tierart:
              <input
                type="text"
                name="tierart"
                value={formData.tierart}
                onChange={handleInputChange}
                required
              />
            </label>
            <br />
            <label>
              Name:
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
              />
            </label>
            <br />
            <label>
              Krankheit:
              <input
                type="text"
                name="krankheit"
                value={formData.krankheit}
                onChange={handleInputChange}
              />
            </label>
            <br />
            <label>
              Alter:
              <input
                type="number"
                name="age"
                value={formData.age}
                onChange={handleInputChange}
                required
              />
            </label>
            <br />
            <label>
              Gewicht:
              <input
                type="number"
                name="gewicht"
                value={formData.gewicht}
                onChange={handleInputChange}
                step="0.1"
                required
              />
            </label>
            <br />
            <Stack sx={{ padding: "1rem" }} direction="row" spacing={2}>
              <Button
                type="submit"
                variant="outlined"
                sx={{
                  color: "#c9302d",
                  borderColor: "#c9302d",
                  "&:hover": { color: "#ff3c38", borderColor: "#ff3c38" },
                }}
              >
                Tier hinzufügen
              </Button>
              <Button
                type="submit"
                variant="outlined"
                sx={{
                  color: "#c9302d",
                  borderColor: "#c9302d",
                  "&:hover": { color: "#ff3c38", borderColor: "#ff3c38" },
                }}
                onClick={() => setShowForm(false)}
              >
                Abbrechen
              </Button>
            </Stack>
          </form>
        </div>
      )}
    </>
  );
}

export default TierList;
