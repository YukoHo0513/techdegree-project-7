const purple = 'rgba(116, 119, 191, 1)'
const dailyData = {
  datasets: [{
    data: [{x:'S', y:75}, {x:'M', y:115}, {x:'T', y:175}, {x:'W', y:135}, {x:'T ', y:225}, {x:'F', y:200}, {x:'S ', y:100}],
    backgroundColor: [
      purple, purple, purple, purple, purple, purple, purple
    ],
    borderColor: [
      purple, purple, purple, purple, purple, purple, purple
    ],
    borderWidth: 1
  }]
};

const dailyConfig = {
    type: 'bar',
    data: dailyData,
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      },
      plugins: {
        legend: {
          display: false
      }
      }
    },
  };

const barChart = new Chart(
    document.getElementById('daily-traffic'),
    dailyConfig
);