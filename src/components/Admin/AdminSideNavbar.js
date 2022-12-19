const AdminSideNavbar = () => {

  return (

    <nav className="sb-sidenav accordion sb-sidenav-dark" id="sidenavAccordion">
      <div className="sb-sidenav-menu">
        <div className="nav">
          <a className="nav-link">
            <div className="sb-nav-link-icon"><i className="fas fa-tachometer-alt" /></div>
            Home Page
          </a>
          <a className="nav-link" >
            <div className="sb-nav-link-icon"><i className="fas fa-chart-area" /></div>
            Charts and Stats
          </a>
          <a className="nav-link">
            <div className="sb-nav-link-icon"><i className="fas fa-table" /></div>
            Data Base
          </a>
        </div>
      </div>
      <div className="sb-sidenav-footer">
        <div className="small">Logged in as:</div>
        Admin
      </div>
    </nav>
  );
}

export default AdminSideNavbar;