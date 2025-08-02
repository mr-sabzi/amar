import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

export default function BarChart() {
  const data = {
    labels: ["", "", "", "", "", "", "", "", ""],
    datasets: [
      {
        label: "",
        data: [320, 230, 110, 270, 510, 420, 480, 290, 140],
        backgroundColor: "white",
        borderRadius: 10,
        barThickness: 5,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        grid: {
          display: false,
        },
        ticks: {
          display: false,
        },
      },
      y: {
        ticks: {
          color: "white",
          font: {
            size: 12,
          },
        },
      grid: { display: false },
      },
    },
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  return (
    <div
      style={{
        width: "98%",
        height: "95%",
        padding: "5px",
        borderRadius: "12px",
        background: "linear-gradient(to right, #1a2152, #0f1329)",
      }}
    >
      <Bar data={data} options={options} />
    </div>
  );
}
