/*
Template Name: Tapeli - Responsive Bootstrap 5 Admin Dashboard
Author: Zoyothemes
Version: 1.0.0
Website: https://zoyothemes.com/
File: Apexcharts Column Chart
*/

//
// Basic Column Chart
//
var options = {
    series: [
        {
            name: "Net Profit",
            data: [44, 55, 57, 56, 61, 58, 63, 60, 66],
        },
        {
            name: "Revenue",
            data: [76, 85, 101, 98, 87, 105, 91, 114, 94],
        },
        {
            name: "Free Cash Flow",
            data: [35, 41, 36, 26, 45, 48, 52, 53, 41],
        },
    ],
    chart: {
        type: "bar",
        height: 350,
        parentHeightOffset: 0,
        toolbar: {
            show: false
        }
    },
    colors: ['#537AEF', '#29aa85', '#8c57d1'],
    plotOptions: {
        bar: {
            horizontal: false,
            columnWidth: "45%",
            endingShape: "rounded",
        },
    },
    dataLabels: {
        enabled: false,
    },
    stroke: {
        show: true,
        width: 2,
        colors: ["transparent"],
    },
    xaxis: {
        categories: ["Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct"],
    },
    yaxis: {
        title: {
            text: "$ (thousands)",
        },
    },
    grid: {
        borderColor: "#f1f1f1",
    },
    fill: {
        opacity: 1,
    },
    tooltip: {
        y: {
            formatter: function (val) {
                return "$ " + val + " thousands";
            },
        },
    },
};
var chart = new ApexCharts(
    document.querySelector("#basic_column_chart"),
    options
);
chart.render();


//
// Column with Data Labels
//
var options = {
    series: [
        {
            name: "Inflation",
            data: [2.3, 3.1, 4.0, 10.1, 4.0, 3.6, 3.2, 2.3, 1.4, 0.8, 0.5, 0.2],
        },
    ],
    chart: {
        height: 350,
        type: "bar",
        parentHeightOffset: 0,
        toolbar: {
            show: false
        }
    },
    plotOptions: {
        bar: {
            borderRadius: 5,
            dataLabels: {
                position: "top", // top, center, bottom
            },
        },
    },
    dataLabels: {
        enabled: true,
        formatter: function (val) {
            return val + "%";
        },
        offsetY: -20,
        style: {
            fontSize: "12px",
            colors: ["#304758"],
        },
    },
    xaxis: {
        categories: [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
            "Oct",
            "Nov",
            "Dec",
        ],
        position: "top",
        axisBorder: {
            show: false,
        },
        axisTicks: {
            show: false,
        },
        crosshairs: {
            fill: {
                type: "gradient",
                gradient: {
                    colorFrom: "#D8E3F0",
                    colorTo: "#BED1E6",
                    stops: [0, 100],
                    opacityFrom: 0.4,
                    opacityTo: 0.5,
                },
            },
        },
        tooltip: {
            enabled: true,
            offsetY: -35
        },
    },
    colors: ['#537AEF'],
    yaxis: {
        axisBorder: {
            show: false,
        },
        axisTicks: {
            show: false,
        },
        labels: {
            show: false,
            formatter: function (val) {
                return val + "%";
            },
        },
    },
    title: {
        text: "Monthly Inflation in Argentina, 2002",
        floating: true,
        offsetY: 360,
        align: "center",
        style: {
            fontWeight: 500
        },
    },
};
var chart = new ApexCharts(
    document.querySelector("#datalabels_column_chart"),
    options
);
chart.render();


