"use client";
// UI LIBRARY , IMG
import React from "react";
import slide1 from "../../../public/img/slide1.jpg";
import slide2 from "../../../public/img/slide2.jpg";
import slide3 from "../../../public/img/slide3.jpg";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { BiArrowBack } from "react-icons/bi";
import Image from "next/image";
import Link from "next/link";
// -----------------------------------------------------

// API BANNERS
const banner = [
  { id: 1, alt: "bake", img: slide1, title: "fresh bake" },
  { id: 3, alt: "bake", img: slide3, title: "delicious sweets" },
];
// ----------------------------------------------------------
const HeroSection = () => {
  return (
    <div className="relative text-white text-[20px] w-full max-w-[1360px]  mx-auto">
      <Carousel
        className="slider"
        autoPlay={true}
        infiniteLoop={true}
        showThumbs={false}
        showIndicators={false}
        showStatus={false}
        renderArrowPrev={(clickHandler, hasPrev) => (
          <div
            onClick={clickHandler}
            className="absolute right-[31px] md:right-[51px] bottom-0 w-[30px] md:w-[50px] h-[30px] md:h-[50px] bg-black z-10 flex items-center justify-center cursor-pointer hover:opacity-90"
          >
            <BiArrowBack className="text-sm md:text-lg" />
          </div>
        )}
        renderArrowNext={(clickHandler, hasNext) => (
          <div
            onClick={clickHandler}
            className="absolute right-0 bottom-0 w-[30px] md:w-[50px] h-[30px] md:h-[50px] bg-black z-10 flex items-center justify-center cursor-pointer hover:opacity-90"
          >
            <BiArrowBack className="rotate-180 text-sm md:text-lg" />
          </div>
        )}
      >
        {/* MAPPING BANNER IN SLIDER */}
        {banner.map((item) => {
          return (
            <Link href={"/products"} key={item.id} className="w-full h-full ">
              <Image
                src={item.img}
                alt={item.alt}
                style={{ width: "100%", height: "100%" }}
                className="aspect-[16/10] md:aspect-auto object-cover"
              />
              <div className="px-[15px] md:px-[40px] py-[10px] md:py-[25px] font-oswald bg-white absolute bottom-[25px] md:bottom-[75px] left-0 text-black/[0.9] text-[15px] md:text-[30px] uppercase font-medium cursor-pointer hover:text-[#ef6565] hover:opacity-90 transition-all duration-500 rounded-r-sm">
                {item.title}
              </div>
            </Link>
          );
        })}
      </Carousel>
    </div>
  );
};
export default HeroSection;
