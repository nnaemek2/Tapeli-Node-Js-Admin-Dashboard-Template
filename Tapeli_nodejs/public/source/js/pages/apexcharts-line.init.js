/*
Template Name: Tapeli - Responsive Bootstrap 5 Admin Dashboard
Author: Zoyothemes
Version: 1.0.0
Website: https://zoyothemes.com/
File: Apexcharts Line Chart
*/


//
// Basic Line Chart
//
var options = {
    series: [{
      name: "Desktops",
      data: [10, 41, 35, 51, 49, 62, 69, 91, 140]
    }],
    chart: {
        height: 380,
        type: 'line',
        parentHeightOffset: 0,
        zoom: {
            enabled: false
        },
        toolbar: {
            show: false
        }
    },
    markers: {
        size: 4
    },
    dataLabels: {
        enabled: false
    },
    stroke: {
        curve: 'straight'
    },
    colors: ["#537AEF"],
    title: {
        text: 'Product Trends by Month',
        align: 'left',
        style: {
            fontWeight: 600
        }
    },
    grid: {
        row: {
            colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
            opacity: 0.5
        },
    },
    xaxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
    },
    responsive: [{
        breakpoint: 600,
        options: {
            chart: {
                toolbar: {
                    show: false
                }
            },
            legend: {
                show: false
            },
        }
    }]

};
var chart = new ApexCharts(document.querySelector("#basic_line_chart"),options);chart.render();


//
// Line with Data Labels
//
var options = {
    series: [
        {
            name: "High - 2022",
            data: [28, 29, 33, 36, 32, 32, 33]
        },
        {
            name: "Low - 2022",
            data: [12, 11, 14, 17, 19, 13, 13]
        }
    ],
    chart: {
        height: 380,
        type: 'line',
        parentHeightOffset: 0,
        zoom: {
            enabled: false
        },
        toolbar: {
            show: false
        }
    },
    colors: [
        '#537AEF', 
        '#001b2f'
    ],
    dataLabels: {
        enabled: true,
    },
    stroke: {
        curve: 'smooth'
    },
    title: {
        text: 'Average High & Low Temperature',
        align: 'left'
    },
    grid: {
        borderColor: '#e7e7e7',
        row: {
            colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
            opacity: 0.5
        },
    },
    markers: {
        style: "inverted",
        size: 6
    },
    xaxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
        title: {
            text: 'Month'
        }
    },
    yaxis: {
        title: {
            text: 'Temperature'
        },
        min: 5,
        max: 40
    },
    legend: {
        position: 'top',
        horizontalAlign: 'right',
        floating: true,
        offsetY: -25,
        offsetX: -5
    },
    responsive: [{
        breakpoint: 600,
        options: {
            chart: {
                toolbar: {
                    show: false
                }
            },
            legend: {
                show: false
            }
        }
    }]
};

var chart = new ApexCharts(document.querySelector("#datalabel_line_chart"), options);
chart.render();


