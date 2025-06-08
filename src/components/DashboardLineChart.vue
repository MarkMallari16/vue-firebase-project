<script setup>
import { Line } from "vue-chartjs";
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
} from "chart.js";
import { ref } from "vue";

ChartJS.register(
  Title,
  Tooltip,
  Legend,
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale
);

const chartData = ref({
  labels: ["January", "February", "March", "April", "May", "June", "July"], // Time periods (months)
  datasets: [
    {
      label: "Actual Spending",
      data: [500, 600, 800, 700, 850, 950, 1050],
      borderColor: "#FF6384",
      backgroundColor: "rgba(255,99,132,0.2)",
      borderWidth: 2,
      tension: 0.4, // Smooth the line (optional)
    },
    {
      label: "Budget",
      data: [700, 700, 700, 700, 700, 700, 700],
      borderColor: "#36A2EB",
      backgroundColor: "rgba(54,162,235,0.2)",
      borderWidth: 2,
      tension: 0.4,
    },
  ],
});

// Chart options (configures the chart)
const chartOptions = ref({
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "Monthly Budget Tracker",
    },
  },
});
</script>

<template>
  <Line :data="chartData" :options="chartOptions" />
</template>
