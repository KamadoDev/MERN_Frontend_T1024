import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Navigation } from "swiper/modules";
import ProductItem from "../ProductItem";
const RelatedProducts = (props) => {
  return (
    <>
      <div className="d-flex align-items-center mt-5 mb-3 w-100">
        <div className="info w-75">
          <h3 class="mb-0 hd text-uppercase">{props.title}</h3>
        </div>
      </div>
      <div className="product_row relatedProducts w-100 mt-0">
        <Swiper
          slidesPerView={6}
          spaceBetween={5}
          navigation={true}
          // autoplay={{ delay: 2500, disableOnInteraction: false }}
          modules={[Autoplay, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <ProductItem />
          </SwiperSlide>
          <SwiperSlide>
            <ProductItem />
          </SwiperSlide>
          <SwiperSlide>
            <ProductItem />
          </SwiperSlide>
          <SwiperSlide>
            <ProductItem />
          </SwiperSlide>
          <SwiperSlide>
            <ProductItem />
          </SwiperSlide>
          <SwiperSlide>
            <ProductItem />
          </SwiperSlide>
          <SwiperSlide>
            <ProductItem />
          </SwiperSlide>
          <SwiperSlide>
            <ProductItem />
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};

export default RelatedProducts;