//
// Zoomable Timeseries
//
var options = {
    series: [{
        name: 'XYZ MOTORS',
        data: [
            {
                x: new Date("2018-01-01").getTime(),
                y: 140
            },
            {
                x: new Date("2018-01-02").getTime(),
                y: 147
            },
            {
                x: new Date("2018-01-03").getTime(),
                y: 150
            },
            {
                x: new Date("2018-01-04").getTime(),
                y: 154
            },
            {
                x: new Date("2018-01-05").getTime(),
                y: 160
            },
            {
                x: new Date("2018-01-06").getTime(),
                y: 165
            },
            {
                x: new Date("2018-01-07").getTime(),
                y: 162
            },
            {
                x: new Date("2018-01-08").getTime(),
                y: 159
            },
            {
                x: new Date("2018-01-09").getTime(),
                y: 164
            },
            {
                x: new Date("2018-01-10").getTime(),
                y: 160
            },
            {
                x: new Date("2018-01-11").getTime(),
                y: 167
            },
            {
                x: new Date("2018-01-12").getTime(),
                y: 169
            },
            {
                x: new Date("2018-01-13").getTime(),
                y: 172
            },
            {
                x: new Date("2018-01-14").getTime(),
                y: 175
            },
            {
                x: new Date("2018-01-15").getTime(),
                y: 178
            },
            {
                x: new Date("2018-01-16").getTime(),
                y: 173
            },
            {
                x: new Date("2018-01-17").getTime(),
                y: 167
            },
            {
                x: new Date("2018-01-18").getTime(),
                y: 167
            },
            {
                x: new Date("2018-01-19").getTime(),
                y: 163
            },
            {
                x: new Date("2018-01-20").getTime(),
                y: 159
            },
            {
                x: new Date("2018-01-21").getTime(),
                y: 161
            },
            {
                x: new Date("2018-01-22").getTime(),
                y: 158
            },
            {
                x: new Date("2018-01-23").getTime(),
                y: 152
            },
            {
                x: new Date("2018-01-24").getTime(),
                y: 147
            },
            {
                x: new Date("2018-01-25").getTime(),
                y: 151
            },
            {
                x: new Date("2018-01-26").getTime(),
                y: 151
            },
            {
                x: new Date("2018-01-27").getTime(),
                y: 151
            },
            {
                x: new Date("2018-01-28").getTime(),
                y: 151
            },
            {
                x: new Date("2018-01-29").getTime(),
                y: 155
            },
            {
                x: new Date("2018-01-30").getTime(),
                y: 159
            },
            {
                x: new Date("2018-01-31").getTime(),
                y: 162
            },
            {
                x: new Date("2018-02-01").getTime(),
                y: 157
            },
            {
                x: new Date("2018-02-01").getTime(),
                y: 157
            },
            {
                x: new Date("2018-02-02").getTime(),
                y: 161
            },
            {
                x: new Date("2018-02-03").getTime(),
                y: 166
            },
            {
                x: new Date("2018-02-04").getTime(),
                y: 169
            },
            {
                x: new Date("2018-02-05").getTime(),
                y: 172
            },
            {
                x: new Date("2018-02-06").getTime(),
                y: 177
            },
            {
                x: new Date("2018-02-07").getTime(),
                y: 181
            },
            {
                x: new Date("2018-02-08").getTime(),
                y: 178
            },
            {
                x: new Date("2018-02-09").getTime(),
                y: 173
            },
            {
                x: new Date("2018-02-10").getTime(),
                y: 169
            },
            {
                x: new Date("2018-02-11").getTime(),
                y: 159
            },
            {
                x: new Date("2018-02-12").getTime(),
                y: 164
            },
            {
                x: new Date("2018-02-13").getTime(),
                y: 167
            },
            {
                x: new Date("2018-02-14").getTime(),
                y: 168
            },
            {
                x: new Date("2018-02-15").getTime(),
                y: 172
            },
            {
                x: new Date("2018-02-16").getTime(),
                y: 169
            },
            {
                x: new Date("2018-02-17").getTime(),
                y: 175
            },
            {
                x: new Date("2018-02-18").getTime(),
                y: 177
            },
            {
                x: new Date("2018-02-19").getTime(),
                y: 179
            },
            {
                x: new Date("2018-02-20").getTime(),
                y: 181
            },
            {
                x: new Date("2018-02-21").getTime(),
                y: 183
            },
            {
                x: new Date("2018-02-22").getTime(),
                y: 185
            },
            {
                x: new Date("2018-02-23").getTime(),
                y: 188
            },
            {
                x: new Date("2018-02-24").getTime(),
                y: 191
            },
            {
                x: new Date("2018-02-25").getTime(),
                y: 187
            },
            {
                x: new Date("2018-02-26").getTime(),
                y: 184
            },
            {
                x: new Date("2018-02-27").getTime(),
                y: 181
            },
            {
                x: new Date("2018-02-28").getTime(),
                y: 179
            },
            {
                x: new Date("2018-03-01").getTime(),
                y: 177
            },
            {
                x: new Date("2018-03-02").getTime(),
                y: 176
            },
            {
                x: new Date("2018-03-02").getTime(),
                y: 172
            },
        ]
    }],
    chart: {
        type: 'area',
        stacked: false,
        parentHeightOffset: 0,
        height: 400,
        zoom: {
            type: 'x',
            enabled: true,
            autoScaleYaxis: true
        },
        toolbar: {
            autoSelected: 'zoom'
        }
    },
    colors: ["#537AEF"],
    dataLabels: {
        enabled: false
    },
    markers: {
        size: 0,
    },
    title: {
        text: 'Stock Price Movement',
        align: 'left',
        style: {
            fontWeight: 500
        }
    },
    fill: {
        type: 'gradient',
        gradient: {
            shadeIntensity: 1,
            inverseColors: false,
            opacityFrom: 0.5,
            opacityTo: 0,
            stops: [
                0, 90, 100
            ]
        },
    },
    yaxis: {
        labels: {
            formatter: function (val) {
                return (val / 1000000).toFixed(0);
            },
        },
        title: {
            text: 'Price',
            style: {
                fontWeight: 500
            }
        },
    },
    xaxis: {
        type: 'datetime',
    },
    tooltip: {
        shared: false,
        y: {
            formatter: function (val) {
                return (val / 1000000).toFixed(0)
            }
        }
    }
};
var chart = new ApexCharts(document.querySelector("#zoomable_line_chart"), options);
chart.render();

