import React, { useState, useEffect } from "react";
import "./explore.scss";
import axios from "axios";
import google from "../../assets/google.svg";
import { Virtual, Navigation, Pagination, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const Explore = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    axios
      .get("https://api.escuelajs.co/api/v1/categories")
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, []);


  return (
    <div className="explore">
      <div className="explore__top container">
        <p>Popular tech companies who are seeking talents in our website</p>
        <div className="explore__top__cards">
          <img width={122} src={google} alt="" />
          <img width={122} src={google} alt="" />
          <img width={122} src={google} alt="" />
          <img width={122} src={google} alt="" />
          <img width={122} src={google} alt="" />
        </div>
      </div>
      <div className="explore__bottom container">
        <div className="explore__bottom__header">
          <h1>Explore by category </h1>
        </div>

        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          loop={true}
          pagination={{
            clickable: true,
          }}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 4,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 5,
              spaceBetween: 50,
            },
          }}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper explore__bottom__body"
        >
          {data?.map((el) => (
            <SwiperSlide key={el.id}>
              <div className="explore__bottom__body__card">
                <img width={25} src={el.image} alt="" />
                <h3>{el.name}</h3>
                <p>237 Jobs</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Explore;
