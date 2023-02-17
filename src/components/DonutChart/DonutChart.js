import React, { useEffect, useState } from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import { Box } from "@mui/material";

ChartJS.register(ArcElement, Tooltip, Legend);

export default function DonutChart({ chartData, matrix }) {
  const [filteredData, setFilteredData] = useState(
    chartData.map((item) => item.conversions)
  );

  useEffect(() => {
    matrixData(matrix);
  }, [matrix]);

  const matrixData = (matrix) => {
    if (matrix === "clicks") {
      setFilteredData(chartData.map((item) => item.clicks));
    } else if (matrix === "conversions") {
      setFilteredData(chartData.map((item) => item.conversions));
    } else if (matrix === "cost") {
      setFilteredData(chartData.map((item) => Number(item.cost.split(" ")[1])));
    } else {
      setFilteredData(
        chartData.map((item) => Number(item.revenue.split(" ")[1]))
      );
    }
  };

  const data = {
    labels: chartData.map((item) => item.group),
    datasets: [
      {
        label: "Group wise Ads Insights",
        data: filteredData,
        backgroundColor: ["#ff8711", "#00BDFE", "#232B2B"],
        borderColor: ["white"],
        borderWidth: 1,
      },
    ],
  };

  return (
    <Box sx={{ minWidth: "661px", display: "flex", justifyContent: "center" }}>
      <Box sx={{ maxWidth: "295px" }}>
        <Doughnut data={data} />
      </Box>
    </Box>
  );
}
