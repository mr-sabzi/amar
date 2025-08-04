import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
  Title,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { lineChartData } from "./FakeDataChartR";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
  Title,
);


export default function RghitChart() {
   const option ={
        responsive: true,

    plugins: {
      legend: false,
    },

   }
    const data={}
  return <Line options={option} data={lineChartData}/>;
}
