import * as React from "react";
import { BarChart } from "@mui/x-charts/BarChart";

export default function BasicBars() {
  return (
    <BarChart
      xAxis={[
        {
          scaleType: "band",
          data: ["Löwen", "Katzen", "Hunde", "Kaninchen", "Papageien"],
        },
      ]}
      series={[
        {
          data: [1, 1, 2, 1, 1],
          label: "Tieranzahl",
          color: "#ff3c38",
        },
      ]}
      width={500}
      height={300}
    />
  );
}
