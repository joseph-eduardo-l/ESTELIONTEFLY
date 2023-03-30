import { Box, Flex } from "@chakra-ui/react"
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Navigation, Pagination, Autoplay } from 'swiper';

export const Prices = () => {
    return (
        <Box maxW='1280px' w='90%' m='0 auto'>
            <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                navigation
                slidesPerView={3}
                spaceBetween={70}
                // autoplay={{
                //      delay: 8000,
                //      disableOnInteraction: false,
                // }}
                scrollbar={{ draggable: true }}
            >
                <SwiperSlide>
                    <Flex w='420px' h='1400px' bgColor='red'>
                    </Flex>
                </SwiperSlide>
                <SwiperSlide>
                    <Flex w='420px' h='1400px' bgColor='red'>
                    </Flex>
                </SwiperSlide>
                <SwiperSlide>
                    <Flex w='420px' h='1400px' bgColor='red'>
                    </Flex>
                </SwiperSlide>
            </Swiper>
        </Box>
    )
}
