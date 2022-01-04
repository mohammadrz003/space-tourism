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
        <div className={styles.sliderWrapper}>
          <Swiper
            pagination={{ el: ".my-custom-pagination-div", clickable: true }}
            spaceBetween={0}
            slidesPerView={1}
            autoplay={{ delay: 3000 }}
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => console.log(swiper)}
          >
            {data.crew.map((element) => {
              return (
                <SwiperSlide>
                  <div className="w-full flex space-x-10">
                    <div className="w-1/2 flex flex-col justify-center">
                      <h4 className="uppercase text-white opacity-50 text-3xl font-bellefair">
                        {element.role}
                      </h4>
                      <h3 className="mt-4 mb-7 text-white uppercase font-bellefair text-5xl">
                        {element.name}
                      </h3>
                      <p className="text-lightblue tracking-wider">
                        {element.bio}
                      </p>
                      <div className="my-custom-pagination-div mt-12 space-x-4"></div>
                    </div>
                    <div className={`${styles.crewImgWrapper} w-1/2`}>
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
