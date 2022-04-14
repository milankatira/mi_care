import 'chartjs-plugin-datalabels';
import React from 'react';
import { Chart, Doughnut } from 'react-chartjs-2';
import Bottle from '../../../assets/icons/bottle.svg';
import CardHeading from '../../commons/Heading/CardHeading';

var originalDoughnutDraw = Chart.controllers.doughnut.prototype.draw;
Chart.helpers.extend(Chart.controllers.doughnut.prototype, {
    draw: function () {
        originalDoughnutDraw.apply(this, arguments);

        var chart = this.chart;
        var width = chart.chart.width,
            height = chart.chart.height,
            ctx = chart.chart.ctx;

        var fontSize = (height / 114).toFixed(2);
        ctx.font = fontSize + "em Poppins";
        ctx.textBaseline = "middle";

        var sum = 0;
        for (var i = 0; i < chart.config.data.datasets[0].data.length; i++) {
            sum += chart.config.data.datasets[0].data[i];
        }

        var text = '78%',
            textX = Math.round((width - ctx.measureText(text).width) / 2),
            textY = height / 2;

        ctx.fillText(text, textX, textY);
    }
});

const ResidentHydration = () => {

    const data = {
        labels: [
            'Hydrated',
            'Not hydrated',
        ],
        datasets: [{
            data: [78, 22],
            backgroundColor: [
                '#6EBDDE',
                '#CCF3F0',
            ],
            hoverBackgroundColor: [
                '#6EBDDE',
                '#CCF3F0',
            ]
        }]
    }

    const options = {
        aspectRatio: 1,
        legend: {
            display: false
        },
        plugins: {
            datalabels: {
                display: false,
            }
        }
    }

    return (
        <div className='resident-hydration'>
            <CardHeading title='Hydration' icon={Bottle} />
            <div className='mx-auto' style={{ width: '85%' }}>
                {/* <h6 className='doughnut-label'>78%</h6> */}
                {/* <div
                    style={{
                        width: "100%", height: "40px", position: "absolute", top: "50%", left: "0", marginTop: "-20px", lineHeight: "19px", textAlign: "center", zIndex: 999999999999999
                    }}
                >
                    99%
                </div> */}
                <Doughnut data={data} options={options} />
            </div>
            <p className='text-muted text-center'>Hydration events: <span className='text-black font-weight-bold'>3 times</span></p>
        </div>
    )
}

export default ResidentHydration
