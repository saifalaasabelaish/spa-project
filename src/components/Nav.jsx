import {useEffect, useState} from "react";
import { getTopNav } from "../data/navbar";
import './nav.css'

const Navbar= () => {

const [navItems,setNavItems]=useState([]);
const [collapse,setcollapse]=useState("nav__menu");
const [toggleIcon,settoggleIcon]=useState("togler__icon");

useEffect(()=>{
  setNavItems(getTopNav());

},[]);


const onToggle=()=>{
  collapse="nav__menu"
  ? setcollapse("nav__menu nav__collapse")
  :setcollapse("set__collapse");

  togler__icon==='togler__icon'
  ? settoggleIcon('togler__icon toggle')
  :settoggleIcon('toggle__icon');

};

    return(
        <div className="nav__wapper">
  <div className="container">
   <nav className="nav">

   <a href="#" className="nav__brand">
    Logo
    </a>
   <ul className={collapse}>
    {navItems.map((item) =>(
        
        <li key={item.id}  className="nav__item">
        <a href={item.href} className="nav__link">
           
        {item.label}
        </a>
         </li>
        
        ))}
   </ul>
   <div className={toggleIcon} onClick={onToggle}>
    <div className="line_1"></div>
    <div className="line_2"></div>
    <div className="line_3"></div>
   </div>
   </nav>
    </div>
    </div>
     );
    };
    export default Navbar;