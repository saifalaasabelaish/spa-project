const BarChart=()=>{

    return(

        <div className="card mb-4">
        <div className="card-header">
            <i className="fas fa-chart-bar me-1" />
            Bar Chart Example
        </div>
        <div className="card-body"><canvas id="myBarChart" width="100%" height={40} /></div>
    </div>
    )
}
export default BarChart;