/* ------------------------------------------------------------------------------
 *
 *  # C3.js - bars and pies
 *
 *  Demo JS code for c3_bars_pies.html page
 *
 * ---------------------------------------------------------------------------- */


// Setup module
// ------------------------------

var С3BarsPies = function() {


    //
    // Setup module components
    //

    // Chart
    var _barsPiesExamples = function() {
        if (typeof c3 == 'undefined') {
            console.warn('Warning - c3.min.js is not loaded.');
            return;
        }

        // Define charts elements
        var pie_chart_element = document.getElementById('c3-pie-chart');
        var donut_chart_element = document.getElementById('c3-donut-chart');
        var donut_chart_element_1 = document.getElementById('c3-donut-chart-1');
        var donut_chart_element_2 = document.getElementById('c3-donut-chart-2');
        var bar_chart_element = document.getElementById('c3-bar-chart');
        var bar_chart_element_1 = document.getElementById('c3-bar-chart_1');
        var bar_chart_element_2 = document.getElementById('c3-bar-chart_2');
        var bar_chart_element_3 = document.getElementById('c3-bar-chart_3');
        var bar_stacked_chart_element = document.getElementById('c3-bar-stacked-chart');
        var combined_chart_element = document.getElementById('c3-combined-chart');
        var scatter_chart_element = document.getElementById('c3-scatter-chart');


        // Pie chart
        if(pie_chart_element) {

            // Generate chart
            var pie_chart = c3.generate({
                bindto: pie_chart_element,
                size: { width: 350 },
                color: {
                    pattern: ['#3F51B5', '#FF9800', '#4CAF50', '#00BCD4', '#F44336']
                },
                data: {
                    columns: [
                        ["Within 24 Hrs", 0.2, 0.2, 0.2, 0.2, 0.2, 0.4, 0.3, 0.2, 0.2, 0.1, 0.2, 0.2, 0.1, 0.1, 0.2, 0.4, 0.4, 0.3, 0.3, 0.3, 0.2, 0.4, 0.2, 0.5, 0.2, 0.2, 0.4, 0.2, 0.2, 0.2, 0.2, 0.4, 0.1, 0.2, 0.2, 0.2, 0.2, 0.1, 0.2, 0.2, 0.3, 0.3, 0.2, 0.6, 0.4, 0.3, 0.2, 0.2, 0.2, 0.2],
                        ["Between 24 Hrs to 48 Hrs", 1.4, 1.5, 1.5, 1.3, 1.5, 1.3, 1.6, 1.0, 1.3, 1.4, 1.0, 1.5, 1.0, 1.4, 1.3, 1.4, 1.5, 1.0, 1.5, 1.1, 1.8, 1.3, 1.5, 1.2, 1.3, 1.4, 1.4, 1.7, 1.5, 1.0, 1.1, 1.0, 1.2, 1.6, 1.5, 1.6, 1.5, 1.3, 1.3, 1.3, 1.2, 1.4, 1.2, 1.0, 1.3, 1.2, 1.3, 1.3, 1.1, 1.3],
                        ["Between 24 Hrs to 72 Hrs", 2.5, 1.9, 2.1, 1.8, 2.2, 2.1, 1.7, 1.8, 1.8, 2.5, 2.0, 1.9, 2.1, 2.0, 2.4, 2.3, 1.8, 2.2, 2.3, 1.5, 2.3, 2.0, 2.0, 1.8, 2.1, 1.8, 1.8, 1.8, 2.1, 1.6, 1.9, 2.0, 2.2, 1.5, 1.4, 2.3, 2.4, 1.8, 1.8, 2.1, 2.4, 2.3, 1.9, 2.3, 2.5, 2.3, 1.9, 2.0, 2.3, 1.8],
                        ["> 72 Hrs", 2.5, 1.9, 2.1, 1.8, 2.2, 2.1, 1.7, 1.8, 1.8, 2.5, 2.0, 1.9, 2.1, 2.0, 2.4, 2.3, 1.8, 2.2, 2.3, 1.5, 2.3, 2.0, 2.0, 1.8, 2.1, 1.8, 1.8, 1.8, 2.1, 1.6, 1.9, 2.0, 2.2, 1.5, 1.4, 2.3, 2.4, 1.8, 1.8, 2.1, 2.4, 2.3, 1.9, 2.3, 2.5, 2.3, 1.9, 2.0, 2.3, 1.8],
                    ],
                    type : 'pie'
                }
            });

            // Change data
            // setTimeout(function () {
            //     pie_chart.load({
            //         columns: [
                        
            //         ]
            //     });
            // }, 4000);
            // setTimeout(function () {
            //     pie_chart.unload({
            //         ids: 'data1'
            //     });
            //     pie_chart.unload({
            //         ids: 'data2'
            //     });
            // }, 8000);

            // Resize chart on sidebar width change
            $('.sidebar-control').on('click', function() {
                pie_chart.resize();
            });
        }

        // Donut chart
        if(donut_chart_element) {

            // Generate chart
            var donut_chart = c3.generate({
                bindto: donut_chart_element,
                size: { width:250, height:270  },
                color: {
                    pattern: ['#476DE3', '#E5373B']
                },
                data: {
                    columns: [
                        ["With SLA", 0.2, 0.2, 0.2, 0.2, 0.2, 0.4, 0.3, 0.2, 0.2, 0.1, 0.2, 0.2, 0.1, 0.1, 0.2, 0.4, 0.4, 0.3, 0.3, 0.3, 0.2, 0.4, 0.2, 0.5, 0.2, 0.2, 0.4, 0.2, 0.2, 0.2, 0.2, 0.4, 0.1, 0.2, 0.2, 0.2, 0.2, 0.1, 0.2, 0.2, 0.3, 0.3, 0.2, 0.6, 0.4, 0.3, 0.2, 0.2, 0.2, 0.2],
                        ["Outside SLA Hrs", 1.4, 1.5, 1.5, 1.3, 1.5, 1.3, 1.6, 1.0, 1.3, 1.4, 1.0, 1.5, 1.0, 1.4, 1.3, 1.4, 1.5, 1.0, 1.5, 1.1, 1.8, 1.3, 1.5, 1.2, 1.3, 1.4, 1.4, 1.7, 1.5, 1.0, 1.1, 1.0, 1.2, 1.6, 1.5, 1.6, 1.5, 1.3, 1.3, 1.3, 1.2, 1.4, 1.2, 1.0, 1.3, 1.2, 1.3, 1.3, 1.1, 1.3]
                    ],
                    type : 'pie'
                },
                donut: {
                    title: ""
                }
            });

            // Change data
            // setTimeout(function () {
            //     donut_chart.load({
            //         columns: [
            //             //["No. of Cases Logged", 2.5, 1.9, 2.1, 1.8, 2.2, 2.1, 1.7, 1.8, 1.8, 2.5, 2.0, 1.9, 2.1, 2.0, 2.4, 2.3, 1.8, 2.2, 2.3, 1.5, 2.3, 2.0, 2.0, 1.8, 2.1, 1.8, 1.8, 1.8, 2.1, 1.6, 1.9, 2.0, 2.2, 1.5, 1.4, 2.3, 2.4, 1.8, 1.8, 2.1, 2.4, 2.3, 1.9, 2.3, 2.5, 2.3, 1.9, 2.0, 2.3, 1.8],
            //         ]
            //     });
            // });
            // setTimeout(function () {
            //     donut_chart.unload({
            //         ids: 'data1'
            //     });
            //     donut_chart.unload({
            //         ids: 'data2'
            //     });
            // }, 8000);

            // Resize chart on sidebar width change
            $('.sidebar-control').on('click', function() {
                donut_chart.resize();
            });
        }
         if(donut_chart_element_1) {

            // Generate chart
            var donut_chart_1 = c3.generate({
                bindto: donut_chart_element_1,
                size: { width:200, height:250  },
                color: {
                    pattern: ['#E34979', '#476DE3', '#5BEAC1']
                },
                data: {
                    columns: [
                        ['data11', 30],
                        ['data22', 120],
                    ],
                    type : 'donut'
                },
                donut: {
                    title: "LMD"
                }
            });

            // Change data
            setTimeout(function () {
                donut_chart_1.load({
                    columns: [
                        ["Cases Open", 0.2, 0.2, 0.2, 0.2, 0.2, 0.4, 0.3, 0.2, 0.2, 0.1, 0.2, 0.2, 0.1, 0.1, 0.2, 0.4, 0.4, 0.3, 0.3, 0.3, 0.2, 0.4, 0.2, 0.5, 0.2, 0.2, 0.4, 0.2, 0.2, 0.2, 0.2, 0.4, 0.1, 0.2, 0.2, 0.2, 0.2, 0.1, 0.2, 0.2, 0.3, 0.3, 0.2, 0.6, 0.4, 0.3, 0.2, 0.2, 0.2, 0.2],
                        ["No. of Cases Resolved", 1.4, 1.5, 1.5, 1.3, 1.5, 1.3, 1.6, 1.0, 1.3, 1.4, 1.0, 1.5, 1.0, 1.4, 1.3, 1.4, 1.5, 1.0, 1.5, 1.1, 1.8, 1.3, 1.5, 1.2, 1.3, 1.4, 1.4, 1.7, 1.5, 1.0, 1.1, 1.0, 1.2, 1.6, 1.5, 1.6, 1.5, 1.3, 1.3, 1.3, 1.2, 1.4, 1.2, 1.0, 1.3, 1.2, 1.3, 1.3, 1.1, 1.3],
                        ["No. of Cases Logged", 2.5, 1.9, 2.1, 1.8, 2.2, 2.1, 1.7, 1.8, 1.8, 2.5, 2.0, 1.9, 2.1, 2.0, 2.4, 2.3, 1.8, 2.2, 2.3, 1.5, 2.3, 2.0, 2.0, 1.8, 2.1, 1.8, 1.8, 1.8, 2.1, 1.6, 1.9, 2.0, 2.2, 1.5, 1.4, 2.3, 2.4, 1.8, 1.8, 2.1, 2.4, 2.3, 1.9, 2.3, 2.5, 2.3, 1.9, 2.0, 2.3, 1.8],
                    ]
                });
            }, 4000);
            setTimeout(function () {
                donut_chart_1.unload({
                    ids: 'data11'
                });
                donut_chart_1.unload({
                    ids: 'data22'
                });
            }, 8000);

            // Resize chart on sidebar width change
            $('.sidebar-control').on('click', function() {
                donut_chart_1.resize();
            });
        }
         if(donut_chart_element_2) {

            // Generate chart
            var donut_chart_2 = c3.generate({
                bindto: donut_chart_element_2,
                size: { width:200, height:250 },
                color: {
                    pattern: ['#E34979', '#476DE3', '#5BEAC1']
                },
                data: {
                    columns: [
                        ['data1', 30],
                        ['data2', 120],
                    ],
                    type : 'donut'
                },
                donut: {
                    title: "BUS"
                }
            });

            // Change data
            setTimeout(function () {
                donut_chart_2.load({
                    columns: [
                        ["Cases Open", 0.2, 0.2, 0.2, 0.2, 0.2, 0.4, 0.3, 0.2, 0.2, 0.1, 0.2, 0.2, 0.1, 0.1, 0.2, 0.4, 0.4, 0.3, 0.3, 0.3, 0.2, 0.4, 0.2, 0.5, 0.2, 0.2, 0.4, 0.2, 0.2, 0.2, 0.2, 0.4, 0.1, 0.2, 0.2, 0.2, 0.2, 0.1, 0.2, 0.2, 0.3, 0.3, 0.2, 0.6, 0.4, 0.3, 0.2, 0.2, 0.2, 0.2],
                        ["No. of Cases Resolved", 1.4, 1.5, 1.5, 1.3, 1.5, 1.3, 1.6, 1.0, 1.3, 1.4, 1.0, 1.5, 1.0, 1.4, 1.3, 1.4, 1.5, 1.0, 1.5, 1.1, 1.8, 1.3, 1.5, 1.2, 1.3, 1.4, 1.4, 1.7, 1.5, 1.0, 1.1, 1.0, 1.2, 1.6, 1.5, 1.6, 1.5, 1.3, 1.3, 1.3, 1.2, 1.4, 1.2, 1.0, 1.3, 1.2, 1.3, 1.3, 1.1, 1.3],
                        ["No. of Cases Logged ", 2.5, 1.9, 2.1, 1.8, 2.2, 2.1, 1.7, 1.8, 1.8, 2.5, 2.0, 1.9, 2.1, 2.0, 2.4, 2.3, 1.8, 2.2, 2.3, 1.5, 2.3, 2.0, 2.0, 1.8, 2.1, 1.8, 1.8, 1.8, 2.1, 1.6, 1.9, 2.0, 2.2, 1.5, 1.4, 2.3, 2.4, 1.8, 1.8, 2.1, 2.4, 2.3, 1.9, 2.3, 2.5, 2.3, 1.9, 2.0, 2.3, 1.8],
                    ]
                });
            }, 4000);
            setTimeout(function () {
                donut_chart_2.unload({
                    ids: 'data1'
                });
                donut_chart_2.unload({
                    ids: 'data2'
                });
            }, 8000);

            // Resize chart on sidebar width change
            $('.sidebar-control').on('click', function() {
                donut_chart_2.resize();
            });
        }

        // Bar chart
        if(bar_chart_element) {

            // Generate chart
            var bar_chart = c3.generate({
                bindto: bar_chart_element,
                size: { height: 800 },
                data: {
                    x : 'x',
                    columns: [
                        ['x', 'Engine', 'Chasis', 'Drive Line', 'Bus Body', 'Trippers', 'SPL Application'],
                        ['No. Cases Logged', 30, 200, 100, 400, 150, 250],
                        ['No. Cases Resolved', 130, 100, 140, 200, 150, 50],
                        ['Cases Open', 130, 100, 140, 200, 150, 50],
                    ],
                    type: 'bar'
                },
                axis: {
                    x: {
                        type: 'category',
                    }
                },
                color: {
                    pattern: ['#E45281', '#4268E2', '#8C9CB1']
                },
                bar: {
                    width: {
                        ratio: 0.2
                    }
                },
                bar: {
                    space: 0.35
                },
                grid: {
                    y: {
                        show: true
                    }
                }
            });

            // Change data
            setTimeout(function () {
                bar_chart.load({
                    columns: [
                        // ['data3', 130, 150, 200, 300, 200, 100]
                    ]
                });
            }, 6000);

            // Resize chart on sidebar width change
            $('.sidebar-control').on('click', function() {
                bar_chart.resize();
            });
        }
        if(bar_chart_element_1) {
            var xAxisData = ['Skyline Pro','Skyline','Starline','Pro 5025','Pro 5016','Pro 1055', 'Pro 1049', 'Pro 1050'];

            // Generate chart
            var bar_chart_1 = c3.generate({
                bindto: bar_chart_element_1,
                size: { height:800 },
                data: {
                  columns: [
                    ['Open Cases', 10, 20, 25, 35, 40, 60, 25, 35,],
                    ['No. of Cases Resolved', 15, 36, 14, 36, 98, 78, 25, 35,],
                    ['No. Of Cases Logged', 59, 23, 27, 36, 69, 77,25, 35,],
                    // ['sample3', 654, 6987, 4112, 6210, 412, 202],
                    // ['sample4', 22, 252, 275, 3136, 159, 2636],
                  ],
                    type : 'bar',
                  labels: {
                        format: {
                            y: d3.format('')
                          }
                        },
                  
                },
                    color: {
                    pattern: ['#E45281', '#4268E2', '#8C9CB1']
                },
                bar: {
                    space: 0.35
                },
                axis: {
                      x: {
                        type: 'categorized',
                        categories: xAxisData,
                         // label: {
                         //        text: 'Employee name',
                         //        position: 'outer-center'
                         //  }
                     },
                      // y: {
                      //       label: {
                      //           text: ' Count',
                      //           position: 'outer-middle'
                      //      }
                      // },
                      rotated : true
                     }
            });



            // Change data
            setTimeout(function () {
                bar_chart_1.load({
                    columns: [
                        // ['data3', 130, 150, 200, 300, 200, 100]
                    ]
                });
            }, 6000);

            // Resize chart on sidebar width change
            $('.sidebar-control').on('click', function() {
                bar_chart.resize();
            });
        }
        if(bar_chart_element_2) {

            // Generate chart
            var bar_chart_2 = c3.generate({
                bindto: bar_chart_element_2,
                size: { height: 320 },
                data: {
                    x : 'x',
                    columns: [
                        ['x', 'Open', 'Reopen', 'Pre-Closed'],
                        ['Nearing SLA (Closed to 80%)', 30, 12, 25],
                        ['Breached SLA', 42, 35, 7]
                    ],
                    type: 'bar'
                },
                axis: {
                    x: {
                        type: 'category',
                    }
                },
                color: {
                    pattern: ['#E45281', '#4268E2']
                },
                bar: {
                    width: {
                        ratio: 0.2
                    }
                },
                bar: {
                    space: 0.35
                },
                grid: {
                    y: {
                        show: true
                    }
                }
            });

            // Change data
            setTimeout(function () {
                bar_chart.load({
                    columns: [
                        // ['data3', 130, 150, 200, 300, 200, 100]
                    ]
                });
            }, 6000);

            // Resize chart on sidebar width change
            $('.sidebar-control').on('click', function() {
                bar_chart.resize();
            });
        }
        if(bar_chart_element_3) {

            // Generate chart
            var bar_chart_3 = c3.generate({
                bindto: bar_chart_element_3,
                size: { height: 320 },
                data: {
                    x : 'x',
                    columns: [
                        ['x', 'Agent 1', 'Agent 2', 'Agent 3', 'Agent 4'],
                        ['> 48 Hrs', 2, 4, 6, 7, 9],
                        ['24-48 Hrs', 3, 5, 7, 8, 11],
                        ['0.24 Hrs', 1, 4, 7, 9, 8.5]
                    ],
                    type: 'bar'
                },
                axis: {
                    x: {
                        type: 'category',
                    }
                },
                color: {
                    pattern: ['#E45281', '#4268E2', '#8C9CB1']
                },
                bar: {
                    width: {
                        ratio: 0.2
                    }
                },
                bar: {
                    space: 0.35
                },
                grid: {
                    y: {
                        show: true
                    }
                }
            });

            // Change data
            setTimeout(function () {
                bar_chart.load({
                    columns: [
                        // ['data3', 130, 150, 200, 300, 200, 100]
                    ]
                });
            }, 6000);

            // Resize chart on sidebar width change
            $('.sidebar-control').on('click', function() {
                bar_chart.resize();
            });
        }
        // Stacked bar chart
        if(bar_stacked_chart_element) {

            // Generate chart
            var bar_stacked_chart = c3.generate({
                bindto: bar_stacked_chart_element,
                size: { height: 800 },
                color: {
                    pattern: ['#FF9800', '#F44336', '#009688', '#4CAF50']
                },
                data: {
                    columns: [
                        ['data1', -30, 200, 200, 400, -150, 250],
                        ['data2', 130, 100, -100, 200, -150, 50],
                        ['data3', -230, 200, 200, -300, 250, 250]
                    ],
                    type: 'bar',
                    groups: [
                        ['data1', 'data2']
                    ]
                },
                grid: {
                    x: {
                        show: true
                    },
                    y: {
                        lines: [{value:0}]
                    }
                }
            });

            // Change data
            // setTimeout(function () {
            //     bar_stacked_chart.groups([['data1', 'data2', 'data3']])
            // }, 4000);
            // setTimeout(function () {
            //     bar_stacked_chart.load({
            //         columns: [['data4', 100, -50, 150, 200, -300, -100]]
            //     });
            // }, 8000);
            // setTimeout(function () {
            //     bar_stacked_chart.groups([['data1', 'data2', 'data3', 'data4']])
            // }, 10000);

            // Resize chart on sidebar width change
            $('.sidebar-control').on('click', function() {
                bar_stacked_chart.resize();
            });
        }

        // Combined chart
        if(combined_chart_element) {

            // Generate chart
            var combined_chart = c3.generate({
                bindto: combined_chart_element,
                size: { height: 320 },
                color: {
                    pattern: ['#FF9800', '#F44336', '#009688', '#4CAF50', '#03A9F4', '#8BC34A']
                },
                data: {
                    columns: [
                        ['data1', 30, 20, 50, 40, 60, 50],
                        ['data2', 200, 130, 90, 240, 130, 220],
                        ['data3', 300, 200, 160, 400, 250, 250],
                        ['data4', 200, 130, 90, 240, 130, 220],
                        ['data5', 130, 120, 150, 140, 160, 150],
                        ['data6', 90, 70, 20, 50, 60, 120],
                    ],
                    type: 'bar',
                    types: {
                        data3: 'spline',
                        data4: 'line',
                        data6: 'area',
                    },
                    groups: [
                        ['data1','data2']
                    ]
                }
            });

            // Resize chart on sidebar width change
            $('.sidebar-control').on('click', function() {
                combined_chart.resize();
            });
        }

        // Scatter chart
        if(scatter_chart_element) {

            // Generate chart
            var scatter_chart = c3.generate({
                size: { height: 320 },
                bindto: scatter_chart_element,
                data: {
                    xs: {
                        setosa: 'setosa_x',
                        versicolor: 'versicolor_x',
                    },
                    columns: [
                        ["setosa_x", 3.5, 3.0, 3.2, 3.1, 3.6, 3.9, 3.4, 3.4, 2.9, 3.1, 3.7, 3.4, 3.0, 3.0, 4.0, 4.4, 3.9, 3.5, 3.8, 3.8, 3.4, 3.7, 3.6, 3.3, 3.4, 3.0, 3.4, 3.5, 3.4, 3.2, 3.1, 3.4, 4.1, 4.2, 3.1, 3.2, 3.5, 3.6, 3.0, 3.4, 3.5, 2.3, 3.2, 3.5, 3.8, 3.0, 3.8, 3.2, 3.7, 3.3],
                        ["versicolor_x", 3.2, 3.2, 3.1, 2.3, 2.8, 2.8, 3.3, 2.4, 2.9, 2.7, 2.0, 3.0, 2.2, 2.9, 2.9, 3.1, 3.0, 2.7, 2.2, 2.5, 3.2, 2.8, 2.5, 2.8, 2.9, 3.0, 2.8, 3.0, 2.9, 2.6, 2.4, 2.4, 2.7, 2.7, 3.0, 3.4, 3.1, 2.3, 3.0, 2.5, 2.6, 3.0, 2.6, 2.3, 2.7, 3.0, 2.9, 2.9, 2.5, 2.8],
                        ["setosa", 0.2, 0.2, 0.2, 0.2, 0.2, 0.4, 0.3, 0.2, 0.2, 0.1, 0.2, 0.2, 0.1, 0.1, 0.2, 0.4, 0.4, 0.3, 0.3, 0.3, 0.2, 0.4, 0.2, 0.5, 0.2, 0.2, 0.4, 0.2, 0.2, 0.2, 0.2, 0.4, 0.1, 0.2, 0.2, 0.2, 0.2, 0.1, 0.2, 0.2, 0.3, 0.3, 0.2, 0.6, 0.4, 0.3, 0.2, 0.2, 0.2, 0.2],
                        ["versicolor", 1.4, 1.5, 1.5, 1.3, 1.5, 1.3, 1.6, 1.0, 1.3, 1.4, 1.0, 1.5, 1.0, 1.4, 1.3, 1.4, 1.5, 1.0, 1.5, 1.1, 1.8, 1.3, 1.5, 1.2, 1.3, 1.4, 1.4, 1.7, 1.5, 1.0, 1.1, 1.0, 1.2, 1.6, 1.5, 1.6, 1.5, 1.3, 1.3, 1.3, 1.2, 1.4, 1.2, 1.0, 1.3, 1.2, 1.3, 1.3, 1.1, 1.3],
                    ],
                    type: 'scatter'
                },
                color: {
                    pattern: ['#4CAF50', '#F44336']
                },
                grid: {
                    y: {
                        show: true
                    }
                },
                point: { r: 5 },
                axis: {
                    x: {
                        label: 'Sepal.Width',
                        tick: {
                            fit: false
                        }
                    },
                    y: {
                        label: 'Petal.Width'
                    }
                }
            });

            // Change data
            setTimeout(function () {
                scatter_chart.load({
                    xs: {
                        virginica: 'virginica_x'
                    },
                    columns: [
                        ["virginica_x", 3.3, 2.7, 3.0, 2.9, 3.0, 3.0, 2.5, 2.9, 2.5, 3.6, 3.2, 2.7, 3.0, 2.5, 2.8, 3.2, 3.0, 3.8, 2.6, 2.2, 3.2, 2.8, 2.8, 2.7, 3.3, 3.2, 2.8, 3.0, 2.8, 3.0, 2.8, 3.8, 2.8, 2.8, 2.6, 3.0, 3.4, 3.1, 3.0, 3.1, 3.1, 3.1, 2.7, 3.2, 3.3, 3.0, 2.5, 3.0, 3.4, 3.0],
                        ["virginica", 2.5, 1.9, 2.1, 1.8, 2.2, 2.1, 1.7, 1.8, 1.8, 2.5, 2.0, 1.9, 2.1, 2.0, 2.4, 2.3, 1.8, 2.2, 2.3, 1.5, 2.3, 2.0, 2.0, 1.8, 2.1, 1.8, 1.8, 1.8, 2.1, 1.6, 1.9, 2.0, 2.2, 1.5, 1.4, 2.3, 2.4, 1.8, 1.8, 2.1, 2.4, 2.3, 1.9, 2.3, 2.5, 2.3, 1.9, 2.0, 2.3, 1.8],
                    ]
                });
            }, 4000);
            setTimeout(function () {
                scatter_chart.unload({
                    ids: 'setosa'
                });
            }, 8000);
            setTimeout(function () {
                scatter_chart.load({
                    columns: [
                        ["virginica", 0.2, 0.2, 0.2, 0.2, 0.2, 0.4, 0.3, 0.2, 0.2, 0.1, 0.2, 0.2, 0.1, 0.1, 0.2, 0.4, 0.4, 0.3, 0.3, 0.3, 0.2, 0.4, 0.2, 0.5, 0.2, 0.2, 0.4, 0.2, 0.2, 0.2, 0.2, 0.4, 0.1, 0.2, 0.2, 0.2, 0.2, 0.1, 0.2, 0.2, 0.3, 0.3, 0.2, 0.6, 0.4, 0.3, 0.2, 0.2, 0.2, 0.2],
                    ]
                });
            }, 10000);

            // Resize chart on sidebar width change
            $('.sidebar-control').on('click', function() {
                scatter_chart.resize();
            });
        }
    };


    //
    // Return objects assigned to module
    //

    return {
        init: function() {
            _barsPiesExamples();
        }
    }
}();


// Initialize module
// ------------------------------

document.addEventListener('DOMContentLoaded', function() {
    С3BarsPies.init();
});
$("#modal_vertical, #modal_dtc, #modal_ecu, #c3-bar-chart_1").on('shown.bs.modal', function(){
    С3BarsPies.init();
});