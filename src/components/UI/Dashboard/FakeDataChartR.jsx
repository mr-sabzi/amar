export const lineChartData = {
  labels: [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Aug",
    "Sep",
    "Oct",
    "Dec",
  ],
  datasets: [
    {
      label: "",
      data: [500, 400, 200, 200, 290, 250, 280, 260, 210, 120, 160, 160],
      borderColor: "#2b3a42",
      backgroundColor: "rgba(43, 58, 66, 0.2)",
      fill: true,
            tension: 0.4,
    },
    {
      label: "",
      data: [190, 220, 230, 330, 340, 440, 400, 340, 370, 260, 410, 430],
      borderColor: "#00e5cc",
      backgroundColor: "rgba(0, 229, 204, 0.2)",
      fill: true,
            tension: 0.4,
    },
  ],
};


export const barChartData = {
  labels: ["", "", "", "", "", "", "", "", ""],
  datasets: [
    {
      label: "Expenses",
      data: [350, 220, 110, 300, 510, 410, 500, 300, 150],
      backgroundColor: "white",
      borderWidth: 1,
      barThickness: 8,
      borderRadius: 4,


    },
  ],
};
