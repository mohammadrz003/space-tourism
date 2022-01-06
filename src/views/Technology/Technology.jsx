import { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import styles from "./technology.module.css";
import data from "../../data.json";

const Technology = () => {
  const [tabIndex, setTabIndex] = useState(0);

  const spaceImgMobilePath = data.technology[tabIndex].images.landscape;
  const spaceImgPath = data.technology[tabIndex].images.portrait;

  return (
    <section className={styles.technologyContainer}>
      <h3 className="text-center md:px-8 lg:px-0 md:text-left font-barlow text-white text-xl md:text-2xl lg:text-3xl tracking-widest uppercase">
        <span className="opacity-25 mr-4">03</span>SPACE LAUNCH 101
      </h3>
      <div className="lg:hidden w-full py-8 md:py-14">
        <img
          className="w-full h-auto object-cover"
          src={spaceImgMobilePath}
          alt=""
        />
      </div>
      <div className={styles.spaceContainer}>
        <Tabs
          className="flex flex-col lg:flex-row"
          selectedIndex={tabIndex}
          onSelect={(tabIndex) => setTabIndex(tabIndex)}
          selectedTabClassName={styles.bulletButtonActive}
        >
          <TabList
            className={`${styles.bulletContainer} lg:py-24 font-bellefair space-x-4 lg:space-x-0 lg:space-y-6`}
          >
            {data.technology.map((element, index) => {
              return (
                <Tab key={index} className={styles.bulletButton}>
                  {index + 1}
                </Tab>
              );
            })}
          </TabList>

          <div className={`${styles.spaceDataContainer} py-7 px-8 lg:px-0 lg:py-24`}>
            {data.technology.map((element, index) => {
              return (
                <TabPanel>
                  <h4 className="text-center lg:text-left text-lightblue uppercase font-barlow tracking-widest">
                    THE TERMINOLOGY…
                  </h4>
                  <h2 className="text-center lg:text-left text-2xl lg:text-5xl uppercase text-white font-bellefair mt-3">
                    {element.name}
                  </h2>
                  <p className="text-center lg:text-left text-lightblue font-barlow text-base tracking-wider lg:text-lg leading-relaxed lg:leading-loose mt-5">
                    {element.description}
                  </p>
                </TabPanel>
              );
            })}
          </div>

          <div className="hidden lg:inline relative overflow-visible">
            <img className={styles.spaceImage} src={spaceImgPath} alt="" />
          </div>
        </Tabs>
      </div>
    </section>
  );
};

export default Technology;
