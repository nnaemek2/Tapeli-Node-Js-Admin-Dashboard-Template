/*
Template Name: Tapeli - Responsive Bootstrap 5 Admin Dashboard
Author: Zoyothemes
Version: 1.0.0
Website: https://zoyothemes.com/
File: Apexcharts Bar Chart
*/

// 
//  Bar Chart
// 

// Basic Bar Chart
var options = {
    series: [{
        data: [400, 430, 448, 470, 540, 580, 690, 1100, 1200, 1380]
    }],
    chart: {
        type: 'bar',
        height: 350,
        parentHeightOffset: 0,
    },
    plotOptions: {
        bar: {
            borderRadius: 4,
            borderRadiusApplication: 'end',
            horizontal: true,
        }
    },
    dataLabels: {
        enabled: false
    },
    colors: ["#537AEF"],
    xaxis: {
        categories: ['South Korea', 'Canada', 'United Kingdom', 'Netherlands', 'Italy', 'France', 'Japan',
            'United States', 'China', 'Germany'
        ],
    }
};
var chart = new ApexCharts(document.querySelector("#basic_bar_chart"), options);
chart.render();

// 
//  Grouped Bar Chart
// 
var options = {
    series: [{
        data: [44, 55, 41, 64, 22, 43, 21]
    }, {
        data: [53, 32, 33, 52, 13, 44, 32]
    }],
    chart: {
        type: 'bar',
        height: 350,
        parentHeightOffset: 0,
    },
    plotOptions: {
        bar: {
            horizontal: true,
            dataLabels: {
                position: 'top',
            },
        }
    },
    dataLabels: {
        enabled: true,
        offsetX: -6,
        style: {
            fontSize: '12px',
            colors: ['#fff']
        }
    },
    colors: ["#537AEF", "#343a40"],
    stroke: {
        show: true,
        width: 1,
        colors: ['#fff']
    },
    tooltip: {
        shared: true,
        intersect: false
    },
    xaxis: {
        categories: [2001, 2002, 2003, 2004, 2005, 2006, 2007],
    },
};
var chart = new ApexCharts(document.querySelector("#grouped_bar_chart"), options);
chart.render();

// 
// Stacked Bar
// 
var options = {
    series: [{
        name: 'Marine Sprite',
        data: [44, 55, 41, 37, 22, 43, 21]
    }, {
        name: 'Striking Calf',
        data: [53, 32, 33, 52, 13, 43, 32]
    }, {
        name: 'Tank Picture',
        data: [12, 17, 11, 9, 15, 11, 20]
    }, {
        name: 'Bucket Slope',
        data: [9, 7, 5, 8, 6, 9, 4]
    }, {
        name: 'Reborn Kid',
        data: [25, 12, 19, 32, 25, 24, 10]
    }],
    chart: {
        type: 'bar',
        height: 350,
        stacked: true,
        parentHeightOffset: 0,
    },
    plotOptions: {
        bar: {
            horizontal: true,
            dataLabels: {
                total: {
                    enabled: true,
                    offsetX: 0,
                    style: {
                        fontSize: '13px',
                        fontWeight: 900
                    }
                }
            }
        },
    },
    stroke: {
        width: 1,
        colors: ['#fff']
    },
    title: {
        text: 'Fiction Books Sales'
    },
    colors: ['#537AEF', '#963b68', '#eb9d59', '#62B7E5', '#29aa85'],
    xaxis: {
        categories: [2008, 2009, 2010, 2011, 2012, 2013, 2014],
        labels: {
            formatter: function (val) {
                return val + "K"
            }
        }
    },
    yaxis: {
        title: {
            text: undefined
        },
    },
    tooltip: {
        y: {
            formatter: function (val) {
                return val + "K"
            }
        }
    },
    fill: {
        opacity: 1
    },
    legend: {
        position: 'top',
        horizontalAlign: 'left',
        offsetX: 40
    }
};
var chart = new ApexCharts(document.querySelector("#stacked_bar_chart"), options);
chart.render();


