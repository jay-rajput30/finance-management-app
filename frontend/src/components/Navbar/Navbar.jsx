import styles from "./Navbar.module.css";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <nav className={styles.navbarContainer}>
      <NavLink to="/" className={styles.navlink}>
        dashboard
      </NavLink>
      <NavLink to="/income" className={styles.navlink}>
        income
      </NavLink>
      <NavLink to="/expense" className={styles.navlink}>
        expense
      </NavLink>
      <NavLink to="/saving" className={styles.navlink}>
        saving
      </NavLink>
    </nav>
  );
};

export default Navbar;
