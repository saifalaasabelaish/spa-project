import "./Navbar.css";

const Navbar=()=>{
    return(
       <>
    <ul>
    <a className="navbar-brand mt-3 mx-5" href="#">
      <img src="/images/SPA_Logo.png" alt=" SPA logo" width="75" height="70"></img>
    </a>
<li className="mt-3"><a href="#contact">CONTACT US</a></li>
<li className="mt-3"><a href="#services">SERVICES</a></li>
<li className="mt-3"><a href="#about">ABOUT US</a></li>
<li className="mt-3"><a href="#home">HOME</a></li>

</ul>
       </>
    );
};
export default Navbar;