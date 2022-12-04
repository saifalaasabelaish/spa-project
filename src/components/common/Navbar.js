import "./Navbar.css";
const Navbar = () => {
  return (

    <nav class="navbar bg-light">
      <div class="container">
        <a class="navbar-brand" href=" ">
          <img class="public/images/SPA_Logo.png" alt=" "  >
          </img>
        </a>
        <ul>


          <li><a href="#Contact">CONTACT US</a></li>
          <li><a href="#Services">SERVICES</a></li>
          <li><a href="#About">ABOUT US</a></li>
          <li><a href="#Home">HOME</a></li>

        </ul>
      </div>
    </nav>




  );
};
export default Navbar;