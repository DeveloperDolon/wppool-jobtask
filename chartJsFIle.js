const dates = ["Feb", "Mar", "Apr", "May", "Jun", "Jul"];

const wppool = [
  265.02, 462.88, 163.41, 260.39, 159.28, 454.12, 555.57, 260.0, 361.0, 564.48,
];

const google = [
  138.72, 237.26, 339.81, 135.37, 435.38, 125.91, 325.93, 234.59, 539.86, 247.5,
];

const microsoft = [
  134.72, 337.26, 559.81, 235.37, 335.38, 525.91, 225.93, 734.59, 239.86, 247.5,
];

const twitter = [
  434.72, 237.26, 579.81, 235.37, 535.38, 125.91, 325.93, 234.59, 439.86, 547.5,
];

const data = {
  labels: dates,
  datasets: [
    {
      label: "WPPOOL",
      borderColor: "rgb(255, 99, 132)",
      data: wppool,
    },
    {
      label: "Google",
      borderColor: "rgb(0, 0, 255)",
      data: google,
    },
    {
      label: "Microsoft",
      borderColor: "#7ca63a",
      data: microsoft,
    },
    {
      label: "Twitter",
      borderColor: "#6F34A1",
      fillStyle: "#6F34A1",
      data: twitter,
    },
  ],
};

const config_line = {
  type: "line",
  data: data,
  options: {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: "bottom",
      },
    },
  },
};

const myLineChart = new Chart(
  document.getElementById("lineChart"),
  config_line
);
