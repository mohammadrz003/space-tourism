import styles from "./navigation.module.css";
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
          <li>
            <span>00</span>HOME
          </li>
          <li>
            <span>01</span>DESTINATION
          </li>
          <li>
            <span>02</span>CREW
          </li>
          <li>
            <span>03</span>TECHNOLOGY
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Navigation;
