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

  return (
    <Box sx={{ flexGrow: 1, width: "100%" }}>
      <AppBar id="Navbar" position="fixed">
        <Toolbar>
          <Link to="/">
            <Button
              sx={{
                borderRadius: 0,
                backgroundColor: "#3b3b3b",
                color: isActive("/") ? "#ff3c38" : "white",
                fontWeight: isActive("/") ? "bold" : "normal",
                textTransform: "none",
                borderBottom: isActive("/") ? "2px solid #ff3c38" : "none",
                "&:hover": {
                  backgroundColor: "#4a4a4a",
                },
              }}
            >
              Home
            </Button>
          </Link>

          <Link to="/kontakt">
            <Button
              sx={{
                borderRadius: 0,
                backgroundColor: "#3b3b3b",
                color: isActive("/kontakt") ? "#ff3c38" : "white",
                fontWeight: isActive("/kontakt") ? "bold" : "normal",
                textTransform: "none",
                borderBottom: isActive("/kontakt")
                  ? "2px solid #ff3c38"
                  : "none",
                "&:hover": {
                  backgroundColor: "#4a4a4a",
                },
              }}
            >
              Kontakt
            </Button>
          </Link>

          <Link to="/about">
            <Button
              sx={{
                borderRadius: 0,
                backgroundColor: "#3b3b3b",
                color: isActive("/about") ? "#ff3c38" : "white",
                fontWeight: isActive("/about") ? "bold" : "normal",
                textTransform: "none",
                borderBottom: isActive("/about") ? "2px solid #ff3c38" : "none",
                "&:hover": {
                  backgroundColor: "#4a4a4a",
                },
              }}
            >
              Über Uns
            </Button>
          </Link>

          <Link to="/faq">
            <Button
              sx={{
                borderRadius: 0,
                backgroundColor: "#3b3b3b",
                color: isActive("/faq") ? "#ff3c38" : "white",
                fontWeight: isActive("/faq") ? "bold" : "normal",
                textTransform: "none",
                borderBottom: isActive("/faq") ? "2px solid #ff3c38" : "none",
                "&:hover": {
                  backgroundColor: "#4a4a4a",
                },
              }}
            >
              FAQ
            </Button>
          </Link>

          <Link to="/impressum">
            <Button
              sx={{
                borderRadius: 0,
                backgroundColor: "#3b3b3b",
                color: isActive("/impressum") ? "#ff3c38" : "white",
                fontWeight: isActive("/impressum") ? "bold" : "normal",
                textTransform: "none",
                borderBottom: isActive("/impressum")
                  ? "2px solid #ff3c38"
                  : "none",
                "&:hover": {
                  backgroundColor: "#4a4a4a",
                },
              }}
            >
              Impressum
            </Button>
          </Link>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
