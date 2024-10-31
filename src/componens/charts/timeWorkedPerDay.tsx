import { Chart, ChartData } from "chart.js/auto";
import { FC, useEffect, useRef } from "react";
import themes from 'daisyui/src/theming/themes';

interface ChartsProps {
    chartData: number[];
    className: string;
}

export const TimeWorkedChart: FC<ChartsProps> = ({ chartData, className }: ChartsProps) => {

    const formatData = (data: number[]): ChartData => ({
        labels: Array.from(Array(15).keys()).slice(1).map(e => `${e}`),
        datasets: [{
            data,
            label: 'Hours/Day'
        }]
    });

    // use a ref to store the chart instance since it it mutable
    const chartRef = useRef<Chart | null>(null);

    // callback creates the chart on the canvas element
    const canvasCallback = (canvas: HTMLCanvasElement | null) => {
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        if (ctx) {
            if (chartRef.current) {
                chartRef.current.destroy();
            }

            chartRef.current = new Chart(ctx, {
                type: 'line',
                data: formatData(chartData),
                options: {
                    color: themes.dark.secondary,
                    borderColor: themes.dark.secondary,
                    backgroundColor: themes.dark.secondary,
                    responsive: true, scales: {
                        x: {
                            title: {
                                display: true,
                                text: 'Day'
                            }
                        },
                        y: {
                            title: {
                                display: true,
                                text: 'Hours'
                            }
                        }
                    }
                }
            });
        }
    };

    // effect to update the chart when props are updated
    useEffect(() => {
        // must verify that the chart exists
        if (chartRef.current) {
            chartRef.current.data = formatData(chartData);
            chartRef.current.update();
        }

        // cleanup function - I had to remove this as it was causing errors
        /*return () => {
          chartRef.current?.destroy();
        };*/
    }, [chartData]);

    return (
        <div className={`m-8 w-1/2 h-64 ${className}`}>
            <canvas className={`h-full ${className}`} ref={canvasCallback}></canvas>
        </div>
    );
}