const mobileData = {
    labels: [
        'Desktop',
        'Tablet',
        'Phones'
    ],
    datasets: [{
        label: 'My First Dataset',
        data: [300, 75, 75],
        backgroundColor: [
        'rgba(116, 119, 191, 1)',
        'rgba(129, 201, 143, 1)',
        'rgba(81, 182, 200, 1)'
        ],
        hoverOffset: 4
      }]
};

const mobileConfig = {
    type: 'doughnut',
    data: mobileData,
    options: {
        plugins: {
          legend: {
            position: 'right'
          }
        },
        responsive: true,
        maintainAspectRatio: false
      }
};

const doughnutChart = new Chart(
    document.getElementById('mobile-users'),
    mobileConfig
);

