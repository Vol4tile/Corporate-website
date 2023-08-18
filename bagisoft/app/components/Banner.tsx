'use client'
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Banner = () => {
  return (
    <div className="relative h-96 md:rounded-xl overflow-hidden">
      <Carousel
        autoPlay
        infiniteLoop
        showArrows={false}
        showStatus={false}
        showIndicators={false}
        showThumbs={false}
        interval={3000}
        swipeable={true}
        emulateTouch={true}
      >
        <div className="relative">
          <img src="/slider1.jpg" className="h-96 object-cover" alt="carouselImg" />
          <div className="absolute left-0 top-0 h-full w-full bg-opacity-10 bg-black flex items-center justify-start ">
            <blockquote className="md:text-gray-500 text-lg italic z-10  md:ml-10 ">
              "Müşterilerimize değer veriyor, ihtiyaçlarını anlamak ve karşılamak için çalışıyoruz."
            </blockquote>
          </div>
        </div>
        <div className="relative">
          <img src="/slider2.jpg" className="h-96 object-cover" alt="carouselImg" />
          <div className="absolute left-0 top-0 h-full w-full bg-opacity-10 bg-black flex items-center justify-end ">
            <blockquote className="md:text-gray-500 text-lg italic z-10  md:mr-10 ">
              "Müşterilerimize değer veriyor, ihtiyaçlarını anlamak ve karşılamak için çalışıyoruz."
            </blockquote>
          </div>
        </div>
      </Carousel>
    </div>
  );
};

export default Banner;