// 
// Stacked Bars 100
// 
var options = {
    series: [{
        name: 'Marine Sprite',
        data: [44, 55, 41, 37, 22, 43, 21]
    }, {
        name: 'Striking Calf',
        data: [53, 32, 33, 52, 13, 43, 32]
    }, {
        name: 'Tank Picture',
        data: [12, 17, 11, 9, 15, 11, 20]
    }, {
        name: 'Bucket Slope',
        data: [9, 7, 5, 8, 6, 9, 4]
    }, {
        name: 'Reborn Kid',
        data: [25, 12, 19, 32, 25, 24, 10]
    }],
    chart: {
        type: 'bar',
        height: 350,
        stacked: true,
        stackType: '100%',
        parentHeightOffset: 0,
    },
    plotOptions: {
        bar: {
            horizontal: true,
        },
    },
    colors: ['#537AEF', '#6c757d', '#29aa85', '#8c57d1', '#29aa85'],
    stroke: {
        width: 1,
        colors: ['#fff']
    },
    title: {
        text: '100% Stacked Bar'
    },
    xaxis: {
        categories: [2008, 2009, 2010, 2011, 2012, 2013, 2014],
    },
    tooltip: {
        y: {
            formatter: function (val) {
                return val + "K"
            }
        }
    },
    fill: {
        opacity: 1

    },
    legend: {
        position: 'top',
        horizontalAlign: 'left',
        offsetX: 40
    }
};
var chart = new ApexCharts(document.querySelector("#stackedfull_bar_chart"), options);
chart.render();


// 
// Grouped Stacked Bars Chart
// 

var options = {
    series: [
        {
            name: 'Q1 Budget',
            group: 'budget',
            data: [44000, 55000, 41000, 67000, 22000]
        },
        {
            name: 'Q1 Actual',
            group: 'actual',
            data: [48000, 50000, 40000, 65000, 25000]
        },
        {
            name: 'Q2 Budget',
            group: 'budget',
            data: [13000, 36000, 20000, 8000, 13000]
        },
        {
            name: 'Q2 Actual',
            group: 'actual',
            data: [20000, 40000, 25000, 10000, 12000]
        }
    ],
    chart: {
        type: 'bar',
        height: 350,
        stacked: true,
        parentHeightOffset: 0,
    },
    stroke: {
        width: 1,
        colors: ['#fff']
    },
    dataLabels: {
        formatter: (val) => {
            return val / 1000 + 'K'
        }
    },
    plotOptions: {
        bar: {
            horizontal: true
        }
    },
    xaxis: {
        categories: [
            'Online advertising',
            'Sales Training',
            'Print advertising',
            'Catalogs',
            'Meetings'
        ],
        labels: {
            formatter: (val) => {
                return val / 1000 + 'K'
            }
        }
    },
    fill: {
        opacity: 1,
    },
    colors: ['#537AEF', '#5be7bd', '#eb9d59', '#8c57d1'],
    legend: {
        position: 'top',
        horizontalAlign: 'left'
    }
};
var chart = new ApexCharts(document.querySelector("#groupedstacked_bar_chart"), options);
chart.render();


// 
// Bar with Negative Values Chart
// 

var options = {
    series: [{
        name: 'Males',
        data: [0.4, 0.65, 0.76, 0.88, 1.5, 2.1, 2.9, 3.8, 3.9, 4.2, 4, 4.3, 4.1, 4.2, 4.5,
            3.9, 3.5, 3
        ]
    },
    {
        name: 'Females',
        data: [-0.8, -1.05, -1.06, -1.18, -1.4, -2.2, -2.85, -3.7, -3.96, -4.22, -4.3, -4.4,
        -4.1, -4, -4.1, -3.4, -3.1, -2.8
        ]
    }
    ],
    chart: {
        type: 'bar',
        height: 350,
        stacked: true,
        parentHeightOffset: 0,
    },
    colors: ["#537AEF", "#8c57d1"],
    plotOptions: {
        bar: {
            borderRadius: 5,
            borderRadiusApplication: 'end', // 'around', 'end'
            borderRadiusWhenStacked: 'all', // 'all', 'last'
            horizontal: true,
            barHeight: '80%',
        },
    },
    dataLabels: {
        enabled: false
    },
    stroke: {
        width: 1,
        colors: ["#fff"]
    },

    grid: {
        xaxis: {
            lines: {
                show: false
            }
        }
    },
    yaxis: {
        stepSize: 1
    },
    tooltip: {
        shared: false,
        x: {
            formatter: function (val) {
                return val
            }
        },
        y: {
            formatter: function (val) {
                return Math.abs(val) + "%"
            }
        }
    },
    title: {
        text: 'Mauritius population pyramid 2011'
    },
    xaxis: {
        categories: ['85+', '80-84', '75-79', '70-74', '65-69', '60-64', '55-59', '50-54',
            '45-49', '40-44', '35-39', '30-34', '25-29', '20-24', '15-19', '10-14', '5-9',
            '0-4'
        ],
        title: {
            text: 'Percent'
        },
        labels: {
            formatter: function (val) {
                return Math.abs(Math.round(val)) + "%"
            }
        }
    },
};

