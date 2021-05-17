let ctx = document.getElementById('myChart1').getContext('2d');
    let myChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec', ''],
            datasets: [{
                data: [0, 3, 3, 5, 11, 14, 14, 16, 26, 29, 33, 34],
                backgroundColor: 'rgba(0, 0, 0, 0)',
                borderColor: '#96BA73',
                borderWidth: 3,
                lineTension: 0,
                pointBackgroundColor: '#96BA73',
                pointRadius: 4,
            }],
            
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true,
                        stepSize: 5,
                        suggestedMax: 35,
                    },
                }]
            },
            legend: false,
            responsive: true,
        }
    });

    let ctx2 = document.getElementById('myChart2').getContext('2d');
    let myChart2 = new Chart(ctx2, {
        type: 'line',
        data: {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec', ''],
            datasets: [{
                data: [0, 2, 7, 10, 10, 12, 14, 19, 23, 29, 33, 33],
                backgroundColor: 'rgba(0, 0, 0, 0)',
                borderColor: '#96BA73',
                borderWidth: 3,
                lineTension: 0,
                pointBackgroundColor: '#96BA73',
                pointRadius: 4,
            }],
            
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true,
                        stepSize: 5,
                        suggestedMax: 35,
                    },
                }]
            },
            legend: false,
            responsive: true,
        }
    });


    let ctx3 = document.getElementById('myChart3').getContext('2d');
    let myChart3 = new Chart(ctx3, {
        type: 'line',
        data: {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec', ''],
            datasets: [{
                data: [0, 5, 5, 5, 11, 12, 13, 14, 23, 23, 23, 30],
                backgroundColor: 'rgba(0, 0, 0, 0)',
                borderColor: '#96BA73',
                borderWidth: 3,
                lineTension: 0,
                pointBackgroundColor: '#96BA73',
                pointRadius: 4,
            }],
            
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true,
                        stepSize: 5,
                        suggestedMax: 35,
                    },
                }]
            },
            legend: false,
            responsive: true,
        }
    });