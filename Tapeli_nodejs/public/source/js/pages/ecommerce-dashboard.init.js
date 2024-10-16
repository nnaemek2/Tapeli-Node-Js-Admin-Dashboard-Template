/*
Template Name: Tapeli - Responsive Bootstrap 5 Admin Dashboard
Author: Zoyothemes
Version: 1.0.0
Website: https://zoyothemes.com/
File: dashboard init Js
*/


// =================================================
// Ecommerce Chart
// =================================================
var options = {
    series: [
        {
            data: [40, 55, 40, 60, 48, 28, 56, 60],
        },
    ],
    chart: {
        height: 45,
        type: "bar",
        sparkline: {
            enabled: true,
        },
        animations: {
            enabled: false
        },
    },
    colors: ["#537AEF"],
    plotOptions: {
        bar: {
            columnWidth: "40%",
            borderRadius: 2,
        },
    },
    dataLabels: {
        enabled: false,
    },
    fill: {
        opacity: 1,
    },
    grid: {
        strokeDashArray: 4,
    },
    labels: [1, 2, 3, 4, 5, 6, 7, 8],
    xaxis: {
        crosshairs: {
            width: 1,
        },
    },
    yaxis: {
        labels: {
            padding: 4
        },
    },
    tooltip: {
        theme: 'light'
    },
    legend: {
        show: false,
    },
};
var chart = new ApexCharts(document.querySelector("#new-orders"), options);
chart.render();


// =================================================
// Sales Chart
// =================================================
var options = {
    series: [
        {
            data: [55, 25, 35, 55, 35, 65, 40, 65],
        },
    ],
    chart: {
        height: 45,
        type: "bar",
        sparkline: {
            enabled: true,
        },
        animations: {
            enabled: false
        },
    },
    colors: ["#ec8290"],
    plotOptions: {
        bar: {
            columnWidth: "40%",
            borderRadius: 2,
        },
    },
    dataLabels: {
        enabled: false,
    },
    fill: {
        opacity: 1,
    },
    grid: {
        strokeDashArray: 4,
    },
    labels: [1, 2, 3, 4, 5, 6, 7, 8],
    xaxis: {
        crosshairs: {
            width: 1,
        },
    },
    yaxis: {
        labels: {
            padding: 4
        },
    },
    tooltip: {
        theme: 'light'
    },
    legend: {
        show: false,
    },
};
var chart = new ApexCharts(document.querySelector("#sales-report"), options);
chart.render();


// =================================================
// Revenue Chart
// =================================================
var options = {
    series: [
        {
            data: [60, 38, 30, 50, 42, 37, 44, 60],
        },
    ],
    chart: {
        height: 45,
        type: "bar",
        sparkline: {
            enabled: true,
        },
        animations: {
            enabled: false
        },
    },
    colors: ["#29aa85"],
    plotOptions: {
        bar: {
            columnWidth: "40%",
            borderRadius: 2,
        },
    },
    dataLabels: {
        enabled: false,
    },
    fill: {
        opacity: 1,
    },
    grid: {
        strokeDashArray: 4,
    },
    labels: [1, 2, 3, 4, 5, 6, 7, 8],
    xaxis: {
        crosshairs: {
            width: 1,
        },
    },
    yaxis: {
        labels: {
            padding: 4
        },
    },
    tooltip: {
        theme: 'light'
    },
    legend: {
        show: false,
    },
};
var chart = new ApexCharts(document.querySelector("#revenue"), options);
chart.render();



// =================================================
// Expenses Chart
// =================================================
var options = {
    series: [
        {
            data: [65, 38, 28, 55, 40, 35, 50, 70],
        },
    ],
    chart: {
        height: 45,
        type: "bar",
        sparkline: {
            enabled: true,
        },
        animations: {
            enabled: false
        },
    },
    colors: ["#537AEF"],
    plotOptions: {
        bar: {
            columnWidth: "40%",
            borderRadius: 2,
        },
    },
    dataLabels: {
        enabled: false,
    },
    fill: {
        opacity: 1,
    },
    grid: {
        strokeDashArray: 4,
    },
    labels: [1, 2, 3, 4, 5, 6, 7, 8],
    xaxis: {
        crosshairs: {
            width: 1,
        },
    },
    yaxis: {
        labels: {
            padding: 4
        },
    },
    tooltip: {
        theme: 'light'
    },
    legend: {
        show: false,
    },
};
var chart = new ApexCharts(document.querySelector("#expenses"), options);
chart.render();


