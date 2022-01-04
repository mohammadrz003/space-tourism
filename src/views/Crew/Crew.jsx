import SwiperCore, { Autoplay } from "swiper";
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react/swiper-react";
import "swiper/swiper.min.css";
import "swiper/modules/pagination/pagination.min.css";
import styles from "./crew.module.css";
import data from "../../data.json";

const Crew = () => {
  SwiperCore.use([Pagination, Autoplay]);

  return (
    <section className={styles.crewContainer}>
      <div className={styles.mainContainer}>
        <h3 className="text-center md:text-left font-barlow text-white text-xl md:text-2xl lg:text-3xl tracking-widest uppercase">
          <span className="opacity-25 mr-4">02</span>Meet your crew
        </h3>
        <div className={`${styles.sliderWrapper} mt-8 lg:mt-0`}>
          <Swiper
            pagination={{ el: ".my-custom-pagination-div", clickable: true }}
            spaceBetween={0}
            slidesPerView={1}
            autoplay={{ delay: 3000 }}
          >
            {data.crew.map((element, index) => {
              return (
                <SwiperSlide key={index}>
                  <div className="w-full flex flex-col-reverse md:flex-col lg:flex-row lg:space-x-10">
                    <div className="w-full lg:w-1/2 flex flex-col justify-center">
                      <h4 className="mt-8 lg:mt-0 text-center lg:text-left uppercase text-white opacity-50 md:text-2xl lg:text-3xl font-bellefair">
                        {element.role}
                      </h4>
                      <h3 className="text-center lg:text-left mt-2 mb-4 lg:mt-4 lg:mb-7 text-white uppercase font-bellefair text-2xl md:text-4xl lg:text-5xl">
                        {element.name}
                      </h3>
                      <p className="text-center lg:text-left text-lightblue lg:tracking-wider">
                        {element.bio}
                      </p>
                      <div className="my-custom-pagination-div flex justify-center lg:justify-start mt-12 space-x-4"></div>
                    </div>
                    <div className={`${styles.crewImgWrapper} w-full md:mt-12 lg:mt-0 lg:w-1/2`}>
                      <img src={element.images.webp} alt="" />
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Crew;
