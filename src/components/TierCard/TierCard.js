import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { useState, useEffect } from "react";

function TierCard(props) {
  const [tier, setTier] = useState(null);
  const [working, setWorking] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    tierart: "",
    name: "",
    krankheit: "",
    age: "",
    gewicht: "",
  });

  async function deleteAnimal() {
    await fetch(`http://localhost:3001/tiere/${props.id}`, {
      method: "DELETE",
    });
    props.onUpdate();
  }

  async function getOneTier() {
    setLoading(true);
    try {
      const res = await fetch(`http://localhost:3001/tiere/${props.id}`);
      const data = await res.json();
      setTier(data);
      setFormData({
        tierart: data.tierart || "",
        name: data.name || "",
        krankheit: data.krankheit || "",
        age: data.age || "",
        gewicht: data.gewicht || "",
      });
    } catch (error) {
      console.error("Fehler beim Laden des Tiers:", error);
    } finally {
      setLoading(false);
    }
  }

  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  async function handleUpdate() {
    try {
      const res = await fetch(`http://localhost:3001/tiere/${props.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!res.ok) {
        throw new Error("Update fehlgeschlagen");
      }
      props.onUpdate();
      setWorking(false);
    } catch (error) {
      console.error("Fehler beim Aktualisieren:", error);
      alert("Fehler beim Aktualisieren.");
    }
  }

  useEffect(() => {
    if (working) {
      getOneTier();
    }
  }, [working]);

  function workingFormular() {
    if (loading) {
      return <p style={{ textAlign: "center", margin: "1rem" }}>Laden...</p>;
    }

    if (!tier) {
      return null;
    }

    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <form
          id="addTierForm"
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
          }}
        >
          <label>
            Tierart:
            <input
              type="text"
              name="tierart"
              required
              value={formData.tierart}
              onChange={handleInputChange}
            />
          </label>
          <label>
            Name:
            <input
              type="text"
              name="name"
              required
              value={formData.name}
              onChange={handleInputChange}
            />
          </label>
          <label>
            Krankheit:
            <input
              type="text"
              name="krankheit"
              value={formData.krankheit}
              onChange={handleInputChange}
            />
          </label>
          <label>
            Alter:
            <input
              type="number"
              name="age"
              required
              value={formData.age}
              onChange={handleInputChange}
            />
          </label>
          <label>
            Gewicht:
            <input
              type="number"
              name="gewicht"
              step="0.1"
              required
              value={formData.gewicht}
              onChange={handleInputChange}
            />
          </label>
        </form>
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
              onClick={handleUpdate}
            >
              Ändern
            </Button>
          </Stack>
        </div>
      </div>
    );
  }

  function handleWorking() {
    setWorking(!working);
  }

  return (
    <Box sx={{ minWidth: 275, margin: 2 }}>
      <Card
        variant="outlined"
        sx={{
          backgroundColor: "#3b3b3b",
          borderColor: "#ff3c38",
          color: "#e0e0e0",
          borderRadius: "12px",
          boxShadow: "0 4px 10px rgba(0, 0, 0, 0.5)",
          transition: "box-shadow 0.3s ease-in-out",
          "&:hover": {
            boxShadow: "0 6px 16px rgba(0, 0, 0, 0.7)",
          },
        }}
      >
        <CardContent>
          <Typography
            gutterBottom
            sx={{ color: "#ff3c38", fontSize: 18, fontWeight: "bold" }}
          >
            Name: {props.name}
          </Typography>

          <Typography gutterBottom sx={{ color: "#e0e0e0", fontSize: 14 }}>
            Art: {props.art}
          </Typography>

          <Typography gutterBottom sx={{ color: "#e0e0e0", fontSize: 14 }}>
            Alter: {props.age}
          </Typography>

          <Typography gutterBottom sx={{ color: "#e0e0e0", fontSize: 14 }}>
            Gewicht: {props.gewicht} KG
          </Typography>

          <Typography sx={{ color: "#b0b0b0", fontSize: 12 }}>
            Krankheit: {props.krankheit}
          </Typography>
        </CardContent>
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
              onClick={handleWorking}
            >
              Bearbeiten
            </Button>
            <Button
              variant="outlined"
              sx={{
                color: "#c9302d",
                borderColor: "#c9302d",
                "&:hover": { color: "#ff3c38", borderColor: "#ff3c38" },
              }}
              onClick={deleteAnimal}
            >
              Löschen
            </Button>
          </Stack>
        </div>
        {working && workingFormular()}
      </Card>
    </Box>
  );
}

export default TierCard;
