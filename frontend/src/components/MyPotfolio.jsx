import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import TotalDistributions from "./TotalDistributions";

const properties = [
  { name: "Mandro Mansion", value: "0.005 Ether", img: '/images/prop1.jpg' },
  { name: "Halbert Avenue", value: "0.076 Ether", img: '/images/prop2.jpg' },
  { name: "Pomona Estate", value: "0.089 Ether", img: '/images/prop3.jpg'},
  { name: "Sunset Villa", value: "0.12 Ether", img: '/images/prop4.jpg' }, // More properties
];

const MyPortfolio = () => {
    // MyPortfolio component is rendered here
  return (
    <div className="bg-white rounded-lg shadow-md p-4 w-full">
      <h3 className="text-lg font-semibold text-gray-700 mb-3">My Portfolio</h3>
      <Swiper
        modules={[Navigation]}
        spaceBetween={10}
        slidesPerView={2} // Show 2 slides at a time
        navigation
        className="w-full"
      >
        {properties.map((property, index) => (
          <SwiperSlide key={index} className="w-1/3">
            <div className="bg-gray-100 rounded-lg p-3 shadow-md">
              <img src={property.img} alt={property.name} className="rounded-md w-full h-20 object-cover" />
              <h4 className="text-xs text-gray-700 mt-2">{property.name}</h4>
              <p className="text-gray-600 text-xs">{property.value}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <TotalDistributions />
    </div>
  );
};

export default MyPortfolio;
