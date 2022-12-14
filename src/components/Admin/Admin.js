
import "./Admin.css"
import AdminDataTable from "./AdminDataTable";
import AdminNavbar from "./AdminNavbar"
import AdminSideNavbar from "./AdminSideNavbar"
import AreaChart from "./AreaChart"
import BarChart from "./BarChart"
const Admin = () => {

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
                            <h1 className="mt-4">Dashboard</h1>
                            <ol className="breadcrumb mb-4">
                                <li className="breadcrumb-item active">Dashboard</li>
                            </ol>
                            <div className="row">
                                <div className="col-xl-6">
                                    <AreaChart></AreaChart>
                                </div>
                                <div className="col-xl-6">
                                   <BarChart></BarChart>
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