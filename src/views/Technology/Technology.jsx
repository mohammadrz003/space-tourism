import SwiperCore, { Autoplay } from "swiper";
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react/swiper-react";
import "swiper/swiper.min.css";
import "swiper/modules/pagination/pagination.min.css";
import styles from "./technology.module.css";

const Technology = () => {
  SwiperCore.use([Pagination, Autoplay]);
  
  return (
    <section className={styles.technologyContainer}>
      <h3 className="text-center md:text-left font-barlow text-white text-xl md:text-2xl lg:text-3xl tracking-widest uppercase">
        <span className="opacity-25 mr-4">03</span>SPACE LAUNCH 101
      </h3>
      <div className={styles.spaceContainer}>
        <div
          className={`${styles.bulletContainer} py-24 font-bellefair space-y-6`}
        >
          <button className={styles.active}>1</button>
          <button>2</button>
          <button>3</button>
        </div>
        <div className={`${styles.spaceDataContainer} py-24`}>
          <h4 className="text-lightblue uppercase font-barlow tracking-widest">
            THE TERMINOLOGY…
          </h4>
          <h2 className="text-5xl uppercase text-white font-bellefair mt-3">
            LAUNCH VEHICLE
          </h2>
          <p className="text-lightblue font-barlow text-lg leading-loose mt-5">
            A launch vehicle or carrier rocket is a rocket-propelled vehicle
            used to carry a payload from Earth's surface to space, usually to
            Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful
            in operation. Standing 150 metres tall, it's quite an awe-inspiring
            sight on the launch pad!
          </p>
        </div>
        <div className="relative overflow-visible">
          <img
            className={styles.spaceImage}
            src="/assets/technology/image-launch-vehicle-portrait.jpg"
            alt=""
          />
        </div>
      </div>
    </section>
  );
};

export default Technology;
