const AreaChart = () => {

    return (<div className="card mb-4">
        <div className="card-header">
            <i className="fas fa-chart-area me-1" />
            Area Chart Example
        </div>
        <div className="card-body"><canvas id="myAreaChart" width="100%" height={40} /></div>
    </div>
    )
}
export default AreaChart;