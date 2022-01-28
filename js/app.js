const moreData = [{
  // daily
  backgroundColor: 'rgba(213, 214, 236, 0.67)',
  borderColor: 'rgba(208, 209, 221, 1)',
  data: [{x:'Wed', y:220}, {x:'Thu', y:350}, {x:'Fri', y:300}, {x:'Sat', y:160}, {x:'Sun', y:250}, {x:'Mon', y:450}, {x:'Tue', y:300}, {x:'Wed ', y:260}, {x:'Thu ', y:400}, {x:'Fri ', y:365}, {x:'Sat ', y:200}],
  fill: {
    target: 'origin',
  },
  lineTension: 0.4,
  radius: 6
},
{
  // weekly
  backgroundColor: 'rgba(213, 214, 236, 0.67)',
  borderColor: 'rgba(208, 209, 221, 1)',
  data: [{x:'16-22', y:750}, {x:'23-29', y:1200}, {x:'30-5', y:1000}, {x:'6-12', y:2000}, {x:'13-19', y:1500}, {x:'20-26', y:1750}, {x:'27-3', y:1300}, {x:'4-10', y:1850}, {x:'11-17', y:2350}, {x:'18-24', y:1500}, {x:'25-31', y:2500}],
  fill: {
    target: 'origin',
  },
  lineTension: 0.4,
  radius: 6
},
{
  // monthly
  backgroundColor: 'rgba(213, 214, 236, 0.67)',
  borderColor: 'rgba(208, 209, 221, 1)',
  data: [{x:'Jan', y:500}, {x:'Feb', y:1000}, {x:'Mar', y:700}, {x:'Apr', y:400}, {x:'May', y:1000}, {x:'Jun', y:1100}, {x:'Jul', y:1500}, {x:'Aug', y:1000}, {x:'Sep', y:2000}, {x:'Oct', y:1800}, {x:'Nov', y:1900}, {x:'Dec', y:2200}],
  fill: {
    target: 'origin',
  },
  lineTension: 0.4,
  radius: 6
}]

  const data = {
    datasets: [{
      backgroundColor: 'rgba(213, 214, 236, 0.67)',
      borderColor: 'rgba(208, 209, 221, 1)',
      data: [{x:'10am', y:25}, {x:'11am', y:30}, {x:'12pm', y:16}, {x:'1pm', y:35}, {x:'2pm', y:20}, {x:'3pm', y:46}, {x:'4pm', y:20}, {x:'5pm', y:14}, {x:'6pm', y:35}, {x:'7pm', y:16}, {x:'8pm', y:20}],
      fill: {
        target: 'origin',
      },
      lineTension: 0.4,
      radius: 6
    },
    ]
  };

  const config = {
    type: 'line',
    data: data,
    options: {
      scales: {
        y: {
          suggestedMin: 0,
          // suggestedMax: 2500
        }
      }
    }
  };

  const myChart = new Chart(
    document.getElementById('traffic-chart'),
    config
  );

  const hourlyChart = myChart.config._config.data.datasets[0];
  const ul = document.querySelector('.traffic-ul');
  ul.addEventListener('click', (e) => {
    if (e.target.tagName === 'LI') {
      const clickedLi = e.target;
      let myChartArr = myChart.config._config.data.datasets;
      if (clickedLi.className === 'li-d') {
        myChartArr.shift();
        myChartArr.push(moreData[0]);
        myChart.update();
      } else if (clickedLi.className === 'li-w') {
        myChartArr.shift();
        myChartArr.push(moreData[1]);
        myChart.update();
      } else if (clickedLi.className === 'li-m') {
        myChartArr.shift();
        myChartArr.push(moreData[2]);
        myChart.update();
      } else if (clickedLi.className === 'li-h') {
        myChartArr.shift();
        myChartArr.push(hourlyChart);
        myChart.update();
      }
    }
  })