// 
// Stacked Columns
// 
var options = {
    series: [{
        name: 'PRODUCT A',
        data: [44, 55, 41, 67, 22, 43]
    }, {
        name: 'PRODUCT B',
        data: [13, 23, 20, 8, 13, 27]
    }, {
        name: 'PRODUCT C',
        data: [11, 17, 15, 15, 21, 14]
    }, {
        name: 'PRODUCT D',
        data: [21, 7, 25, 13, 22, 8]
    }],
    chart: {
        type: 'bar',
        height: 350,
        stacked: true,
        parentHeightOffset: 0,
        toolbar: {
            show: true
        },
        zoom: {
            enabled: true
        }
    },
    responsive: [{
        breakpoint: 480,
        options: {
            legend: {
                position: 'bottom',
                offsetX: -10,
                offsetY: 0
            }
        }
    }],
    plotOptions: {
        bar: {
            horizontal: false,
            borderRadius: 10,
            borderRadiusApplication: 'end', // 'around', 'end'
            borderRadiusWhenStacked: 'last', // 'all', 'last'
            dataLabels: {
                total: {
                    enabled: true,
                    style: {
                        fontSize: '13px',
                        fontWeight: 900
                    }
                }
            }
        },
    },
    xaxis: {
        type: 'datetime',
        categories: ['01/01/2011 GMT', '01/02/2011 GMT', '01/03/2011 GMT', '01/04/2011 GMT',
            '01/05/2011 GMT', '01/06/2011 GMT'
        ],
    },
    colors: ['#537AEF', '#522c8f', '#ec8290', '#e68434'],
    legend: {
        position: 'right',
        offsetY: 40
    },
    fill: {
        opacity: 1
    }
};
var chart = new ApexCharts(document.querySelector("#stacked_column_chart"), options);
chart.render();


// 
// Stacked Columns 100
// 
var options = {
    series: [{
        name: 'PRODUCT A',
        data: [44, 55, 41, 67, 22, 43, 21, 49]
    }, {
        name: 'PRODUCT B',
        data: [13, 23, 20, 8, 13, 27, 33, 12]
    }, {
        name: 'PRODUCT C',
        data: [11, 17, 15, 15, 21, 14, 15, 13]
    }],
    chart: {
        type: 'bar',
        height: 350,
        stacked: true,
        stackType: '100%',
        parentHeightOffset: 0,
    },
    responsive: [{
        breakpoint: 480,
        options: {
            legend: {
                position: 'bottom',
                offsetX: -10,
                offsetY: 0
            }
        }
    }],
    xaxis: {
        categories: ['2011 Q1', '2011 Q2', '2011 Q3', '2011 Q4', '2012 Q1', '2012 Q2',
            '2012 Q3', '2012 Q4'
        ],
    },
    colors: ['#537AEF', '#343a40', '#5be7bd'],
    fill: {
        opacity: 1
    },
    legend: {
        position: 'right',
        offsetX: 0,
        offsetY: 50
    },
};
var chart = new ApexCharts(document.querySelector("#stacked_100_column_chart"), options);
chart.render();


// 
// Grouped Stacked Columns
// 
var options = {
    series: [
        {
            name: 'Q1 Budget',
            group: 'budget',
            data: [44000, 55000, 41000, 67000, 22000, 43000]
        },
        {
            name: 'Q1 Actual',
            group: 'actual',
            data: [48000, 50000, 40000, 65000, 25000, 40000]
        },
        {
            name: 'Q2 Budget',
            group: 'budget',
            data: [13000, 36000, 20000, 8000, 13000, 27000]
        },
        {
            name: 'Q2 Actual',
            group: 'actual',
            data: [20000, 40000, 25000, 10000, 12000, 28000]
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
            horizontal: false
        }
    },
    xaxis: {
        categories: [
            'Online advertising',
            'Sales Training',
            'Print advertising',
            'Catalogs',
            'Meetings',
            'Public relations'
        ]
    },
    fill: {
        opacity: 1
    },
    colors: ['#537AEF', '#8c57d1', '#e68434', '#5be7bd'],
    yaxis: {
        labels: {
            formatter: (val) => {
                return val / 1000 + 'K'
            }
        }
    },
    legend: {
        position: 'top',
        horizontalAlign: 'left'
    }
};
var chart = new ApexCharts(document.querySelector("#grouped_column_chart"), options);
chart.render();


