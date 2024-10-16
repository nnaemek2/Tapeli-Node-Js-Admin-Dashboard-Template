/*
Template Name: Tapeli - Responsive Bootstrap 5 Admin Dashboard
Author: Zoyothemes
Version: 1.0.0
Website: https://zoyothemes.com/
File: Apexcharts Heatmap Charts
*/

// Generate Data Script

function generateData(count, yrange) {
    var i = 0;
    var series = [];
    while (i < count) {
        var x = (i + 1).toString();
        var y = Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;

        series.push({
            x: x,
            y: y
        });
        i++;
    }
    return series;
}

//  Generate Data
var data = [{
    name: 'W1',
    data: generateData(8, {
        min: 0,
        max: 90
    })
},
{
    name: 'W2',
    data: generateData(8, {
        min: 0,
        max: 90
    })
},
{
    name: 'W3',
    data: generateData(8, {
        min: 0,
        max: 90
    })
},
{
    name: 'W4',
    data: generateData(8, {
        min: 0,
        max: 90
    })
},
{
    name: 'W5',
    data: generateData(8, {
        min: 0,
        max: 90
    })
},
{
    name: 'W6',
    data: generateData(8, {
        min: 0,
        max: 90
    })
},
{
    name: 'W7',
    data: generateData(8, {
        min: 0,
        max: 90
    })
},
{
    name: 'W8',
    data: generateData(8, {
        min: 0,
        max: 90
    })
},
{
    name: 'W9',
    data: generateData(8, {
        min: 0,
        max: 90
    })
},
{
    name: 'W10',
    data: generateData(8, {
        min: 0,
        max: 90
    })
},
{
    name: 'W11',
    data: generateData(8, {
        min: 0,
        max: 90
    })
},
{
    name: 'W12',
    data: generateData(8, {
        min: 0,
        max: 90
    })
},
{
    name: 'W13',
    data: generateData(8, {
        min: 0,
        max: 90
    })
},
{
    name: 'W14',
    data: generateData(8, {
        min: 0,
        max: 90
    })
},
{
    name: 'W15',
    data: generateData(8, {
        min: 0,
        max: 90
    })
}
]
data.reverse()
var colors = ["#537AEF", "#963b68", "#29aa85", "#62B7E5", "#5be7bd", "#ca8a04", "#8c57d1", '#ec8290', '#06b6d4', '#172554', '#8c5e58', '#2176ff', '##cc9a06', '#b02a37', '#3d8bfd']
colors.reverse()


//
// Basic Heatmap Chart
//
var options = {
    series: [{
        name: 'Metric1',
        data: generateData(18, {
            min: 0,
            max: 90
        })
    },
    {
        name: 'Metric2',
        data: generateData(18, {
            min: 0,
            max: 90
        })
    },
    {
        name: 'Metric3',
        data: generateData(18, {
            min: 0,
            max: 90
        })
    },
    {
        name: 'Metric4',
        data: generateData(18, {
            min: 0,
            max: 90
        })
    },
    {
        name: 'Metric5',
        data: generateData(18, {
            min: 0,
            max: 90
        })
    },
    {
        name: 'Metric6',
        data: generateData(18, {
            min: 0,
            max: 90
        })
    },
    {
        name: 'Metric7',
        data: generateData(18, {
            min: 0,
            max: 90
        })
    },
    {
        name: 'Metric8',
        data: generateData(18, {
            min: 0,
            max: 90
        })
    },
    {
        name: 'Metric9',
        data: generateData(18, {
            min: 0,
            max: 90
        })
    }
    ],
    chart: {
        height: 350,
        type: 'heatmap',
        parentHeightOffset: 0,
    },
    dataLabels: {
        enabled: false
    },
    colors: ["#537AEF"],
    title: {
        text: 'HeatMap Chart (Single color)'
    },
};
var chart = new ApexCharts(document.querySelector("#basic_heatmap_chart"), options);
chart.render();

// 
// Multiple Colors Heatmap Chart
// 
var options = {
    series: data,
    chart: {
        height: 350,
        type: 'heatmap',
        parentHeightOffset: 0,
    },
    dataLabels: {
        enabled: false
    },
    colors: colors,
    xaxis: {
        type: 'category',
        categories: ['10:00', '10:30', '11:00', '11:30', '12:00', '12:30', '01:00', '01:30']
    },
    title: {
        text: 'HeatMap Chart (Different color shades for each series)',
        style: {
            fontWeight: 500
        }
    },
    grid: {
        padding: {
            right: 20
        }
    }
};
var chart = new ApexCharts(document.querySelector("#multiple_color_chart"), options);
chart.render();



