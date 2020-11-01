import React from "react"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import Course from "./Course";

const Tranding = () => {
    return (
        <>
            <div className="container">
                <h4>Tranding on udemy</h4>
                <Swiper
                    spaceBetween={30}
                    slidesPerView={3}>
                    <SwiperSlide><Course /></SwiperSlide>
                    <SwiperSlide><Course /></SwiperSlide>
                    <SwiperSlide><Course /></SwiperSlide>
                    <SwiperSlide><Course /></SwiperSlide>
                </Swiper>
            </div>
        </>
    )
}

export default Tranding;