// 
// Dumbbell Chart
// 
var options = {
    series: [
        {
            data: [
                {
                    x: '2008',
                    y: [2800, 4500]
                },
                {
                    x: '2009',
                    y: [3200, 4100]
                },
                {
                    x: '2010',
                    y: [2950, 7800]
                },
                {
                    x: '2011',
                    y: [3000, 4600]
                },
                {
                    x: '2012',
                    y: [3500, 4100]
                },
                {
                    x: '2013',
                    y: [4500, 6500]
                },
                {
                    x: '2014',
                    y: [4100, 5600]
                }
            ]
        }
    ],
    chart: {
        height: 350,
        type: 'rangeBar',
        parentHeightOffset: 0,
        zoom: {
            enabled: false
        }
    },
    plotOptions: {
        bar: {
            isDumbbell: true,
            columnWidth: 3,
            dumbbellColors: [['#537AEF', '#343a40']]
        }
    },
    legend: {
        show: true,
        showForSingleSeries: true,
        position: 'top',
        horizontalAlign: 'left',
        customLegendItems: ['Product A', 'Product B'],
        color: ['#537AEF'],
    },
    fill: {
        type: 'gradient',
        gradient: {
            type: 'vertical',
            gradientToColors: ['#343a40'],
            inverseColors: true,
            stops: [0, 100]
        }
    },
    grid: {
        xaxis: {
            lines: {
                show: true
            }
        },
        yaxis: {
            lines: {
                show: false
            }
        }
    },
    xaxis: {
        tickPlacement: 'on'
    }
};
var chart = new ApexCharts(document.querySelector("#dumbbell_column_chart"), options);
chart.render();


