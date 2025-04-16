import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

function TierCard(props) {
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

          <Typography sx={{ color: "#b0b0b0", fontSize: 12 }}>
            Krankheit: {props.krankheit}
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
}

export default TierCard;
