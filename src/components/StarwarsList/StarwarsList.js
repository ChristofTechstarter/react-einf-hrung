import React, { useEffect, useState } from "react";
import StarwarsCard from "../StarwarsCard/StarwarsCard";
import "./StarwarsList.css";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Skeleton from "@mui/material/Skeleton";

function StarwarsList() {
  const [people, setPeople] = useState([]);
  const [page, setPage] = useState(1);
  const limit = 10;
  const [loading, setLoading] = useState(true);
  const [isLoadingMore, setIsLoadingMore] = useState(false);

  const fetchPeople = (currentPage, isLoadMore = false) => {
    if (isLoadMore) {
      setIsLoadingMore(true);
    } else {
      setLoading(true);
    }

    fetch(
      `https://www.swapi.tech/api/people?page=${currentPage}&limit=${limit}`
    )
      .then((res) => res.json())
      .then((data) => {
        const urls = data.results.map((people) => people.url);
        return Promise.all(
          urls.map((url) => fetch(url).then((res) => res.json()))
        );
      })
      .then((peopleData) => {
        setPeople((prev) => [...prev, ...peopleData]);
      })
      .catch((err) => {
        console.error("Fehler beim Laden der Starwars Daten:", err);
      })
      .finally(() => {
        setLoading(false);
        setIsLoadingMore(false);
      });
  };

  useEffect(() => {
    fetchPeople(page, page > 1); // Nur ab Seite 2 ist es "load more"
  }, [page]);

  const handleLoadMore = () => {
    setPage((prev) => prev + 1);
  };

  return (
    <>
      <div className="containerList">
        {loading && people.length === 0
          ? Array.from({ length: limit }).map((_, i) => (
              <div key={i}>
                <Skeleton
                  variant="rectangular"
                  width={300}
                  height={200}
                  sx={{ borderRadius: "10px" }}
                />
              </div>
            ))
          : people.map((person) => (
              <StarwarsCard
                key={person.result.uid}
                Name={person.result.properties.name}
                Geschlecht={person.result.properties.gender}
                Haarfarbe={person.result.properties.hair_color}
                Größe={person.result.properties.height}
                Gewicht={person.result.properties.mass}
              />
            ))}

        {isLoadingMore &&
          Array.from({ length: limit }).map((_, i) => (
            <div key={`loadMore-${i}`}>
              <Skeleton
                variant="rectangular"
                width={300}
                height={200}
                sx={{ borderRadius: "10px" }}
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
            sx={{
              display: isLoadingMore || loading ? "none" : "block",
              color: "#c9302d",
              borderColor: "#c9302d",
              "&:hover": { color: "#ff3c38", borderColor: "#ff3c38" },
            }}
          >
            Mehr Laden
          </Button>
        </Stack>
      </div>
    </>
  );
}

export default StarwarsList;
