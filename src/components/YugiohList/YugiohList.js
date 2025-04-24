import React, { useEffect, useState } from "react";
import "./YugiohList.css";
import YugiohCard from "../YugiohCard/YugiohCard";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Skeleton from "@mui/material/Skeleton";

function YugiohList() {
  const [Karten, setKarten] = useState([]);
  const [offset, setOffset] = useState(0);
  const [isLoadingMore, setIsLoadingMore] = useState(false);
  const displayCards = 20;

  async function getKarten() {
    if (offset !== 0) setIsLoadingMore(true);
    const res = await fetch(
      `https://db.ygoprodeck.com/api/v7/cardinfo.php?num=${displayCards}&offset=${offset}`
    );
    const data = await res.json();
    setKarten((karten) => [...karten, ...data.data]);
    setIsLoadingMore(false);
  }

  useEffect(() => {
    getKarten();
  }, [offset]);

  function handleLoadMore() {
    setOffset((prevOffset) => prevOffset + displayCards);
  }

  if (Karten.length === 0) {
    return (
      <div className="yugiohList">
        {Array.from({ length: 20 }).map((_, index) => (
          <div
            key={index}
            style={{
              width: "220px",
              height: "320px",
              borderRadius: "12px",
              overflow: "hidden",
            }}
          >
            <Skeleton
              variant="rectangular"
              width="100%"
              height="100%"
              animation="wave"
            />
          </div>
        ))}
      </div>
    );
  }

  return (
    <>
      <div className="yugiohList">
        {Karten.map((karte) => (
          <YugiohCard key={karte.id} karte={karte} />
        ))}

        {isLoadingMore &&
          Array.from({ length: 20 }).map((_, index) => (
            <div
              key={`loadmore-${index}`}
              style={{
                width: "220px",
                height: "320px",
                borderRadius: "12px",
                overflow: "hidden",
              }}
            >
              <Skeleton
                variant="rectangular"
                width="100%"
                height="100%"
                animation="wave"
              />
            </div>
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
            onClick={handleLoadMore}
            disabled={isLoadingMore}
            sx={{
              color: "#c9302d",
              borderColor: "#c9302d",
              "&:hover": { color: "#ff3c38", borderColor: "#ff3c38" },
            }}
          >
            {isLoadingMore ? "Lädt..." : "Mehr Laden"}
          </Button>
        </Stack>
      </div>
    </>
  );
}

export default YugiohList;
