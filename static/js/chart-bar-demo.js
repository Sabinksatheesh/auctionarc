// Set new default font family and font color to mimic Bootstrap's default styling
Chart.defaults.global.defaultFontFamily = '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = '#292b2c';

// Bar Chart Example
const ctxBarChart = document.getElementById('myBarChart');
const myBarChart = new Chart(ctxBarChart, {
  type: 'bar',
  data: {
    labels: ['Books', 'Electronics', 'Antiques', 'Home Appliances',],
    datasets: [{
      label: 'Categories',
      backgroundColor: 'rgba(2,117,216,1)',
      borderColor: 'rgba(2,117,216,1)',
      data: [2, 0, 1, 0,],
    }],
  },
  options: {
    scales: {
      xAxes: [{
        time: {
          unit: 'month'
        },
        gridLines: {
          display: false
        },
        ticks: {
          maxTicksLimit: 6
        }
      }],
      yAxes: [{
        ticks: {
          min: 0,
          max: 6,
          maxTicksLimit: 5
        },
        gridLines: {
          display: true
        }
      }],
    },
    legend: {
      display: false
    }
  }
});