//
// Dashed Chart
//
var options = {
    chart: {
        height: 350,
        type: 'line',
        parentHeightOffset: 0,
        zoom: {
            enabled: false
        },
        toolbar: {
            show: false,
        }
    },
    dataLabels: {
        enabled: false
    },
    stroke: {
        width: [3, 4, 3],
        curve: 'straight',
        dashArray: [0, 8, 5]
    },
    series: [{
            name: "Session Duration",
            data: [45, 52, 38, 24, 33, 26, 21, 20, 6, 8, 15, 10]
        },
        {
            name: "Page Views",
            data: [36, 42, 60, 42, 13, 18, 29, 37, 36, 51, 32, 35]
        },
        {
            name: 'Total Visits',
            data: [89, 56, 74, 98, 72, 38, 64, 46, 84, 58, 46, 49]
        }
    ],
    title: {
        text: 'Page Statistics',
        align: 'left',
        style: {
            fontWeight: 500,
        },
    },
    markers: {
        size: 0,

        hover: {
            sizeOffset: 6
        }
    },
    xaxis: {
        categories: ['01 Jan', '02 Jan', '03 Jan', '04 Jan', '05 Jan', '06 Jan', '07 Jan', '08 Jan', '09 Jan',
            '10 Jan', '11 Jan', '12 Jan'
        ],
    },
    tooltip: {
        y: [{
            title: {
                formatter: function(val) {
                    return val + " (mins)"
                }
            }
        }, {
            title: {
                formatter: function(val) {
                    return val + " per session"
                }
            }
        }, {
            title: {
                formatter: function(val) {
                    return val;
                }
            }
        }]
    },
    colors: ["#eb9d59", "#001b2f", "#537AEF"],
    grid: {
        borderColor: '#f1f1f1',
    }
};
var chart = new ApexCharts(document.querySelector("#dashed_line_chart"), options);
chart.render();


//
// Syncing Charts
//
function generateDayWiseTimeSeriesline(baseval, count, yrange) {
    var i = 0;
    var series = [];
    while (i < count) {
        var x = baseval;
        var y = Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;

        series.push([x, y]);
        baseval += 86400000;
        i++;
    }
    return series;
}

var options = {
    series: [{
        data: generateDayWiseTimeSeriesline(new Date('11 Jan 2024').getTime(), 20, {
            min: 10,
            max: 60
        })
    }],
    chart: {
        height: 120,
        id: 'fb',
        group: 'social',
        type: 'line',
        parentHeightOffset: 0,
    },
    colors: ['#537AEF'],
    dataLabels: {
        enabled: false
    },
    stroke: {
        curve: 'smooth',
        width: 3,
    },
    toolbar: {
        tools: {
            selection: false
        }
    },
    markers: {
        size: 4,
        hover: {
            size: 6
        }
    },
    tooltip: {
        followCursor: false,
        x: {
            show: false
        },
        marker: {
            show: false
        },
        y: {
            title: {
                formatter: function () {
                    return ''
                }
            }
        }
    },
    grid: {
        clipMarkers: false
    },
    yaxis: {
        tickAmount: 2
    },
    xaxis: {
        type: 'datetime'
    }
};
var chart = new ApexCharts(document.querySelector("#syncing_line_chart"), options); chart.render();

