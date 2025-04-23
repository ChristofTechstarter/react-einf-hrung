import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import "./Navbar.css";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  const createButton = (path, text) => {
    return (
      <Button
        sx={{
          borderRadius: 0,
          backgroundColor: "#3b3b3b",
          color: isActive(path) ? "#ff3c38" : "white",
          fontWeight: isActive(path) ? "bold" : "normal",
          textTransform: "none",
          borderBottom: isActive(path) ? "2px solid #ff3c38" : "none",
          "&:hover": {
            backgroundColor: "#4a4a4a",
          },
        }}
      >
        {text}
      </Button>
    );
  };

  return (
    <Box sx={{ flexGrow: 1, width: "100%" }}>
      <AppBar id="Navbar" position="fixed">
        <Toolbar>
          <Link to="/">{createButton("/", "Home")}</Link>

          <Link to="/kontakt">{createButton("/kontakt", "Kontakt")}</Link>

          <Link to="/about">{createButton("/about", "Über Uns")}</Link>

          <Link to="/faq">{createButton("/faq", "FAQ")}</Link>

          <Link to="/impressum">{createButton("/impressum", "Impressum")}</Link>

          <Link to="/pokemon">{createButton("/pokemon", "Pokemon")}</Link>

          <Link to="/starwars">{createButton("/starwars", "Star Wars")}</Link>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