var chart = new ApexCharts(document.querySelector("#negative_bar_chart"), options);
chart.render();


//
// Bar with Markers
//
var options = {
    series: [
        {
            name: 'Actual',
            data: [
                {
                    x: '2011',
                    y: 12,
                    goals: [
                        {
                            name: 'Expected',
                            value: 14,
                            strokeWidth: 2,
                            strokeDashArray: 2,
                            strokeColor: '#775DD0'
                        }
                    ]
                },
                {
                    x: '2012',
                    y: 44,
                    goals: [
                        {
                            name: 'Expected',
                            value: 54,
                            strokeWidth: 5,
                            strokeHeight: 10,
                            strokeColor: '#775DD0'
                        }
                    ]
                },
                {
                    x: '2013',
                    y: 54,
                    goals: [
                        {
                            name: 'Expected',
                            value: 52,
                            strokeWidth: 10,
                            strokeHeight: 0,
                            strokeLineCap: 'round',
                            strokeColor: '#775DD0'
                        }
                    ]
                },
                {
                    x: '2014',
                    y: 66,
                    goals: [
                        {
                            name: 'Expected',
                            value: 61,
                            strokeWidth: 10,
                            strokeHeight: 0,
                            strokeLineCap: 'round',
                            strokeColor: '#775DD0'
                        }
                    ]
                },
                {
                    x: '2015',
                    y: 81,
                    goals: [
                        {
                            name: 'Expected',
                            value: 66,
                            strokeWidth: 10,
                            strokeHeight: 0,
                            strokeLineCap: 'round',
                            strokeColor: '#775DD0'
                        }
                    ]
                },
                {
                    x: '2016',
                    y: 67,
                    goals: [
                        {
                            name: 'Expected',
                            value: 70,
                            strokeWidth: 5,
                            strokeHeight: 10,
                            strokeColor: '#775DD0'
                        }
                    ]
                }
            ]
        }
    ],
    chart: {
        height: 350,
        type: 'bar',
        parentHeightOffset: 0,
    },
    plotOptions: {
        bar: {
            horizontal: true,
        }
    },
    colors: ['#4a5a6b'],
    dataLabels: {
        formatter: function (val, opt) {
            const goals =
                opt.w.config.series[opt.seriesIndex].data[opt.dataPointIndex]
                    .goals

            if (goals && goals.length) {
                return `${val} / ${goals[0].value}`
            }
            return val
        }
    },
    legend: {
        show: true,
        showForSingleSeries: true,
        customLegendItems: ['Actual', 'Expected'],
        markers: {
            fillColors: ['#4a5a6b', '#522c8f']
        }
    }
};
var chart = new ApexCharts(document.querySelector("#markers_bar_chart"), options);
chart.render();

// 
// Reversed Bar Chart
// 
var options = {
    series: [{
        data: [400, 430, 448, 470, 540, 580, 690]
    }],
    chart: {
        type: 'bar',
        height: 350,
        parentHeightOffset: 0,
    },
    annotations: {
        xaxis: [{
            x: 500,
            borderColor: '#00E396',
            label: {
                borderColor: '#00E396',
                style: {
                    color: '#fff',
                    background: '#00E396',
                },
                text: 'X annotation',
            }
        }],
        yaxis: [{
            y: 'July',
            y2: 'September',
            label: {
                text: 'Y annotation'
            }
        }]
    },
    colors: ["#537AEF"],
    plotOptions: {
        bar: {
            horizontal: true,
        }
    },
    dataLabels: {
        enabled: true
    },
    xaxis: {
        categories: ['June', 'July', 'August', 'September', 'October', 'November', 'December'],
    },
    grid: {
        xaxis: {
            lines: {
                show: true
            }
        }
    },
    yaxis: {
        reversed: true,
        axisTicks: {
            show: true
        }
    }
};
var chart = new ApexCharts(document.querySelector("#reversed_bar_chart"), options);
chart.render();


