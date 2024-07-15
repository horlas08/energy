import Chart from 'react-apexcharts'
import { COLOR_1, COLORS } from '@/constants/chart.constant'
import { number, string } from 'yup'

export default function OverAllSales() {
    const data = [
        {
            name: '',
            data: [8107.85, 8128.0, 8122.9, 8165.5],
        },
    ]

    return (
        <Chart
            options={{
                chart: {
                    zoom: {
                        enabled: false,
                    },
                    toolbar: {
                        show: false,
                    },
                },
                colors: [COLOR_1],
                fill: {
                    type: 'gradient',
                    gradient: {
                        shadeIntensity: 1,
                        opacityFrom: 0.7,
                        opacityTo: 0.9,
                        stops: [0, 80, 100],
                    },
                },
                dataLabels: {
                    enabled: false,
                },
                stroke: {
                    curve: 'smooth',
                    width: 3,
                },

                labels: [
                    'Jan',
                    'Feb',
                    'Mar',
                    'Apr',
                    'May',
                    'Jun',
                    'Jul',
                    'Aug',
                    'Sep',
                    'Oct',
                    'Nov',
                    'Dec',
                ],
                xaxis: {
                    // type: 'numeric',
                    title: {
                        // text: "e"
                    },
                },
                yaxis: {
                    opposite: false,
                    labels: {
                        formatter(val: number): string | string[] {
                            return `${val}K`
                        },
                    },
                },
                legend: {
                    horizontalAlign: 'left',
                },
                tooltip: {
                    cssClass: 'bg-primary',
                },
            }}
            type="area"
            series={data}
            height={300}
        />
    )
}
