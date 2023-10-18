import { Component } from "react";
import "./Nstyles.css";
import { MenuItems } from "./MenuItems"
import { Link } from "react-router-dom";

class Navbar extends Component {
    render() {
        return(
            <nav className="NavbarItems">
                <h1 className="navbar-logo">CCH</h1>

                <ul className="nav-menu">
                    {MenuItems.map((item, index) =>{
                        return (
                            <li key={index}>
                                <a className={item.cName} href="/">
                                    <i className={item.icon}></i>{item.title}
                                </a>
                            </li>
                        );
                    })}
                    <button>Sign up</button>
                    
                </ul>
            </nav>
        )
    }
}

export default Navbar;