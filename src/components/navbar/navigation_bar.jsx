import Button from "../button/button";
import { NavLink } from "react-router";
import "./navigation_bar.css";
import logo from "../../assets/RON2.png";

function NavigationBar() {
  return (
    <nav>
      <img src={logo} />
      <menu>
        <NavLink to="/" end>
          Home
        </NavLink>
        <NavLink to="/about" end>
          About
        </NavLink>
      </menu>
    </nav>
  );
}

export default NavigationBar;