// Money Flow Chart
var options = {
    chart: {
        type: 'bar',
        height: 350,
        stacked: true,
        parentHeightOffset: 0,
        toolbar: {
            show: false
        },
        zoom: {
            enabled: true
        }
    },
    series: [{
        name: 'Profit',
        data: [300, 333, 258, 295, 258, 326, 275, 283, 271, 316, 334, 271]
    }, {
        name: 'Income',
        data: [300, 333, 258, 295, 258, 326, 275, 283, 271, 316, 333, 271]
    }, {
        name: 'Expense',
        data: [300, 333, 258, 295, 259, 326, 275, 283, 271, 316, 333, 271]
    }],
    plotOptions: {
        bar: {
            horizontal: false,
            borderRadius: 5,
            borderRadiusApplication: 'end', // 'around', 'end'
            borderRadiusWhenStacked: 'last', // 'all', 'last'
            columnWidth: '40%',
            dataLabels: {
                total: {
                    style: {
                        fontSize: '13px',
                        fontWeight: 900,
                    }
                }
            },
        },
    },
    dataLabels: {
        enabled: false,
    },
    xaxis: {
        categories: ['Jan', 'Fab', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        axisBorder: {
            show: false,
        },
    },
    yaxis: {
        labels: {
            padding: 4
        },
    },
    colors: ["#1a4de7", "#537AEF", "#dee2e6"],
    legend: {
        position: 'top',
        show: true,
        horizontalAlign: 'right'
    },
    fill: {
        opacity: 1
    },
    grid: {
        padding: {
            top: -20,
            right: 0,
            bottom: 0
        },
        strokeDashArray: 4,
        xaxis: {
            lines: {
                show: true
            }
        },
    },
};
var chart = new ApexCharts(document.querySelector("#chart-money"), options);
chart.render();



// Sales by Country
var options = {
    series: [{
        name: 'India',
        data: [80, 50, 30, 40, 100, 20],
    }, {
        name: 'Australia',
        data: [20, 30, 40, 80, 20, 80],
    }, {
        name: 'Canada',
        data: [44, 76, 78, 13, 43, 10],
    }],
    chart: {
        type: 'radar',
        height: 350,
        parentHeightOffset: 0,
        dropShadow: {
            enabled: true,
            blur: 1,
            left: 1,
            top: 1
        },
        toolbar: {
            show: false
        },
    },
    stroke: {
        width: 2,
        dashArray: 2
    },
    fill: {
        opacity: 0.1
    },
    markers: {
        size: 0,
        hover: {
            size: 10
        }
    },
    yaxis: {
        stepSize: 20
    },
    xaxis: {
        categories: ['2019', '2020', '2021', '2022', '2023', '2024'],
        labels: {
            show: true,
            style: {
                colors: ["#001b2f", "#001b2f", "#001b2f", "#001b2f", "#001b2f", "#001b2f"],
                fontSize: "13px",
            }
        }
    },
    colors: ["#ec8290", "#537AEF", "#8c57d1"],
    dataLabels: {
        enabled: false,
        background: {
            enabled: true,
        }
    }
};
var chart = new ApexCharts(document.querySelector("#sales-country"), options);
chart.render();


// Repeat Custmer
var options = {
    series: [
        {
            name: "New Customer",
            data: [85, 80, 150, 127, 220, 200, 300, 290, 314]
        },
        {
            name: "Old Customer",
            data: [215, 165, 100, 200, 145, 185, 104, 124, 82]
        }
    ],
    chart: {
        type: 'line',
        height: 305,
        parentHeightOffset: 0,
        zoom: {
            enabled: false
        },
        toolbar: {
            show: false
        },
        animations: {
            enabled: false
        },
    },
    dataLabels: {
        enabled: false
    },
    fill: {
        opacity: 1,
    },
    stroke: {
        width: [2, 2],
        curve: 'straight',
        dashArray: [0, 7]
    },
    legend: {
        position: 'top',
        horizontalAlign: 'right',
        tooltipHoverFormatter: function (val, opts) {
            return val + ' <strong>' + opts.w.globals.series[opts.seriesIndex][opts.dataPointIndex] + '</strong>'
        }
    },
    markers: {
        size: 0,
        hover: {
            sizeOffset: 6
        }
    },
    grid: {
        strokeDashArray: 4,
        xaxis: {
            lines: {
                show: true
            }
        },
    },
    xaxis: {
        labels: {
            padding: 0,
        },
        axisBorder: {
            show: false,
        },
        tooltip: {
            enabled: false
        },
        categories: ['09', '10', '11', '12', '13', '14', '15', '16'],
    },
    tooltip: {
        y: [
            {
                title: {
                    formatter: function (val) {
                        return val
                    }
                }
            },
            {
                title: {
                    formatter: function (val) {
                        return val
                    }
                }
            }
        ]
    },
    colors: ["#537AEF", "#5be7bd"],
};
var chart = new ApexCharts(document.querySelector("#repeat-customer"), options);
chart.render();