var optionsLine2 = {
    series: [{
        data: generateDayWiseTimeSeriesline(new Date('11 Feb 2024').getTime(), 20, {
            min: 10,
            max: 30
        })
    }],
    chart: {
        id: 'tw',
        group: 'social',
        type: 'line',
        height: 120,
        parentHeightOffset: 0,
    },
    colors: ['#8c57d1'],
    dataLabels: {
        enabled: false
    },
    stroke: {
        curve: 'straight',
        width: 3,
    },
    toolbar: {
        tools: {
            selection: false
        }
    },
    markers: {
        size: 4,
        hover: {
            size: 6
        }
    },
    tooltip: {
        followCursor: false,
        x: {
            show: false
        },
        marker: {
            show: false
        },
        y: {
            title: {
                formatter: function () {
                    return ''
                }
            }
        }
    },
    grid: {
        clipMarkers: false
    },
    yaxis: {
        tickAmount: 2
    },
    xaxis: {
        type: 'datetime'
    }
};
var chartLine2 = new ApexCharts(document.querySelector("#syncing_line_chart2"), optionsLine2); chartLine2.render();

var optionsArea = {
    series: [{
        data: generateDayWiseTimeSeriesline(new Date('11 March 2024').getTime(), 20, {
            min: 10,
            max: 60
        })
    }],
    chart: {
        id: 'yt',
        group: 'social',
        type: 'area',
        height: 160,
        parentHeightOffset: 0,
    },
    colors: ['#ec8290'],
    dataLabels: {
        enabled: false
    },
    stroke: {
        curve: 'stepline',
        width: 3,
    },
    toolbar: {
        tools: {
            selection: false
        }
    },
    markers: {
        size: 4,
        hover: {
            size: 6
        }
    },
    tooltip: {
        followCursor: false,
        x: {
            show: false
        },
        marker: {
            show: false
        },
        y: {
            title: {
                formatter: function () {
                    return ''
                }
            }
        }
    },
    grid: {
        clipMarkers: false
    },
    yaxis: {
        tickAmount: 2
    },
    xaxis: {
        type: 'datetime'
    }
};
var chartArea = new ApexCharts(document.querySelector("#syncing_line_chart_area"), optionsArea); chartArea.render();


//
// Brush Chart Generate series
//
function generateDayWiseTimeSeries(baseval, count, yrange) {
    var i = 0;
    var series = [];
    while (i < count) {
        var x = baseval;
        var y = Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;

        series.push([x, y]);
        baseval += 86400000; 
        i++;
    }
    return series;
}

var data = generateDayWiseTimeSeries(new Date('11 Feb 2017').getTime(), 185, {
    min: 30,
    max: 90
})
//
// Brush Chart
//
var options = {
    series: [{
        data: data
    }],
    chart: {
        id: 'chart2',
        type: 'line',
        height: 180,
        parentHeightOffset: 0,
        toolbar: {
            autoSelected: 'pan',
            show: false
        }
    },
    colors: ['#ec8290'],
    stroke: {
        width: 3
    },
    dataLabels: {
        enabled: false
    },
    fill: {
        opacity: 1,
    },
    markers: {
        size: 0
    },
    xaxis: {
        type: 'datetime'
    },
};
var chart = new ApexCharts(document.querySelector("#brush_line_chart"), options); chart.render();


var optionsLine = {
    series: [{
        data: data
    }],
    chart: {
        id: 'chart1',
        height: 170,
        type: 'area',
        parentHeightOffset: 0,
        brush:{
            target: 'chart2',
            enabled: true
        },
        selection: {
            enabled: true,
            xaxis: {
                min: new Date('19 Jun 2017').getTime(),
                max: new Date('14 Aug 2017').getTime()
            }
        },
    },
    colors: ['#8c57d1'],
    stroke: {
        width: 3,
    },
    fill: {
        type: 'gradient',
        gradient: {
            opacityFrom: 0.91,
            opacityTo: 0.1,
        }
    },
    xaxis: {
        type: 'datetime',
        tooltip: {
            enabled: false
        }
    },
    yaxis: {
        tickAmount: 2
    },
};
var chartLine = new ApexCharts(document.querySelector("#brush_line_chart2"), optionsLine); chartLine.render();