// 
// Multiple Colors Flipped 
//
var options = {
    series: [{
        name: 'Jan',
        data: generateData(20, {
            min: -30,
            max: 55
        })
    },
    {
        name: 'Feb',
        data: generateData(20, {
            min: -30,
            max: 55
        })
    },
    {
        name: 'Mar',
        data: generateData(20, {
            min: -30,
            max: 55
        })
    },
    {
        name: 'Apr',
        data: generateData(20, {
            min: -30,
            max: 55
        })
    },
    {
        name: 'May',
        data: generateData(20, {
            min: -30,
            max: 55
        })
    },
    {
        name: 'Jun',
        data: generateData(20, {
            min: -30,
            max: 55
        })
    },
    {
        name: 'Jul',
        data: generateData(20, {
            min: -30,
            max: 55
        })
    },
    {
        name: 'Aug',
        data: generateData(20, {
            min: -30,
            max: 55
        })
    },
    {
        name: 'Sep',
        data: generateData(20, {
            min: -30,
            max: 55
        })
    }
    ],
    chart: {
        height: 350,
        type: 'heatmap',
        parentHeightOffset: 0,
    },
    plotOptions: {
        heatmap: {
            shadeIntensity: 0.5,
            radius: 0,
            useFillColorAsStroke: true,
            colorScale: {
                ranges: [{
                    from: -30,
                    to: 5,
                    name: 'low',
                    color: '#537AEF'
                },
                {
                    from: 6,
                    to: 20,
                    name: 'medium',
                    color: '#29aa85'
                },
                {
                    from: 21,
                    to: 45,
                    name: 'high',
                    color: '#001b2f'
                },
                {
                    from: 46,
                    to: 55,
                    name: 'extreme',
                    color: '#9ca3af'
                }
                ]
            }
        }
    },
    dataLabels: {
        enabled: false
    },
    stroke: {
        width: 1
    },
    title: {
        text: 'HeatMap Chart with Color Range'
    },
};
var chart = new ApexCharts(document.querySelector("#range_colors_chart"), options);
chart.render();


// 
// Rounded Heatmap Charts 
// 
var options = {
    series: [{
        name: 'Metric1',
        data: generateData(20, {
            min: 0,
            max: 90
        })
    },
    {
        name: 'Metric2',
        data: generateData(20, {
            min: 0,
            max: 90
        })
    },
    {
        name: 'Metric3',
        data: generateData(20, {
            min: 0,
            max: 90
        })
    },
    {
        name: 'Metric4',
        data: generateData(20, {
            min: 0,
            max: 90
        })
    },
    {
        name: 'Metric5',
        data: generateData(20, {
            min: 0,
            max: 90
        })
    },
    {
        name: 'Metric6',
        data: generateData(20, {
            min: 0,
            max: 90
        })
    },
    {
        name: 'Metric7',
        data: generateData(20, {
            min: 0,
            max: 90
        })
    },
    {
        name: 'Metric8',
        data: generateData(20, {
            min: 0,
            max: 90
        })
    },
    {
        name: 'Metric8',
        data: generateData(20, {
            min: 0,
            max: 90
        })
    }
    ],
    chart: {
        height: 350,
        type: 'heatmap',
        parentHeightOffset: 0,
    },
    stroke: {
        width: 0
    },
    plotOptions: {
        heatmap: {
            radius: 30,
            enableShades: false,
            colorScale: {
                ranges: [{
                    from: 0,
                    to: 50,
                    color: '#4a5a6b'
                },
                {
                    from: 51,
                    to: 100,
                    color: '#537AEF'
                },
                ],
            },

        }
    },
    dataLabels: {
        enabled: true,
        style: {
            colors: ['#fff']
        }
    },
    xaxis: {
        type: 'category',
    },
    title: {
        text: 'Rounded (Range without Shades)'
    },
};
var chart = new ApexCharts(document.querySelector("#rounded_colors_chart"), options);
chart.render();