// 
// Reversed Bar Chart
// 
var options = {
    series: [{
        data: [400, 430, 448, 470, 540, 580, 690, 1100, 1200, 1380]
    }],
    chart: {
        type: 'bar',
        height: 350,
        parentHeightOffset: 0,
    },
    plotOptions: {
        bar: {
            barHeight: '100%',
            distributed: true,
            horizontal: true,
            dataLabels: {
                position: 'bottom'
            },
        }
    },
    colors: ['#537AEF', '#522c8f', '#8c57d1', '#963b68', '#ec8290', '#29aa85', '#62B7E5', '#5be7bd',
        '#963b68', '#eb9d59'
    ],
    dataLabels: {
        enabled: true,
        textAnchor: 'start',
        style: {
            colors: ['#fff']
        },
        formatter: function (val, opt) {
            return opt.w.globals.labels[opt.dataPointIndex] + ":  " + val
        },
        offsetX: 0,
        dropShadow: {
            enabled: true
        }
    },
    stroke: {
        width: 1,
        colors: ['#fff']
    },
    xaxis: {
        categories: ['South Korea', 'Canada', 'United Kingdom', 'Netherlands', 'Italy', 'France', 'Japan',
            'United States', 'China', 'India'
        ],
    },
    yaxis: {
        labels: {
            show: false
        }
    },
    title: {
        text: 'Custom DataLabels',
        align: 'center',
        floating: true
    },
    subtitle: {
        text: 'Category Names as DataLabels inside bars',
        align: 'center',
    },
    tooltip: {
        theme: 'dark',
        x: {
            show: false
        },
        y: {
            title: {
                formatter: function () {
                    return ''
                }
            }
        }
    }
};
var chart = new ApexCharts(document.querySelector("#datalabels_bar_chart"), options);
chart.render();


// 
// Patterned Bar Chart
// 
var options = {
    series: [{
        name: 'Marine Sprite',
        data: [44, 55, 41, 37, 22, 43, 21]
    }, {
        name: 'Striking Calf',
        data: [53, 32, 33, 52, 13, 43, 32]
    }, {
        name: 'Tank Picture',
        data: [12, 17, 11, 9, 15, 11, 20]
    }, {
        name: 'Bucket Slope',
        data: [9, 7, 5, 8, 6, 9, 4]
    }],
    chart: {
        type: 'bar',
        height: 350,
        stacked: true,
        parentHeightOffset: 0,
        dropShadow: {
            enabled: true,
            blur: 1,
            opacity: 0.25
        }
    },
    plotOptions: {
        bar: {
            horizontal: true,
            barHeight: '60%',
        },
    },
    dataLabels: {
        enabled: false
    },
    stroke: {
        width: 2,
    },
    title: {
        text: 'Compare Sales Strategy'
    },
    xaxis: {
        categories: [2008, 2009, 2010, 2011, 2012, 2013, 2014],
    },
    yaxis: {
        title: {
            text: undefined
        },
    },
    tooltip: {
        shared: false,
        y: {
            formatter: function (val) {
                return val + "K"
            }
        }
    },
    colors: ["#537AEF", "#8c57d1", "#5be7bd", "#ec8290"],
    fill: {
        type: 'pattern',
        opacity: 1,
        pattern: {
            style: ['circles', 'slantedLines', 'verticalLines', 'horizontalLines'], // string or array of strings

        }
    },
    states: {
        hover: {
            filter: 'none'
        }
    },
    legend: {
        position: 'right',
        offsetY: 40
    }
};
var chart = new ApexCharts(document.querySelector("#patterned_bar_chart"), options);
chart.render();



// 
// Bar with Images Chart
// 
var options = {
    series: [{
        name: 'coins',
        data: [2, 4, 3, 4, 3, 5, 5, 6.5, 6, 5, 4, 5, 8, 7, 7, 8, 8, 10, 9, 9, 12, 12,
            11, 12, 13, 14, 16, 14, 15, 17, 19, 21
        ]
    }],
    chart: {
        type: 'bar',
        height: 350,
        parentHeightOffset: 0,
        animations: {
            enabled: false
        }
    },
    plotOptions: {
        bar: {
            horizontal: true,
            barHeight: '100%',
        },
    },
    dataLabels: {
        enabled: false,
    },
    stroke: {
        colors: ["#fff"],
        width: 0.2
    },
    labels: Array.apply(null, { length: 32 }).map(function (el, index) {
        return index + 1;
    }),
    yaxis: {
        axisBorder: {
            show: false
        },
        axisTicks: {
            show: false
        },
        labels: {
            show: false
        },
        title: {
            text: 'Weight',
        },
    },
    grid: {
        position: 'back'
    },
    title: {
        text: 'Paths filled by clipped image',
        align: 'right',
        offsetY: 30,
        style: {
            fontWeight: 500
        }
    },
    fill: {
        type: 'image',
        opacity: 0.87,
        image: {
            src: ['./assets/images/small/img-11.jpg'],
            width: 466,
            height: 406
        }
    },
};
var chart = new ApexCharts(document.querySelector("#image_bar_chart"), options);
chart.render();