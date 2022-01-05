import { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import styles from "./technology.module.css";
import data from "../../data.json";

const Technology = () => {
  const [tabIndex, setTabIndex] = useState(0);

  const spaceImgPath = data.technology[tabIndex].images.portrait;

  return (
    <section className={styles.technologyContainer}>
      <h3 className="text-center md:text-left font-barlow text-white text-xl md:text-2xl lg:text-3xl tracking-widest uppercase">
        <span className="opacity-25 mr-4">03</span>SPACE LAUNCH 101
      </h3>
      <div className={styles.spaceContainer}>
        <Tabs
          className="flex"
          selectedIndex={tabIndex}
          onSelect={(tabIndex) => setTabIndex(tabIndex)}
          selectedTabClassName={styles.bulletButtonActive}
        >
          <TabList
            className={`${styles.bulletContainer} py-24 font-bellefair space-y-6`}
          >
            {data.technology.map((element, index) => {
              return (
                <Tab key={index} className={styles.bulletButton}>
                  {index + 1}
                </Tab>
              );
            })}
          </TabList>

          <div className={`${styles.spaceDataContainer} py-24`}>
            {data.technology.map((element, index) => {
              return (
                <TabPanel>
                  <h4 className="text-lightblue uppercase font-barlow tracking-widest">
                    THE TERMINOLOGY…
                  </h4>
                  <h2 className="text-5xl uppercase text-white font-bellefair mt-3">
                    {element.name}
                  </h2>
                  <p className="text-lightblue font-barlow text-lg leading-loose mt-5">
                    {element.description}
                  </p>
                </TabPanel>
              );
            })}
          </div>

          <div className="relative overflow-visible">
            <img className={styles.spaceImage} src={spaceImgPath} alt="" />
          </div>
        </Tabs>
      </div>
    </section>
  );
};

export default Technology;
