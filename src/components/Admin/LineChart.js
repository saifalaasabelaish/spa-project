import { Line } from "react-chartjs-2";
import {Chart as ChartJS} from "chart.js/auto"
const LineChart = ({ChartData}) => {

    return (

        <div className="card mb-4">
            <div className="card-header">
                Line Chart Example
            </div>
            <div className="card-body">
            <Line data={ChartData}/>
            </div>
        </div>
    )
}
export default LineChart;