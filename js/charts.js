// Chart

var ctx = document.getElementById('myChart').getContext('2d');
var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'doughnut',

    // The data for our dataset
    data: {
        labels: ["% of the Year Completed", "Still to complete"],
        datasets: [{
            label: "Year Completion",
            backgroundColor: ['#003561', '#00abff'],
            borderColor: 'rgb(255, 255, 255)',
            data: [82, 18],
        }]
    },

    // Configuration options go here
    options: {
        responsive: false,
    }
});