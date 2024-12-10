import { useEffect, useRef } from 'react';
import Flickity from 'flickity';
import 'flickity/dist/flickity.min.css';

export function Carousell() {
  const carouselRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const flkty = new Flickity(carouselRef.current as HTMLDivElement, {
      cellAlign: 'left',
      contain: true,
      autoPlay: true,
    });

    return () => {
      flkty.destroy();
    };
  }, []);
  return (
    <div className="main-carousel " ref={carouselRef}>
      <div className="carousel-cell">
        <div className="d-flex flex-column justify-content-center align-items-center h-100 carousell-cell__container">
          <p className="fs-1 mb-3 text-white">Cook, Dine, and Unwind</p>
          <p className="fs-5 mb-0 text-white">Fully Equipped Kitchen Meets Luxury Living in Your Villa</p>
        </div>
      </div>
      <div className="carousel-cell">
        <div className="d-flex flex-column justify-content-center align-items-center h-100 carousell-cell__container">
          <p className="fs-1 mb-3 text-white">Dive Into Luxury</p>
          <p className="fs-5 mb-0 text-white">Enjoy a Spacious 10 x 5 meters Pool in the Heart of Your Private Retreat</p>
        </div>
      </div>
      <div className="carousel-cell">
        <div className="d-flex flex-column justify-content-center align-items-center h-100 carousell-cell__container">
          <p className="fs-1 mb-3 text-white">Perfectly Positioned</p>
          <p className="fs-5 mb-0 text-white">Just 3-4 km from Downtown, Close Enough for Convenience, Far Enough for Peace</p>
        </div>
      </div>
      <div className="carousel-cell">
        <div className="d-flex flex-column justify-content-center align-items-center h-100 carousell-cell__container">
          <p className="fs-1 mb-3 text-white">Spacious and Serene</p>
          <p className="fs-5 mb-0 text-white">3 Bedrooms, 4 Bathrooms, and All the Comforts of Home</p>
        </div>
      </div>
    </div>
  );
}
