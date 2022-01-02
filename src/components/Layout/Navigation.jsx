import styles from "./navigation.module.css";
import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/shared/logo.svg";

const Navigation = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logoPart}>
        <div className={styles.logoPartInbox}>
          <img src={logo} alt="" />
        </div>
      </div>
      <div className={styles.navigatePart}>
        <ul className={`${styles.navgitationList} space-x-10`}>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? `${styles.active}` : `${styles.unactive}`
            }
          >
            <li>
              <span>00</span>HOME
            </li>
          </NavLink>
          <NavLink
            to="destination"
            className={({ isActive }) =>
              isActive ? `${styles.active}` : `${styles.unactive}`
            }
          >
            <li>
              <span>01</span>DESTINATION
            </li>
          </NavLink>
          <NavLink
            to="crew"
            className={({ isActive }) =>
              isActive ? `${styles.active}` : `${styles.unactive}`
            }
          >
            <li>
              <span>02</span>CREW
            </li>
          </NavLink>
          <NavLink
            to="technology"
            className={({ isActive }) =>
              isActive ? `${styles.active}` : `${styles.unactive}`
            }
          >
            <li>
              <span>03</span>TECHNOLOGY
            </li>
          </NavLink>
        </ul>
      </div>
    </header>
  );
};

export default Navigation;
