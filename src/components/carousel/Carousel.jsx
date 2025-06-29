import { useState, useEffect } from "react";
import "./Carousel.css";

const items = [
  {
    title: "Chevrolet",
    img: "https://via.placeholder.com/400x200?text=Chevrolet",
  },
  {
    title: "Volkswagen",
    img: "https://via.placeholder.com/400x200?text=Volkswagen",
  },
  { title: "Fiat", img: "https://via.placeholder.com/400x200?text=Fiat" },
  { title: "Toyota", img: "https://via.placeholder.com/400x200?text=Toyota" },
];

function Carousel() {
  const [index, setIndex] = useState(0);

  const prev = () => setIndex((i) => (i === 0 ? items.length - 1 : i - 1));
  const next = () => setIndex((i) => (i === items.length - 1 ? 0 : i + 1));

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((i) => (i === items.length - 1 ? 0 : i + 1));
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="carousel">
      <button className="carousel-btn" onClick={prev}>
        &lt;
      </button>
      <div className="carousel-item">
        <img src={items[index].img} alt={items[index].title} />
        <h2>{items[index].title}</h2>
      </div>
      <button className="carousel-btn" onClick={next}>
        &gt;
      </button>
    </div>
  );
}

export default Carousel;
