import styles from "./navigation.module.css";
import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/shared/logo.svg";
import hamburgetIcon from "../../assets/shared/icon-hamburger.svg";
import closeIcon from "../../assets/shared/icon-close.svg";
import { useState } from "react";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuOpenStyle = {
    right: isMenuOpen ? "0" : "-100%",
    transition: "500ms ease all"
  };

  const menuStatusHandler = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={styles.header}>
      <div className={styles.logoPart}>
        <div className={styles.logoPartInbox}>
          <img src={logo} alt="" />
        </div>
        <button
          onClick={menuStatusHandler}
          className={`${styles.hamburgetBtn}`}
        >
          <img src={`${isMenuOpen ? closeIcon : hamburgetIcon}`} alt="" />
        </button>
      </div>
      <div style={menuOpenStyle} className={`${styles.navigatePart}`}>
        <ul
          className={`${styles.navgitationList} space-y-5 md:space-y-0 md:space-x-10`}
        >
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
