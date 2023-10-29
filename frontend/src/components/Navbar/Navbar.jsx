import styles from "./Navbar.module.css";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <nav className={styles.navbarContainer}>
      <NavLink to="/">dashboard</NavLink>
      <NavLink to="/income">income</NavLink>
      <NavLink to="/expense">expense</NavLink>
      <NavLink to="/saving">income</NavLink>
    </nav>
  );
};

export default Navbar;
