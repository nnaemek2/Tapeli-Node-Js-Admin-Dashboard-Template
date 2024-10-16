/*
Template Name: Tapeli - Responsive Bootstrap 5 Admin Dashboard
Author: Zoyothemes
Version: 1.0.0
Website: https://zoyothemes.com/
File: Apexcharts Mixed Chart
*/

//
// Mixed Chart
//

//  Line Column Mixed Chart
var options = {
    series: [{
        name: 'Website Blog',
        type: 'column',
        data: [440, 505, 414, 671, 227, 413, 201, 352, 752, 320, 257, 160]
    }, {
        name: 'Social Media',
        type: 'line',
        data: [23, 42, 35, 27, 43, 22, 17, 31, 22, 22, 12, 16]
    }],
    chart: {
        height: 350,
        type: 'line',
        parentHeightOffset: 0,
    },
    stroke: {
        width: [0, 4]
    },
    title: {
        text: 'Traffic Sources'
    },
    dataLabels: {
        enabled: true,
        enabledOnSeries: [1]
    },
    labels: ['01 Jan 2001', '02 Jan 2001', '03 Jan 2001', '04 Jan 2001', '05 Jan 2001', '06 Jan 2001', '07 Jan 2001', '08 Jan 2001', '09 Jan 2001', '10 Jan 2001', '11 Jan 2001', '12 Jan 2001'],
    xaxis: {
        type: 'datetime'
    },
    colors: ['#537AEF', '#8c57d1'],
    yaxis: [{
        title: {
            text: 'Website Blog',
        },

    }, {
        opposite: true,
        title: {
            text: 'Social Media'
        }
    }]
};
var chart = new ApexCharts(document.querySelector("#linecolumn_mixed_chart"), options);
chart.render();

//  Line & Area Mixed Chart
var options = {
    series: [{
        name: 'TEAM A',
        type: 'area',
        data: [44, 55, 31, 47, 31, 43, 26, 41, 31, 47, 33]
    }, {
        name: 'TEAM B',
        type: 'line',
        data: [55, 69, 45, 61, 43, 54, 37, 52, 44, 61, 43]
    }],
    chart: {
        height: 350,
        type: 'line',
        parentHeightOffset: 0,
    },
    stroke: {
        curve: 'smooth'
    },
    fill: {
        type: 'solid',
        opacity: [0.35, 1],
    },
    labels: ['Dec 01', 'Dec 02', 'Dec 03', 'Dec 04', 'Dec 05', 'Dec 06', 'Dec 07', 'Dec 08', 'Dec 09 ', 'Dec 10', 'Dec 11'],
    markers: {
        size: 0
    },
    colors: ['#537AEF', '#343a40'],
    yaxis: [
        {
            title: {
                text: 'Series A',
            },
        },
        {
            opposite: true,
            title: {
                text: 'Series B',
            },
        },
    ],
    tooltip: {
        shared: true,
        intersect: false,
        y: {
            formatter: function (y) {
                if (typeof y !== "undefined") {
                    return y.toFixed(0) + " points";
                }
                return y;
            }
        }
    }
};
var chart = new ApexCharts(document.querySelector('#line_area_chart'), options)
chart.render()


//  Line Column Area Mixed Chart
var options = {
    series: [{
        name: 'TEAM A',
        type: 'column',
        data: [23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30]
    }, {
        name: 'TEAM B',
        type: 'area',
        data: [44, 55, 41, 67, 22, 43, 21, 41, 56, 27, 43]
    }, {
        name: 'TEAM C',
        type: 'line',
        data: [30, 25, 36, 30, 45, 35, 64, 52, 59, 36, 39]
    }],
    chart: {
        height: 350,
        type: 'line',
        stacked: false,
        parentHeightOffset: 0,
    },
    stroke: {
        width: [0, 2, 5],
        curve: 'smooth'
    },
    plotOptions: {
        bar: {
            columnWidth: '50%'
        }
    },
    colors: ['#537AEF', '#5be7bd', '#963b68'],
    fill: {
        opacity: [0.85, 0.25, 1],
        gradient: {
            inverseColors: false,
            shade: 'light',
            type: "vertical",
            opacityFrom: 0.85,
            opacityTo: 0.55,
            stops: [0, 100, 100, 100]
        }
    },
    labels: ['01/01/2003', '02/01/2003', '03/01/2003', '04/01/2003', '05/01/2003', '06/01/2003', '07/01/2003',
        '08/01/2003', '09/01/2003', '10/01/2003', '11/01/2003'
    ],
    markers: {
        size: 0
    },
    xaxis: {
        type: 'datetime'
    },
    yaxis: {
        title: {
            text: 'Points',
        },
        min: 0
    },
    tooltip: {
        shared: true,
        intersect: false,
        y: {
            formatter: function (y) {
                if (typeof y !== "undefined") {
                    return y.toFixed(0) + " points";
                }
                return y;

            }
        }
    }
};
var chart = new ApexCharts(document.querySelector('#linecolumn_area_chart'), options)
chart.render()


//  Line Scatter Mixed Chart
var options = {
    series: [{
        name: 'Points',
        type: 'scatter',

        //2.14, 2.15, 3.61, 4.93, 2.4, 2.7, 4.2, 5.4, 6.1, 8.3
        data: [{
            x: 1,
            y: 2.14
        }, {
            x: 1.2,
            y: 2.19
        }, {
            x: 1.8,
            y: 2.43
        }, {
            x: 2.3,
            y: 3.8
        }, {
            x: 2.6,
            y: 4.14
        }, {
            x: 2.9,
            y: 5.4
        }, {
            x: 3.2,
            y: 5.8
        }, {
            x: 3.8,
            y: 6.04
        }, {
            x: 4.55,
            y: 6.77
        }, {
            x: 4.9,
            y: 8.1
        }, {
            x: 5.1,
            y: 9.4
        }, {
            x: 7.1,
            y: 7.14
        }, {
            x: 9.18,
            y: 8.4
        }]
    }, {
        name: 'Line',
        type: 'line',
        data: [{
            x: 1,
            y: 2
        }, {
            x: 2,
            y: 3
        }, {
            x: 3,
            y: 4
        }, {
            x: 4,
            y: 5
        }, {
            x: 5,
            y: 6
        }, {
            x: 6,
            y: 7
        }, {
            x: 7,
            y: 8
        }, {
            x: 8,
            y: 9
        }, {
            x: 9,
            y: 10
        }, {
            x: 10,
            y: 11
        }]
    }],
    chart: {
        height: 350,
        type: 'line',
        parentHeightOffset: 0,
    },
    fill: {
        type: 'solid',
    },
    colors: ['#537AEF', '#8c57d1'],
    markers: {
        size: [6, 0]
    },
    tooltip: {
        shared: false,
        intersect: true,
    },
    legend: {
        show: false
    },
    xaxis: {
        type: 'numeric',
        min: 0,
        max: 12,
        tickAmount: 12
    }
};
var chart = new ApexCharts(document.querySelector('#scatter_chart'), options)
chart.render()