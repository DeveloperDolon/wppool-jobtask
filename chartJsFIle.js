const dates = ["Feb", "Mar", "Apr", "May", "Jun", "Jul"];

const wppool = [265.02, 462.88, 163.41, 260.39, 159.28, 454.12];
const google = [138.72, 237.26, 339.81, 135.37, 435.38, 125.91];
const microsoft = [134.72, 337.26, 559.81, 235.37, 335.38, 525.91];
const twitter = [434.72, 237.26, 579.81, 235.37, 535.38, 125.91];

const data = {
  labels: dates,
  datasets: [
    {
      label: "WPPOOL",
      borderColor: "rgb(255, 99, 132)",
      backgroundColor: "rgb(255, 99, 132, 0.2)",
      data: wppool,
    },
    {
      label: "Google",
      borderColor: "rgb(0, 0, 255)",
      backgroundColor: "rgba(0, 0, 255, 0.2)",
      data: google,
    },
    {
      label: "Microsoft",
      borderColor: "#7ca63a",
      backgroundColor: "rgba(124, 166, 58, 0.2)",
      data: microsoft,
    },
    {
      label: "Twitter",
      borderColor: "#6F34A1",
      backgroundColor: "rgba(111, 52, 161, 0.2)",
      data: twitter,
    },
  ],
};

const config_line = {
  type: "line",
  data: data,
  options: {
    responsive: true,
    legend: {
      display: true,
      position: "bottom",
      labels: {
        boxWidth: 10,
        padding: 10,
        usePointStyle: true,
        generateLabels: function (chart) {
          return chart.data.datasets.map((dataset, i) => ({
            text: dataset.label,
            fillStyle: dataset.borderColor,
            strokeStyle: dataset.borderColor,
            hidden: !chart.isDatasetVisible(i),
            lineCap: chart.config.options.elements.line.borderCapStyle,
            lineDash: chart.config.options.elements.line.borderDash,
            lineDashOffset: chart.config.options.elements.line.borderDashOffset,
            lineJoin: chart.config.options.elements.line.borderJoinStyle,
            lineWidth: chart.config.options.elements.line.borderWidth,
            pointStyle: chart.config.data.datasets[i].pointStyle,
            rotation: chart.config.data.datasets[i].rotation,
          }));
        },
      },
    },
  },
  elements: {
    line: {
      tension: 0.4,
    },
  },
  scales: {
    y: {
      beginAtZero: true,
    },
  },
};

const myLineChart = new Chart(
  document.getElementById("lineChart"),
  config_line
);
