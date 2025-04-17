import * as React from "react";
import { BarChart } from "@mui/x-charts/BarChart";
import { useState, useEffect } from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import "./Diagramm.css";

export default function BasicBars() {
  const [hunde, setHunde] = useState(0);
  const [pferde, setPferde] = useState(0);
  const [katzen, setKatzen] = useState(0);
  const [meerschweinchen, setMeerschweinchen] = useState(0);
  const [haie, setHaie] = useState(0);
  const [tierarten, setTierarten] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/tiere")
      .then((res) => res.json())
      .then((data) => {
        setHunde(data.filter((tier) => tier.tierart === "Hund").length);
        setPferde(data.filter((tier) => tier.tierart === "Pferd").length);
        setKatzen(data.filter((tier) => tier.tierart === "Katze").length);
        setMeerschweinchen(
          data.filter((tier) => tier.tierart === "Meerschweinchen").length
        );
        setHaie(data.filter((tier) => tier.tierart === "Hai").length);
        setTierarten([...new Set(data.map((tier) => tier.tierart))]);
      })
      .catch((err) => {
        console.error("Fehler beim Laden der Tiere:", err);
      });
  }, []);

  return (
    <div id="diagramm">
      <BarChart
        xAxis={[
          {
            scaleType: "band",
            data: tierarten,
          },
        ]}
        series={[
          {
            data: tierarten.map((art) => {
              const tierartZuWert = {
                Hund: hunde,
                Pferd: pferde,
                Katze: katzen,
                Meerschweinchen: meerschweinchen,
                Hai: haie,
              };
              return tierartZuWert[art] || 0;
            }),
            label: "Tieranzahl",
            color: "#ff3c38",
          },
        ]}
        width={500}
        height={300}
      />
      <div id="buttons">
        <div id="pferde">
          <h3>Pferde</h3>
          <Stack spacing={2} direction="row">
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#ff3c38",
                "&:hover": { backgroundColor: "#9c2624" },
              }}
              onClick={() => setPferde(pferde + 1)}
            >
              +
            </Button>
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#ff3c38",
                "&:hover": { backgroundColor: "#9c2624" },
              }}
              onClick={() => setPferde(pferde - 1)}
            >
              -
            </Button>
          </Stack>
        </div>

        <div id="Katzen">
          <h3>Katzen</h3>
          <Stack spacing={2} direction="row">
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#ff3c38",
                "&:hover": { backgroundColor: "#9c2624" },
              }}
              onClick={() => setKatzen(katzen + 1)}
            >
              +
            </Button>
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#ff3c38",
                "&:hover": { backgroundColor: "#9c2624" },
              }}
              onClick={() => setKatzen(katzen - 1)}
            >
              -
            </Button>
          </Stack>
        </div>

        <div id="Haie">
          <h3>Haie</h3>
          <Stack spacing={2} direction="row">
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#ff3c38",
                "&:hover": { backgroundColor: "#9c2624" },
              }}
              onClick={() => setHaie(haie + 1)}
            >
              +
            </Button>
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#ff3c38",
                "&:hover": { backgroundColor: "#9c2624" },
              }}
              onClick={() => setHaie(haie - 1)}
            >
              -
            </Button>
          </Stack>
        </div>

        <div id="Hunde">
          <h3>Hunde</h3>
          <Stack spacing={2} direction="row">
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#ff3c38",
                "&:hover": { backgroundColor: "#9c2624" },
              }}
              onClick={() => setHunde(hunde + 1)}
            >
              +
            </Button>
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#ff3c38",
                "&:hover": { backgroundColor: "#9c2624" },
              }}
              onClick={() => setHunde(hunde - 1)}
            >
              -
            </Button>
          </Stack>
        </div>

        <div id="Meerschweinchen">
          <h3>Meerschweinchen</h3>
          <Stack spacing={2} direction="row">
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#ff3c38",
                "&:hover": { backgroundColor: "#9c2624" },
              }}
              onClick={() => setMeerschweinchen(meerschweinchen + 1)}
            >
              +
            </Button>
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#ff3c38",
                "&:hover": { backgroundColor: "#9c2624" },
              }}
              onClick={() => setMeerschweinchen(meerschweinchen - 1)}
            >
              -
            </Button>
          </Stack>
        </div>
      </div>
    </div>
  );
}
