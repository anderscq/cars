import "./App.css";
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/header/Header";
import Sidebar from "./components/sidebar/Sidebar";
import Carousel from "./components/carousel/Carousel";
import List from "./pages/manufacturers/List";

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  return (
    <BrowserRouter>
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
          <Routes>
            <Route path="/" element={<Carousel />} />
            <Route path="/manufacturers" element={<List />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
