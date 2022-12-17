const AdminSideNavbar = () => {

    return (
    
        <nav className="sb-sidenav accordion sb-sidenav-dark" id="sidenavAccordion">
        <div className="sb-sidenav-menu">
          <div className="nav">
            <div className="sb-sidenav-menu-heading">Core</div>
            <a className="nav-link" href="index.html">
              <div className="sb-nav-link-icon"><i className="fas fa-tachometer-alt" /></div>
              Dashboard
            </a>
            <div className="sb-sidenav-menu-heading">Interface</div>
            <a className="nav-link collapsed" href="#" data-bs-toggle="collapse" data-bs-target="#collapsePages" aria-expanded="false" aria-controls="collapsePages">
              <div className="sb-nav-link-icon"><i className="fas fa-book-open" /></div>
              Pages
              <div className="sb-sidenav-collapse-arrow"><i className="fas fa-angle-down" /></div>
            </a>
            <div className="collapse" id="collapsePages" aria-labelledby="headingTwo" data-bs-parent="#sidenavAccordion">
              <nav className="sb-sidenav-menu-nested nav accordion" id="sidenavAccordionPages">
                <a className="nav-link collapsed" href="#" data-bs-toggle="collapse" data-bs-target="#pagesCollapseAuth" aria-expanded="false" aria-controls="pagesCollapseAuth">
                  Authentication
                  <div className="sb-sidenav-collapse-arrow"><i className="fas fa-angle-down" /></div>
                </a>
                <div className="collapse" id="pagesCollapseAuth" aria-labelledby="headingOne" data-bs-parent="#sidenavAccordionPages">
                  <nav className="sb-sidenav-menu-nested nav">
                    <a className="nav-link" href="login.html">Login</a>
                    <a className="nav-link" href="register.html">Register</a>
                    <a className="nav-link" href="password.html">Forgot Password</a>
                  </nav>
                </div>
              </nav>
            </div>
            <div className="sb-sidenav-menu-heading">Addons</div>
            <a className="nav-link" href="charts.html">
              <div className="sb-nav-link-icon"><i className="fas fa-chart-area" /></div>
              Charts
            </a>
            <a className="nav-link" href="tables.html">
              <div className="sb-nav-link-icon"><i className="fas fa-table" /></div>
              Tables
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