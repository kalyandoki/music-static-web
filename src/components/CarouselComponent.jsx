import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

// ✅ Import your images
import img1 from "../assets/images/mu4.jpeg";
import img2 from "../assets/images/mu3.jpg";
import img4 from "../assets/images/mu2.webp";
import img3 from "../assets/images/mu1.jpeg";
import img5 from "../assets/images/mu6.webp";
import img6 from "../assets/images/hero-music.jpg";

// ✅ Images array
const images = [img1, img2, img4, img5, img6, img3];

const CarouselComponent = () => {
  return (
    <div className="max-w-8xl mx-auto">
      {/* Carousel */}
      <Carousel
        showArrows={false}
        autoPlay
        infiniteLoop
        interval={2000}
        transitionTime={600}
        showThumbs={false}
        showStatus={false}
        centerMode={true}
        centerSlidePercentage={80}
        swipeable
        emulateTouch
        showIndicators
        dynamicHeight={false}
      >
        {images.map((img, index) => (
          <div
            key={index}
            className="w-full h-[300px] pb-18 pl-4 pr-4 pt-15 md:pt-20 sm:h-[300px] md:h-[400px] lg:h-[450px] relative"
          >
            <img
              src={img}
              alt={`Slide ${index + 1}`}
              className="w-full h-full object-cover rounded-4xl transition-transform duration-500 ease-in-out hover:scale-105"
            />
          </div>
        ))}
      </Carousel>

      {/* Custom dot styling */}
      <style>
        {`
        .carousel .control-dots {
        position: absolute;
        bottom: 20px;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        list-style: none;
        margin: 0;
        padding: 0;
        z-index: 20;
        }

        .carousel .control-dots .dot {
        background-color: #ffffff !important;
        width: 10px;
        height: 10px;
        border-radius: 50%;
        margin: 0 5px;
        opacity: 0.5;
        transition: all 0.3s ease;
        }

        .carousel .control-dots .dot.selected {
        background-color: #ffffff !important;
        opacity: 1;
        transform: scale(1.2);
        }

        .carousel .slide {
        transform: scale(0.90);
        transition: transform 0.5s ease-in-out;
        opacity: 0.7;
        }

        .carousel .slide.selected {
        transform: scale(1.05);
        opacity: 1;
        z-index: 10;
        }
  `}
      </style>
    </div>
  );
};

export default CarouselComponent;