//
// Live Chart With Annotations
//
var options = {
    series: [{
        data: series.monthDataSeries1.prices
    }],
    chart: {
        height: 350,
        type: 'line',
        id: 'areachart-2',
        parentHeightOffset: 0,
    },
    annotations: {
        yaxis: [
        {
            y: 8200,
            borderColor: '#29aa85',
            label: {
                borderColor: '#29aa85',
                style: {
                    color: '#fff',
                    background: '#29aa85',
                },
                text: 'Support',
            }
        }, 
        {
            y: 8600,
            y2: 9000,
            borderColor: '#000',
            fillColor: '#eb9d59',
            opacity: 0.2,
            label: {
                borderColor: '#333',
                style: {
                    fontSize: '10px',
                    color: '#343a40',
                    background: '#eb9d59',
                },
                text: 'Y-axis range',
            }
        }],
        xaxis: [{
            x: new Date('23 Nov 2017').getTime(),
            strokeDashArray: 0,
            borderColor: '#8c57d1',
            label: {
                borderColor: '#8c57d1',
                style: {
                    color: '#fff',
                    background: '#8c57d1',
                },
                text: 'Anno Test',
            }
        }, 
        {
            x: new Date('26 Nov 2017').getTime(),
            x2: new Date('28 Nov 2017').getTime(),
            fillColor: '#B3F7CA',
            opacity: 0.4,
            label: {
                borderColor: '#23c093',
                style: {
                    fontSize: '10px',
                    color: '#fff',
                    background: '#23c093',
                },
                offsetY: -10,
                text: 'X-axis range',
            }
        }],
        points: [{
            x: new Date('01 Dec 2017').getTime(),
            y: 8607.55,
            marker: {
                size: 8,
                fillColor: '#fff',
                strokeColor: 'red',
                radius: 2,
                cssClass: 'apexcharts-custom-class'
            },
            label: {
                borderColor: '#FF4560',
                offsetY: 0,
                style: {
                    color: '#fff',
                    background: '#FF4560',
                },
        
                text: 'Point Annotation',
            }
        },
        {
            x: new Date('08 Dec 2017').getTime(),
            y: 9340.85,
            marker: {
                size: 0
            },
            image: {
                path: '../../assets/images/instagram.png'
            }
        }]
    },
    colors: ["#537AEF"],
    dataLabels: {
        enabled: false
    },
    stroke: {
        curve: 'straight'
    },
    grid: {
        padding: {
            right: 30,
            left: 20
        }
    },
    title: {
        text: 'Line with Annotations',
        align: 'left'
    },
    labels: series.monthDataSeries1.dates,
    xaxis: {
        type: 'datetime',
    },
};
var chart = new ApexCharts(document.querySelector("#annotations_line_chart"), options);
chart.render();


//
// Stepline Chart
//
var options = {
    series: [{
        data: [36, 34, 45, 60, 33, 40, 55, 42, 38, 64, 64, 55]
    }],
    chart: {
        type: 'line',
        height: 350,
        parentHeightOffset: 0,
        toolbar: {
            show: false
        },
    },
    stroke: {
        curve: 'stepline',
    },
    dataLabels: {
        enabled: false
    },
    title: {
        text: 'Stepline Chart',
        align: 'left',
        style: {
            fontWeight: 500,
        },
    },
    markers: {
        hover: {
            sizeOffset: 4
        }
    },
    colors: ['#537AEF'],
};
var chart = new ApexCharts(document.querySelector("#stepline_line_chart"), options);
chart.render();


//
// Gradient Chart
//
var options = {
    series: [{
        name: 'Sales',
        data: [4, 3, 10, 9, 29, 19, 22, 9, 12, 7, 19, 5, 13, 9, 17, 2, 7, 5]
    }],
    chart: {
        height: 350,
        type: 'line',
        parentHeightOffset: 0,
    },
    forecastDataPoints: {
        count: 7
    },
    stroke: {
        width: 5,
        curve: 'smooth'
    },
    xaxis: {
        type: 'datetime',
        categories: ['1/11/2000', '2/11/2000', '3/11/2000', '4/11/2000', '5/11/2000', '6/11/2000', '7/11/2000', '8/11/2000', '9/11/2000', '10/11/2000', '11/11/2000', '12/11/2000', '1/11/2001', '2/11/2001', '3/11/2001','4/11/2001' ,'5/11/2001' ,'6/11/2001'],
        tickAmount: 10,
        labels: {
            formatter: function(value, timestamp, opts) {
                return opts.dateFormatter(new Date(timestamp), 'dd MMM')
            }
        }
    },
    title: {
        text: 'Forecast',
        align: 'left',
        style: {
            fontSize: "16px",
            color: '#666'
        }
    },
    fill: {
        type: 'gradient',
        gradient: {
            shade: 'dark',
            gradientToColors: [ '#537AEF'],
            shadeIntensity: 1,
            type: 'horizontal',
            opacityFrom: 1,
            opacityTo: 1,
            stops: [0, 100, 100, 100]
        },
    },
};
var chart = new ApexCharts(document.querySelector("#gradient_line_chart"), options);
chart.render();


