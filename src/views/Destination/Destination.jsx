import styles from "./destination.module.css";
import { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import data from "../../data.json";
import "react-tabs/style/react-tabs.css";

const Destination = () => {
  const [tabIndex, setTabIndex] = useState(0);

  const planetImgPath = data.destinations[tabIndex].images.webp;

  return (
    <section className={styles.destinationContainer}>
      <h3 className="text-center md:text-left font-barlow text-white text-xl md:text-2xl lg:text-3xl tracking-widest uppercase">
        <span className="opacity-25 mr-4">01</span>Pick your destination
      </h3>
      <div className="flex flex-col lg:flex-row py-10 lg:space-x-28 xl:space-x-40">
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-end items-center">
          <img className={styles.planetImg} src={planetImgPath} alt="" />
        </div>
        <div className="w-full mt-8 lg:w-1/2">
          <Tabs
            selectedIndex={tabIndex}
            onSelect={(tabIndex) => setTabIndex(tabIndex)}
            selectedTabClassName={styles.tabCategory}
          >
            <TabList
              className={`${styles.tabHeader} flex justify-center lg:justify-start font-barlow lg:text-lg xl:text-xl text-lightblue space-x-5`}
            >
              {data.destinations.map((element, index) => {
                return (
                  <Tab key={index} className={styles.eachTab}>
                    {element.name}
                  </Tab>
                );
              })}
            </TabList>
            {data.destinations.map((element, index) => {
              return (
                <TabPanel key={index}>
                  <h2
                    className={`${styles.destinationPlanetName} mt-5 lg:mt-0 text-center lg:text-left text-white font-bellefair uppercase`}
                  >
                    {element.name}
                  </h2>
                  <div className="flex justify-center lg:justify-start">
                    <p className="w-full max-w-lg lg:max-w-none text-center lg:text-left font-barlow text-lightblue text-base tracking-wider">
                      {element.description}
                    </p>
                  </div>
                  <hr className="border-none bg-darkGray h-px my-8" />
                  <ul className="flex flex-col items-center md:flex-row md:justify-center lg:justify-start space-y-5 md:space-y-0 md:space-x-14">
                    <li className="flex flex-col items-center lg:items-start uppercase">
                      <span className="text-lightblue font-barlow text-lg">
                        AVG. DISTANCE
                      </span>
                      <span className="text-white font-bellefair text-2xl">
                        {element.distance}
                      </span>
                    </li>
                    <li className="flex flex-col items-center lg:items-start uppercase">
                      <span className="text-lightblue font-barlow text-lg">
                        Est. travel time
                      </span>
                      <span className="text-white font-bellefair text-2xl">
                        {element.travel}
                      </span>
                    </li>
                  </ul>
                </TabPanel>
              );
            })}
          </Tabs>
        </div>
      </div>
    </section>
  );
};

export default Destination;
