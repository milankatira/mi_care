import 'chartjs-plugin-zoom';
import React from 'react';
import { Line } from 'react-chartjs-2';

const ResidentInsightGraph = ({
    datasets,
    zoomValue,
    color,
}) => {
    const ref = React.useRef()

    const data = (canvas) => {

        const ctx = canvas.getContext("2d");
        const gradient1 = ctx.createLinearGradient(0, 0, 0, 200);
        gradient1.addColorStop(0, 'rgba(73,245,200, 1)');
        gradient1.addColorStop(1, 'rgba(255,255,255, 0.25)');


        const gradient2 = ctx.createLinearGradient(0, 0, 0, 200);
        gradient2.addColorStop(0, 'rgba(240,150,125, 1)');
        gradient2.addColorStop(1, 'rgba(255,255,255, 1)');

        let datasetsForGraph = []

        if (datasets.length === 1) {
            datasetsForGraph = [{
                label: '# of Activities',
                data: datasets[0].data,
                fill: datasets[0].hasGradient,
                backgroundColor: datasets[0].hasGradient ? gradient1 : 'rgba(73,245,200,1)',
                borderColor: '#19c498',
                yAxisID: 'y-axis-1',
                borderWidth: 2.25,
            }]
        } else if (datasets.length === 2) {
            datasetsForGraph = [
                {
                    label: '# of Activities',
                    data: datasets[0].data,
                    fill: datasets[0].hasGradient,
                    backgroundColor: datasets[0].hasGradient ? gradient1 : 'rgba(73,245,200,1)',
                    borderColor: '#19c498',
                    yAxisID: 'y-axis-1',
                    borderWidth: 2.25,
                },
                {
                    label: '# no of Actions',
                    data: datasets[1].data,
                    fill: datasets[1].hasGradient,
                    backgroundColor: datasets[1].hasGradient ? gradient2 : 'rgba(240,150,125, 1)',
                    borderColor: '#F0967D',
                    yAxisID: 'y-axis-2',
                    borderDash: [2, 1],
                    borderWidth: 1.5,
                },
            ]
        }

        let labels = [];

        switch (color) {
            case 1:
                labels = ['12:00:00', '12:00:01', '12:00:02', '12:00:03', '12:00:04', '12:00:05']
                break;

            case 2:
                labels = ['12:00', '12:12', '12:24', '12:36', '12:48', '13:00']
                break;

            case 3:
                labels = ['8:00', '9:00', '10:00', '11:00', '12:00', '13:00']
                break;
            default:
                labels = ['8:00', '9:00', '10:00', '11:00', '12:00', '13:00']
                break;
        }

        return {
            labels: labels,
            datasets: datasetsForGraph,
        }

    }
    //
    const options = {
        layout: {
            padding: {
                left: 0,
                right: 0,
                top: 20,
                bottom: 0
            }
        },
        legend: {
            display: false
        },
        scales: {
            xAxes: [
                {
                    gridLines: {
                        display: false
                    },
                    scaleLabel: {
                        display: false
                    },
                    ticks: {
                        min: 0,
                        max: 2
                    }
                }
            ],
            yAxes: [
                {
                    type: 'linear',
                    display: false,
                    position: 'left',
                    id: 'y-axis-1',
                    gridLines: {
                        display: false
                    },
                    ticks: {
                        min: 0,
                        max: 20
                    }
                },
                {
                    type: 'linear',
                    display: false,
                    position: 'right',
                    id: 'y-axis-2',
                    gridLines: {
                        display: false
                    },
                    ticks: {
                        min: 0,
                        max: 20
                    }
                },
            ],

        },
        pan: {
            enabled: true,
            mode: "x",
            speed: 10,
            threshold: 2
        },
        zoom: {
            enabled: true,
            drag: false,
            mode: "x",
            limits: {
                max: 10,
                min: 0.5
            }
        },
        responsive: true,
        plugins: {
            datalabels: {
                display: false,
            },
        }
        // plugins: {
        //     datalabels: {
        //         display: false,
        //     },
        //     zoom: {
        //         // Container for pan options
        //         pan: {
        //             // Boolean to enable panning
        //             enabled: true,

        //             // Panning directions. Remove the appropriate direction to disable
        //             // Eg. 'y' would only allow panning in the y direction
        //             // A function that is called as the user is panning and returns the
        //             // available directions can also be used:
        //             //   mode: function({ chart }) {
        //             //     return 'xy';
        //             //   },
        //             mode: 'x',

        //             rangeMin: {
        //                 // Format of min pan range depends on scale type
        //                 x: null,
        //                 y: null
        //             },
        //             rangeMax: {
        //                 // Format of max pan range depends on scale type
        //                 x: null,
        //                 y: null
        //             },

        //             // On category scale, factor of pan velocity
        //             speed: 20,

        //             // Minimal pan distance required before actually applying pan
        //             threshold: 10,

        //             // Function called while the user is panning
        //             onPan: function ({ chart }) { console.log(`I'm panning!!!`); },
        //             // Function called once panning is completed
        //             onPanComplete: function ({ chart }) { console.log(`I was panned!!!`); }
        //         },

        //         // Container for zoom options
        //         zoom: {
        //             // Boolean to enable zooming
        //             enabled: true,

        //             // Enable drag-to-zoom behavior
        //             drag: true,

        //             // Drag-to-zoom effect can be customized
        //             // drag: {
        //             // 	 borderColor: 'rgba(225,225,225,0.3)'
        //             // 	 borderWidth: 5,
        //             // 	 backgroundColor: 'rgb(225,225,225)',
        //             // 	 animationDuration: 0
        //             // },

        //             // Zooming directions. Remove the appropriate direction to disable
        //             // Eg. 'y' would only allow zooming in the y direction
        //             // A function that is called as the user is zooming and returns the
        //             // available directions can also be used:
        //             //   mode: function({ chart }) {
        //             //     return 'xy';
        //             //   },
        //             mode: 'x',

        //             rangeMin: {
        //                 // Format of min zoom range depends on scale type
        //                 x: null,
        //                 y: null
        //             },
        //             rangeMax: {
        //                 // Format of max zoom range depends on scale type
        //                 x: null,
        //                 y: null
        //             },

        //             // Speed of zoom via mouse wheel
        //             // (percentage of zoom on a wheel event)
        //             speed: 0.1,

        //             // Minimal zoom distance required before actually applying zoom
        //             threshold: 2,

        //             // On category scale, minimal zoom level before actually applying zoom
        //             sensitivity: 3,

        //             // Function called while the user is zooming
        //             onZoom: function ({ chart }) { console.log(`I'm zooming!!!`); },
        //             // Function called once zooming is completed
        //             onZoomComplete: function ({ chart }) { console.log(`I was zoomed!!!`); }
        //         }
        //     }
        // }
    }

    React.useEffect(() => {
        if (ref.current) {
            const chart = ref.current.chartInstance;
            console.log('zoom', zoomValue)
            console.log('zoom', chart)

            // chart.options.scales.xAxes[0].ticks.min = zoomValue;
            // chart.options.scales.xAxes[0].ticks.max = 100;
            // chart.update();
        }
    }, [zoomValue])

    // React.useEffect(() => {
    //     if (ref.current) {
    //         const chartInstance = ref.current;
    //         chartInstance.doZoom = function(percentage) {
    //             doZoom(chartInstance, 1 + (percentage / 100), 1 + (percentage / 100), undefined, undefined, true);
    //             // Manually trigger zoom complete callback.
    //             const zoomOptions = chartInstance.$zoom._options.zoom;
    //             if (typeof zoomOptions.onZoomComplete === 'function') {
    //                 zoomOptions.onZoomComplete({chart: chartInstance});
    //             }
    //         }
    //     }
    // }, [ref])

    return (
        <div className='resident-insights-area' >
            <div className='resident-insights-area-graph'>
                <Line ref={ref} width='100%' height='38.5rem' data={data} options={options} />
            </div>
        </div >
    )
}

export default ResidentInsightGraph
