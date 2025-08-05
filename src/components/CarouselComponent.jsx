import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

// ✅ Import your images
import img1 from "../assets/images/von1.webp";
import img2 from "../assets/images/von9.jpg";
import img3 from "../assets/images/von2.webp";
import img4 from "../assets/images/von8.jpg";
import img5 from "../assets/images/von3.png";
import img6 from "../assets/images/von7.avif";
import img7 from "../assets/images/mu22.jpg";
import img8 from "../assets/images/von6.webp";
import img9 from "../assets/images/von5.png";

// ✅ Images array
const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9];

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
            className="w-full relative 
  h-[300px] sm:h-[350px] md:h-[450px] lg:h-[520px] xl:h-[580px] 2xl:h-[750px]
  pt-[60px] sm:pt-[70px] md:pt-[80px] lg:pt-[90px] xl:pt-[100px] 2xl:pt-[110px]
  pb-[72px] px-4"
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
