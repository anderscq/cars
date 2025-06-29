import "./App.css";
import { useState } from "react";
import Header from "./components/header/Header";
import Sidebar from "./components/sidebar/Sidebar";
import Carousel from "./components/carousel/Carousel";

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  return (
    <>
      <Header />
      <div>
        <button
          className="menu-btn"
          onClick={() => setSidebarOpen(!sidebarOpen)}
        >
          ☰
        </button>
        <Sidebar open={sidebarOpen} />
        <div className="content">
          <Carousel />
        </div>
      </div>
    </>
  );
}

export default App;
