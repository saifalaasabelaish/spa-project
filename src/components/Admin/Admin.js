import { useState } from "react";
import UserData from "./UserData";
import "./Admin.css"
import AdminDataTable from "./AdminDataTable";
import AdminNavbar from "./AdminNavbar"
import AdminSideNavbar from "./AdminSideNavbar"
import LineChart from "./LineChart"
import BarChart from "./BarChart"
import { ChartData } from "./ChartData";

const Admin = () => {
<<<<<<< HEAD
const  [userData ,setUserData] =useState({
labels: UserData.map((data)=>data.service),
datasets:[{
    label: "UserName",
    data:UserData.map((data)=>data.id)
=======
    const [userData] = useState({
        labels: ChartData.map((data) => data.service),
        datasets: [{
            label: "service",
            data: ChartData.map((data) => data.number)
>>>>>>> saif


        }],

    });
    return (
        <div className="sb-nav-fixed">
            <AdminNavbar></AdminNavbar>
            <div id="layoutSidenav">
                <div id="layoutSidenav_nav">
                    <AdminSideNavbar></AdminSideNavbar>
                </div>
                <div id="layoutSidenav_content">
                    <main>
                        <div className="container-fluid px-4">
<<<<<<< HEAD
                            <h1 className="mt-4">Last Month Statistics</h1>
=======
                            <h1 className="mt-4">Home Page</h1>
>>>>>>> saif
                            <ol className="breadcrumb mb-4">
                                <li className="breadcrumb-item active">Dashboard</li>
                            </ol>
                            <div className="row">
                                <div className="col-xl-6">
<<<<<<< HEAD
                                    <LineChart ChartData={userData}/>
=======
                                    <LineChart ChartData={userData} />
>>>>>>> saif
                                </div>
                                <div className="col-xl-6">
                                    <BarChart ChartData={userData} />
                                </div>
                            </div>
                            <div className="card mb-4">
                                <div className="card-header">
                                    <i className="fas fa-table me-1" />
                                    DataTable Example
                                </div>
                                <AdminDataTable></AdminDataTable>
                            </div>
                        </div>
                    </main>
                </div>
            </div>
        </div>

    );
}



export default Admin;