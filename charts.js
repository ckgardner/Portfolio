/*jshint esversion: 6 */
console.log('charts.js connected');

const FRONT_END = document.getElementById('frontEndChart');
Chart.defaults.global.animation.duration = 2800;
let front_end_chart = new Chart(FRONT_END, {
    type: 'horizontalBar',
    data: {
        labels: ['HTML', 'CSS', 'JS', 'VueJS', 'Vuetify', 'jQuery'],
        datasets: [
            {
                data: [95, 85, 85, 80, 60, 55],
                backgroundColor: 'rgba(43, 190, 235, 0.5)',
                borderWidth: 2,
                borderColor: 'rgb(43, 190, 235)',
            },
        ]
    },
    options: {
        scales: {
            xAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        },
        legend: {
            display: false
        },
    },
});

const BACK_END = document.getElementById('backEndChart');
let back_end = new Chart(BACK_END, {
    type: 'horizontalBar',
    data: {
        labels: ['JS', 'Python', 'C++', 'Go', 'NodeJS', 'Express'],
        datasets: [
            {
                data: [92, 85, 85, 70, 70, 55],
                backgroundColor: 'rgba(43, 190, 235, .5)',
                borderWidth: 2,
                borderColor: 'rgb(43, 190, 235)',
            },
        ]
    },
    options: {
        scales: {
            xAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        },
        legend: {
            display: false
        },
    },
});