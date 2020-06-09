/*jshint esversion: 6 */
console.log('charts.js connected');

const FRONT_END = document.getElementById('frontEndChart');
Chart.defaults.global.animation.duration = 2400;
let front_end_chart = new Chart(FRONT_END, {
    type: 'horizontalBar',
    data: {
        labels: ['HTML', 'CSS', 'JS'],
        datasets: [{
            data: [90],
            backgroundColor: [
                'rgb(43, 190, 235, 0.5)',
            ]
        }]
    },
    options: {
        legend: {
            display: false
        },
    }
});

const BACK_END = document.getElementById('backEndChart');
let back_end = new Chart(BACK_END, {
    type: 'horizontalBar',
    data: {
        labels: ['6 AM', '7 AM', '8 AM', '9 AM', '10 AM', '11 AM', '12 PM', '1 PM', '2 PM', '3 PM', '4 PM', '5 PM', '6 PM', '7 PM'],
        datasets:[
            {
                data: [7, 12, 16, 29, 34, 39, 48, 90, 130, 150, 110, 80, 40, 60],
                backgroundColor: [
                    'rgb(253, 183, 19)',
                    'rgb(253, 183, 19)',
                    'rgb(253, 183, 19)',
                    'rgb(253, 183, 19)',
                    'rgb(253, 183, 19)',
                    'rgb(253, 183, 19)',
                    'rgb(253, 183, 19)',
                    'rgb(253, 183, 19)',
                    'rgb(253, 183, 19)',
                    'rgb(253, 183, 19)',
                    'rgb(253, 183, 19)',
                    'rgb(253, 183, 19)',
                    'rgb(253, 183, 19)',
                    'rgb(253, 183, 19)'
                ]
            },
            {
                data: [11, 16, 19, 19, 38, 29, 59, 99, 110, 140, 130, 70, 50, 20],
                backgroundColor: [
                    'rgb(238, 122, 83)',
                    'rgb(238, 122, 83)',
                    'rgb(238, 122, 83)',
                    'rgb(238, 122, 83)',
                    'rgb(238, 122, 83)',
                    'rgb(238, 122, 83)',
                    'rgb(238, 122, 83)',
                    'rgb(238, 122, 83)',
                    'rgb(238, 122, 83)',
                    'rgb(238, 122, 83)',
                    'rgb(238, 122, 83)',
                    'rgb(238, 122, 83)',
                    'rgb(238, 122, 83)',
                    'rgb(238, 122, 83)'
                ]
            },
            {
                data: [6, 20, 24, 27, 32, 36, 69, 104, 120, 136, 157, 110, 80, 40],
                backgroundColor: [
                    'rgb(238, 83, 83)',
                    'rgb(238, 83, 83)',
                    'rgb(238, 83, 83)',
                    'rgb(238, 83, 83)',
                    'rgb(238, 83, 83)',
                    'rgb(238, 83, 83)',
                    'rgb(238, 83, 83)',
                    'rgb(238, 83, 83)',
                    'rgb(238, 83, 83)',
                    'rgb(238, 83, 83)',
                    'rgb(238, 83, 83)',
                    'rgb(238, 83, 83)',
                    'rgb(238, 83, 83)',
                    'rgb(238, 83, 83)'
                ]
            }
        ]
    },
    options: {
        legend: {
            display: false
        },
    }
});