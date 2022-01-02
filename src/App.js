import "./App.css";
import Layout from "./components/Layout/Layout";
import Home from "./views/Home/Home";
import Destination from "./views/Destination/Destination";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="destination" element={<Destination />} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
