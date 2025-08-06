import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';


function Prct() {
    return (
        <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={50}
            slidesPerView={3}
            navigation
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log('slide change')}

        >
            <SwiperSlide><img src="https://imgs.search.brave.com/CDDvhzV6J8VWNYRes5lFasLXiRupzJrN61LK6_B_jHY/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9keWwz/NDdoaXd2M2N0LmNs/b3VkZnJvbnQubmV0/L2FwcC91cGxvYWRz/LzIwMjMvMDkvU3Rh/ZGl1bV9WMl8xOTgw/JUUyJTgwJThBJUMz/JTk3JUUyJTgwJThB/MTEyOF9UZXh0LXNj/YWxlZC5qcGc" alt="" /></SwiperSlide>
            <SwiperSlide><img src="https://imgs.search.brave.com/CDDvhzV6J8VWNYRes5lFasLXiRupzJrN61LK6_B_jHY/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9keWwz/NDdoaXd2M2N0LmNs/b3VkZnJvbnQubmV0/L2FwcC91cGxvYWRz/LzIwMjMvMDkvU3Rh/ZGl1bV9WMl8xOTgw/JUUyJTgwJThBJUMz/JTk3JUUyJTgwJThB/MTEyOF9UZXh0LXNj/YWxlZC5qcGc" alt="" /></SwiperSlide>
            <SwiperSlide><img src="https://imgs.search.brave.com/CDDvhzV6J8VWNYRes5lFasLXiRupzJrN61LK6_B_jHY/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9keWwz/NDdoaXd2M2N0LmNs/b3VkZnJvbnQubmV0/L2FwcC91cGxvYWRz/LzIwMjMvMDkvU3Rh/ZGl1bV9WMl8xOTgw/JUUyJTgwJThBJUMz/JTk3JUUyJTgwJThB/MTEyOF9UZXh0LXNj/YWxlZC5qcGc" alt="" /></SwiperSlide>
            <SwiperSlide><img src="https://imgs.search.brave.com/CDDvhzV6J8VWNYRes5lFasLXiRupzJrN61LK6_B_jHY/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9keWwz/NDdoaXd2M2N0LmNs/b3VkZnJvbnQubmV0/L2FwcC91cGxvYWRz/LzIwMjMvMDkvU3Rh/ZGl1bV9WMl8xOTgw/JUUyJTgwJThBJUMz/JTk3JUUyJTgwJThB/MTEyOF9UZXh0LXNj/YWxlZC5qcGc" alt="" /></SwiperSlide>
        </Swiper>
    );
};


export default Prct