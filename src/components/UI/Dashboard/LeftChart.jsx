import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend,
  Title,
} from "chart.js";
import { barChartData, lineChartData } from "./FakeDataChartR";

ChartJS.register(
  CategoryScale,
  LinearScale,

  BarElement,
  Tooltip,
  Legend,
  Title
);
export default function BarChart() {
  const options = {
    responsive: true,

    plugins: {
      legend: {
        labels: {
          font: {
            size: 0,
          },
        },
      },
    },
    scales: {
      y: {
        ticks: {
          color: "white",
        },
      },
    },
  };

  const data = {};

  return (
    <div
      style={{
        width: "80%",
        height: "95%",
        padding: "5px",
        borderRadius: "12px",
        background: "linear-gradient(to right, #1a2152, #0f1329)",
      }}
    >
      <Bar data={barChartData} options={options} />
    </div>
  );
}