//
// Missing / null values
//
var options = {
    series: [{
        name: 'Peter',
        data: [5, 5, 10, 8, 7, 5, 4, null, null, null, 10, 10, 7, 8, 6, 9]
    }, 
    {
        name: 'Johnny',
        data: [10, 15, null, 12, null, 10, 12, 15, null, null, 12, null, 14, null, null, null]
    }, 
    {
        name: 'David',
        data: [null, null, null, null, 3, 4, 1, 3, 4, 6, 7, 9, 5, null, null, null]
    }],
    chart: {
        height: 350,
        type: 'line',
        parentHeightOffset: 0,
        zoom: {
            enabled: false
        },
        animations: {
            enabled: false
        }
    },
    stroke: {
        width: [5,5,4],
        curve: 'smooth'
    },
    labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16],
    title: {
        text: 'Missing data (null values)',
        style: {
            fontWeight: 600,
        },
    },
    xaxis: {},
    colors: ['#537AEF', '#963b68', '#29aa85']
};

var chart = new ApexCharts(document.querySelector("#missingnull_line_chart"), options);
chart.render();


//
// Realtime Charts
//
var lastDate = 0;
var data = [];
var TICKINTERVAL = 86400000;
var XAXISRANGE = 777600000;

function getDayWiseTimeSeries(baseval, count, yrange) {
    var i = 0;
    while (i < count) {
        var x = baseval;
        var y = Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;

        data.push({
            'x': x,
            'y': y
        });
        lastDate = baseval
        baseval += TICKINTERVAL;
        i++;
    }
}

getDayWiseTimeSeries(new Date('11 Feb 2017 GMT').getTime(), 10, {
    min: 10,
    max: 90
})

function getNewSeries(baseval, yrange) {
    var newDate = baseval + TICKINTERVAL;
    lastDate = newDate

    for (var i = 0; i < data.length - 10; i++) {
        // IMPORTANT
        // we reset the x and y of the data which is out of drawing area
        // to prevent memory leaks
        data[i].x = newDate - XAXISRANGE - TICKINTERVAL
        data[i].y = 0
    }

    data.push({
        x: newDate,
        y: Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min
    })
}

function resetData() {
    // Alternatively, you can also reset the data at certain intervals to prevent creating a huge series 
    data = data.slice(data.length - 10, data.length);
}

var options = {
    series: [{
        data: data.slice()
    }],
    chart: {
        id: 'realtime',
        height: 350,
        type: 'line',
        parentHeightOffset: 0,
        animations: {
            enabled: true,
            easing: 'linear',
            dynamicAnimation: {
                speed: 1000
            }
        },
        toolbar: {
            show: false
        },
        zoom: {
            enabled: false
        }
    },
    dataLabels: {
        enabled: false
    },
    stroke: {
        curve: 'smooth'
    },
    title: {
        text: 'Dynamic Updating Chart',
        align: 'left',
        style: {
            fontWeight: 600,
        },
    },
    markers: {
        size: 0
    },
    xaxis: {
        type: 'datetime',
        range: XAXISRANGE,
    },
    yaxis: {
        max: 100
    },
    legend: {
        show: false
    },
    colors: ['#522c8f']
};

var chart = new ApexCharts(document.querySelector("#realtime_line_chart"), options);
chart.render();

window.setInterval(function () {
    getNewSeries(lastDate, {
        min: 10,
        max: 90
    }
)

chart.updateSeries([{
        data: data
    }]
)}, 1000)