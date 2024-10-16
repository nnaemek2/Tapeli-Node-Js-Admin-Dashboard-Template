/*
Template Name: Tapeli - Responsive Bootstrap 5 Admin Dashboard
Author: Zoyothemes
Version: 1.0.0
Website: https://zoyothemes.com/
File: Widgets Js
*/

// Sale Chart
var options = {
    series: [
        {
            name: "Last 9 days",
            data: [85, 80, 150, 127, 220, 200, 300, 290, 314]
        },
        {
            name: "Preceding period",
            data: [215, 165, 100, 200, 145, 185, 104, 124, 82]
        }
    ],
    chart: {
        type: 'line',
        height: 240,
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
        position: 'bottom',
        horizontalAlign: 'left',
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
        padding: {
            top: -20,
            right: 0,
            bottom: 10
        },
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
var chart = new ApexCharts(document.querySelector("#chart-new-clients"), options);
chart.render();


// Traffic 
var options = {
    series: [
        {
            name: "Marketing",
            data: [3, 7, 5, 9, 6, 4, 8, 12, 10, 5, 14, 16, 11, 17, 18, 7, 13, 15, 20, 2, 22, 21, 25, 30, 24, 27, 32, 28, 35, 31, 26, 40, 29, 33, 37, 34, 39]
        },
        {
            name: "Developing",
            data: [4, 9, 6, 8, 7, 5, 11, 10, 12, 6, 13, 15, 14, 18, 17, 9, 20, 22, 19, 11, 23, 21, 24, 27, 25, 28, 30, 26, 29, 31, 33, 35, 32, 34, 36, 37, 38]
        },
        {
            name: "Other",
            data: [5, 10, 7, 11, 9, 6, 13, 14, 15, 7, 16, 18, 17, 20, 19, 11, 22, 24, 21, 13, 26, 25, 28, 29, 27, 30, 32, 31, 34, 33, 35, 36, 38, 37, 40, 39, 41]
        }
    ],
    chart: {
        type: 'bar',
        height: 200,
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
        stacked: true,
    },
    plotOptions: {
        bar: {
            columnWidth: '50%',
        }
    },
    dataLabels: {
        enabled: false,
    },
    fill: {
        opacity: 1,
    },
    grid: {
        padding: {
            top: -20,
            right: 0,
            bottom: 10
        },
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
        tooltip: {
            enabled: false
        },
        axisBorder: {
            show: false,
        },
        type: 'datetime',
    },
    yaxis: {
        labels: {
            padding: 4
        },
    },
    labels: [
        '2021-01-01', '2021-01-02', '2021-01-03', '2021-01-04', '2021-01-05', '2021-01-06', '2021-01-07', '2021-01-08', '2021-01-09', '2021-01-10', '2021-01-11', '2021-01-12', '2021-01-13', '2021-01-14', '2021-01-15', '2021-01-16', '2021-01-17', '2021-01-18', '2021-01-19', '2021-01-20', '2021-01-21', '2021-01-22', '2021-01-23', '2021-01-24', '2021-01-25', '2021-01-26', '2021-01-27', '2021-01-28', '2021-01-29', '2021-01-30', '2021-01-31', '2021-02-01', '2021-02-02', '2021-02-03', '2021-02-04', '2021-02-05', '2021-02-06'
    ],
    colors: ["#537AEF", "#5279ef7d", "#5be7bd"],
    legend: {
        show: false,
    },
};
var chart = new ApexCharts(document.querySelector("#chart-traffic"), options);
chart.render();


//  Subscribers data
var options = {
    chart: {
        type: 'area',
        height: 135,
        parentHeightOffset: 0,
        sparkline: {
            enabled: true
        },
        animations: {
            enabled: false
        },
        stacked: true,
    },
    dataLabels: {
        enabled: false,
    },
    fill: {
        opacity: 0.16,
        type: 'solid'
    },
    stroke: {
        width: 2,
        lineCap: "round",
        curve: "smooth",
    },
    series: [
        {
            name: "Purchases",
            data: [15, 20, 18, 19, 21, 25, 27, 29, 24, 22, 20, 18, 19, 16, 23, 22, 26, 30, 32, 28, 26, 35, 39, 32, 40, 55, 60, 48, 52, 70]
        }
    ],
    plotOptions: {
        bar: {
            columnWidth: '50%',
        }
    },
    grid: {
        padding: {
            top: -20,
            right: 0,
            bottom: 10
        },
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
        tooltip: {
            enabled: false
        },
        axisBorder: {
            show: false,
        },
        type: 'datetime',
        tickAmount: 6,
    },
    yaxis: {
        labels: {
            padding: 4
        },
    },
    labels: [
        '2020-06-21', '2020-06-22', '2020-06-23', '2020-06-24', '2020-06-25', '2020-06-26', '2020-06-27', '2020-06-28', '2020-06-29', '2020-06-30', '2020-07-01', '2020-07-02', '2020-07-03', '2020-07-04', '2020-07-05', '2020-07-06', '2020-07-07', '2020-07-08', '2020-07-09', '2020-07-10', '2020-07-11', '2020-07-12', '2020-07-13', '2020-07-14', '2020-07-15', '2020-07-16', '2020-07-17', '2020-07-18', '2020-07-19', '2020-07-20'
    ],
    colors: ["#537AEF", "#5279ef7d", "#5be7bd"],
    legend: {
        show: false,
    },
    point: {
        show: false
    }
};
var chart = new ApexCharts(document.querySelector("#chart-development-activity"), options);
chart.render();


//  Money Flow Chart
var options = {
    chart: {
        type: 'bar',
        height: 290,
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
            columnWidth: '60%',
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



// Sales by Region
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
        height: 305,
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
var chart = new ApexCharts(document.querySelector("#sales-region"), options);
chart.render();



// Average Revenue
var options = {
    series: [{
        name: "Revenue chart",
        data: [12500, 8000, 7800, 9000, 6200, 6000, 4700, 4700, 5200, 5000, 5700, 5500, 5800, 5500, 6200, 5500, 5500, 2400, 2600, 2000]
    }],
    chart: {
        type: 'area',
        height: 250,
        parentHeightOffset: 0,
        zoom: {
            enabled: false
        },
        toolbar: {
            show: false
        },
    },
    dataLabels: {
        enabled: false
    },
    stroke: {
        curve: 'smooth',
        lineCap: 'round',
        width: '1',
        dashArray: 0,
    },
    xaxis: {
        categories: ['22 May', '23 May', '24 May', '25 May', '26 May', '27 May', '28 May', '29 May', '30 May', '01 June', '02 June', '03 June', '04 June', '05 June', '06 June', '07 June', '08 June', '09 June', '10 June'],
    },
    legend: {
        position: 'top',
        show: true,
        horizontalAlign: 'right'
    },
    fill: {
        opacity: 1
    },
    colors: ["#ec8290"],
    grid: {
        padding: {
            top: -20,
            right: 0,
        },
        strokeDashArray: 4,
        yaxis: {
            lines: {
                show: true
            }
        },
        xaxis: {
            lines: {
                strokeDashArray: 0,
                show: true,
            }
        },

    },
};
var chart = new ApexCharts(document.querySelector("#average-revenue"), options);
chart.render();



// Website Visitors
var options = {
    series: [{
        name: 'Website Visitor',
        data: [44, 55, 57, 56, 61, 58, 63, 60, 66]
    }],
    chart: {
        height: 305,
        type: 'bar',
        parentHeightOffset: 0,
        toolbar: {
            show: false
        },
    },
    plotOptions: {
        bar: {
            horizontal: false,
            columnWidth: '35%',
            endingShape: 'rounded',
            borderRadius: 5,
            borderRadiusApplication: 'end', // 'around', 'end'
            borderRadiusWhenStacked: 'last', // 'all', 'last'
        },  
    },
    dataLabels: {
        enabled: false
    },
    colors: ["#e68434"],
    stroke: {
        curve: 'smooth',
        lineCap: 'round',
        width: '1',
        dashArray: 0,
    },
    xaxis: {
        categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
    },
    fill: {
        opacity: 1
    },
    tooltip: {
        y: {
            formatter: function (val) {
                return  val + " K"
            }
        }
    },
    grid: {
        strokeDashArray: 4,
    },
};
var chart = new ApexCharts(document.querySelector("#website-visitors"), options);
chart.render();