import styles from "./layout.module.css";
import Navigation from "./Navigation";

const Layout = (props) => {
  return (
    <div className={styles.backgroundWrapper}>
      <Navigation />
      <main>{props.children}</main>
    </div>
  );
};

export default Layout;
