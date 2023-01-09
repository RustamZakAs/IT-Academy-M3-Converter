const ctxBuy = document.getElementById('myChartBuy');

new Chart(ctxBuy, {
    type: 'bar',
    data: {
    labels: ['USD', 'EUR', 'AZN', 'UAH', 'GBP', 'RUB'],
    datasets: [{
        label: 'Buy statistics',
        data: [12, 19, 3, 5, 2, 3],
        borderWidth: 1
    }]
    },
    options: {
    scales: {
        y: {
        beginAtZero: true
        }
    }
    }
});

const ctxSale = document.getElementById('myChartSale');

new Chart(ctxSale, {
    type: 'bar',
    data: {
    labels: ['USD', 'EUR', 'AZN', 'UAH', 'GBP', 'RUB'],
    datasets: [{
        label: 'Sale statistics',
        data: [12, 19, 3, 5, 2, 3],
        borderWidth: 1
    }]
    },
    options: {
    scales: {
        y: {
        beginAtZero: true
        }
    }
    }
});