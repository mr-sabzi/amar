import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);

const labels = [
  "Jan", "Feb", "Mar", "Apr", "May", "Jun",
  "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
];

const data = {
  labels,
  datasets: [
    {
      label: "Dataset 1",
      data: [500,400, 200, 200, 290, 250, 280, 260, 210, 120, 160, 160],
      borderColor: "#2b3a42",
      backgroundColor: "rgba(43, 58, 66, 0.2)",
      fill: true,
      tension: 0.4,
    },
    {
      label: "Dataset 2",
      data: [190, 220, 230, 330, 340, 440, 400, 340, 370, 260, 410, 430],
      borderColor: "#00e5cc",
      backgroundColor: "rgba(0, 229, 204, 0.2)",
      fill: true,
      tension: 0.4,
    },
  ],
};

const options = {
  responsive: true,
  plugins: {
    legend: { display: false },
    tooltip: { mode: "index", intersect: false },
  },
  interaction: {
    mode: "nearest",
    axis: "x",
    intersect: false,
  },
  scales: {
    y: {
      
      beginAtZero: true,
      max: 500,
      grid: {
        color: "rgba(0, 0, 0, 0.05)",
      },
      ticks: {
        color: "#c0c0c0",
        stepSize: 100,
      },
    },
    x: {
      grid: { display: false },
      ticks: {
        color: "#c0c0c0",
      },
    },
  },
};

export default function RghitChart() {
  
  return <Line data={data} options={options} />;
}
