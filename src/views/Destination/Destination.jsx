import styles from "./destination.module.css";
import moon from "../../assets/destination/image-moon.webp";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import data from "../../data.json";
import "react-tabs/style/react-tabs.css";

const Destination = () => {
  return (
    <section className={styles.destinationContainer}>
      <h3 className="font-barlow text-white text-3xl tracking-widest uppercase">
        <span className="opacity-25 mr-4">01</span>Pick your destination
      </h3>
      <div className="flex py-10 lg:space-x-28 xl:space-x-40">
        <div className="w-1/2 flex justify-end items-center">
          <img className={styles.planetImg} src={moon} alt="" />
        </div>
        <div className="w-1/2">
          <Tabs selectedTabClassName={styles.tabCategory}>
            <TabList
              className={`${styles.tabHeader} font-barlow lg:text-lg xl:text-xl text-lightblue space-x-5`}
            >
              {data.destinations.map((element) => {
                return <Tab className={styles.eachTab}>{element.name}</Tab>;
              })}
            </TabList>
            {data.destinations.map((element) => {
              return (
                <TabPanel>
                  <h2
                    className={`${styles.destinationPlanetName} text-white font-bellefair uppercase`}
                  >
                    {element.name}
                  </h2>
                  <p className="font-barlow text-lightblue text-base tracking-wider">
                    {element.description}
                  </p>
                  <hr className="border-none bg-darkGray h-px my-8" />
                  <ul className="flex space-x-14">
                    <li className="flex flex-col uppercase">
                      <span className="text-lightblue font-barlow text-lg">
                        AVG. DISTANCE
                      </span>
                      <span className="text-white font-bellefair text-2xl">
                        {element.distance}
                      </span>
                    </li>
                    <li className="flex flex-col uppercase">
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