// 
// Column With Markers Chart
// 
var options = {
    series: [
        {
            name: 'Actual',
            data: [
                {
                    x: '2011',
                    y: 1292,
                    goals: [
                        {
                            name: 'Expected',
                            value: 1400,
                            strokeHeight: 5,
                            strokeColor: '#775DD0'
                        }
                    ]
                },
                {
                    x: '2012',
                    y: 4432,
                    goals: [
                        {
                            name: 'Expected',
                            value: 5400,
                            strokeHeight: 5,
                            strokeColor: '#775DD0'
                        }
                    ]
                },
                {
                    x: '2013',
                    y: 5423,
                    goals: [
                        {
                            name: 'Expected',
                            value: 5200,
                            strokeHeight: 5,
                            strokeColor: '#775DD0'
                        }
                    ]
                },
                {
                    x: '2014',
                    y: 6653,
                    goals: [
                        {
                            name: 'Expected',
                            value: 6500,
                            strokeHeight: 5,
                            strokeColor: '#775DD0'
                        }
                    ]
                },
                {
                    x: '2015',
                    y: 8133,
                    goals: [
                        {
                            name: 'Expected',
                            value: 6600,
                            strokeHeight: 13,
                            strokeWidth: 0,
                            strokeLineCap: 'round',
                            strokeColor: '#775DD0'
                        }
                    ]
                },
                {
                    x: '2016',
                    y: 7132,
                    goals: [
                        {
                            name: 'Expected',
                            value: 7500,
                            strokeHeight: 5,
                            strokeColor: '#775DD0'
                        }
                    ]
                },
                {
                    x: '2017',
                    y: 7332,
                    goals: [
                        {
                            name: 'Expected',
                            value: 8700,
                            strokeHeight: 5,
                            strokeColor: '#775DD0'
                        }
                    ]
                },
                {
                    x: '2018',
                    y: 6553,
                    goals: [
                        {
                            name: 'Expected',
                            value: 7300,
                            strokeHeight: 2,
                            strokeDashArray: 2,
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
            columnWidth: '60%'
        }
    },
    colors: ['#537AEF', '#8c57d1'],
    dataLabels: {
        enabled: false
    },
    legend: {
        show: true,
        showForSingleSeries: true,
        customLegendItems: ['Actual', 'Expected'],
        markers: {
            fillColors: ['#537AEF', '#8c57d1']
        }
    }
};
var chart = new ApexCharts(document.querySelector("#markers_column_chart"), options);
chart.render();


// 
// Column with Rotated Labels
// 
var options = {
    series: [{
        name: 'Servings',
        data: [44, 55, 41, 67, 22, 43, 21, 33, 45, 31, 87, 65, 35]
    }],
    annotations: {
        points: [{
            x: 'Bananas',
            seriesIndex: 0,
            label: {
                borderColor: '#537AEF',
                offsetY: 0,
                style: {
                    color: '#fff',
                    background: '#537AEF',
                },
                text: 'Bananas are good',
            }
        }]
    },
    chart: {
        height: 350,
        type: 'bar',
        parentHeightOffset: 0,
    },
    plotOptions: {
        bar: {
            borderRadius: 10,
            columnWidth: '50%',
        }
    },
    dataLabels: {
        enabled: false
    },
    stroke: {
        width: 0
    },
    grid: {
        row: {
            colors: ['#fff', '#f2f2f2']
        }
    },
    xaxis: {
        labels: {
            rotate: -45
        },
        categories: ['Apples', 'Oranges', 'Strawberries', 'Pineapples', 'Mangoes', 'Bananas',
            'Blackberries', 'Pears', 'Watermelons', 'Cherries', 'Pomegranates', 'Tangerines', 'Papayas'
        ],
        tickPlacement: 'on'
    },
    yaxis: {
        title: {
            text: 'Servings',
        },
    },
    fill: {
        type: 'gradient',
        gradient: {
            shade: 'light',
            type: "horizontal",
            shadeIntensity: 0.25,
            gradientToColors: undefined,
            inverseColors: true,
            opacityFrom: 0.85,
            opacityTo: 0.85,
            stops: [50, 0, 100]
        },
    }
};
var chart = new ApexCharts(document.querySelector("#rotated_column_chart"), options);
chart.render();


// 
// Column with Negative Values
// 
var options = {
    series: [{
        name: 'Cash Flow',
        data: [1.45, 5.42, 5.9, -0.42, -12.6, -18.1, -18.2, -14.16, -11.1, -6.09, 0.34, 3.88, 13.07,
            5.8, 2, 7.37, 8.1, 13.57, 15.75, 17.1, 19.8, -27.03, -54.4, -47.2, -43.3, -18.6, -
            48.6, -41.1, -39.6, -37.6, -29.4, -21.4, -2.4
        ]
    }],
    chart: {
        type: 'bar',
        height: 350,
        parentHeightOffset: 0,
    },
    plotOptions: {
        bar: {
            colors: {
                ranges: [{
                    from: -100,
                    to: -46,
                    color: '#d63384'
                }, {
                    from: -45,
                    to: 0,
                    color: '#20c997'
                }]
            },
            columnWidth: '80%',
        }
    },
    dataLabels: {
        enabled: false,
    },
    yaxis: {
        title: {
            text: 'Growth',
        },
        labels: {
            formatter: function (y) {
                return y.toFixed(0) + "%";
            }
        }
    },
    colors: ["#537AEF", "#62B7E5", "#29aa85"],
    xaxis: {
        type: 'datetime',
        categories: [
            '2011-01-01', '2011-02-01', '2011-03-01', '2011-04-01', '2011-05-01', '2011-06-01',
            '2011-07-01', '2011-08-01', '2011-09-01', '2011-10-01', '2011-11-01', '2011-12-01',
            '2012-01-01', '2012-02-01', '2012-03-01', '2012-04-01', '2012-05-01', '2012-06-01',
            '2012-07-01', '2012-08-01', '2012-09-01', '2012-10-01', '2012-11-01', '2012-12-01',
            '2013-01-01', '2013-02-01', '2013-03-01', '2013-04-01', '2013-05-01', '2013-06-01',
            '2013-07-01', '2013-08-01', '2013-09-01'
        ],
        labels: {
            rotate: -90
        }
    }
};
var chart = new ApexCharts(document.querySelector("#negative_column_chart"), options);
chart.render();



// 
// Dynamic Loaded Chart
// 
var options = {
    series: [{
        data: [21, 22, 10, 28, 16, 21, 13, 30]
    }],
    chart: {
        height: 350,
        type: 'bar',
        parentHeightOffset: 0,
        events: {
            click: function (chart, w, e) {
                // console.log(chart, w, e)
            }
        }
    },
    colors: ['#537AEF', '#522c8f', '#8c57d1', '#963b68', '#ec8290', "#eb9d59","#29aa85", "#62B7E5"],
    plotOptions: {
        bar: {
            columnWidth: '45%',
            distributed: true,
        }
    },
    dataLabels: {
        enabled: false
    },
    legend: {
        show: false
    },
    xaxis: {
        categories: [
            ['John', 'Doe'],
            ['Joe', 'Smith'],
            ['Jake', 'Williams'],
            'Amber',
            ['Peter', 'Brown'],
            ['Mary', 'Evans'],
            ['David', 'Wilson'],
            ['Lily', 'Roberts'],
        ],
        labels: {
            style: {
                colors: ['#4a98f5'],
                fontSize: '12px'
            }
        }
    }
};
var chart = new ApexCharts(document.querySelector("#distributed_column_chart"), options);
chart.render();