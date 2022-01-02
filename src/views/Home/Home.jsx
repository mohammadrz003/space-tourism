import { Link } from "react-router-dom";
import styles from "./home.module.css";

const Home = () => {
  return (
    <section className={`${styles.homeContainer}`}>
      <div className={styles.heroData}>
        <h3 className="uppercase font-barlow text-lightblue lg:text-3xl xl:text-4xl tracking-wider">
          SO, YOU WANT TO TRAVEL TO
        </h3>
        <h2
          className={`${styles.homeHeader} uppercase text-white font-bellefair`}
        >
          SPACE
        </h2>
        <p className="font-barlow text-lightblue text-lg tracking-wider leading-loose text-justify">
          Let’s face it; if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit
          back, and relax because we’ll give you a truly out of this world
          experience!
        </p>
      </div>
      <div className={styles.heroExplore}>
        <Link to="destination">
          <button
            className={`${styles.exploreBtn} font-bellefair text-dark text-3xl`}
          >
            EXPLORE
          </button>
        </Link>
      </div>
    </section>
  );
};

export default Home;
