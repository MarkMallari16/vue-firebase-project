<script setup>
import { ref } from "vue";
import { Bar } from "vue-chartjs";
import { Chart, BarElement, BarController, CategoryScale, LinearScale } from "chart.js";

Chart.register(BarElement, BarController, CategoryScale, LinearScale);

const chartData = ref({
  labels: ["January", "February", "March", "April", "May"],
  datasets: [
    {
      label: "Income",
      backgroundColor: "#22c55e",
      data: [5000, 4000, 6000, 7000, 8000],
    },
    {
      label: "Expense",
      backgroundColor: "#ef4444",
      data: [3000, 2000, 4000, 5000, 6000],
    },
  ],
});

const chartOptions = ref({
  responsive: true,
  plugins: {
    legend: {
      display: true,
      position: "top",
    },
    
  },
  
});
</script>

<template>
    <Bar :data="chartData" :options="chartOptions" />
</template>
