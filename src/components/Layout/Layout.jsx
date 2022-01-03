import { useLocation } from "react-router-dom";
import "./layout.css";
import Navigation from "./Navigation";

const Layout = (props) => {
  const path = useLocation().pathname;
  const location = path.split("/")[1];

  return (
    <div className={`backgroundWrapper ${location}`}>
      <Navigation />
      <main>{props.children}</main>
    </div>
  );
};

export default Layout;
