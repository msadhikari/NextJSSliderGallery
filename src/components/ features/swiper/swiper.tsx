"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Navigation } from "swiper/modules";
import { BREAKPOINTS, getSwiperBreakpoints, casinoSlides } from "@/lib/fetcher";
import { Typography, Button, Box } from "@mui/material";
import { FaCircleArrowLeft, FaCircleArrowRight } from "react-icons/fa6";
import Image from "next/image";
import Link from "next/link";
import useIsMobile from "@/hooks/useSwiper";
import "../../../styles/carousel-styles.css";
import { CarouselProps } from "@/types/carousel";


const Carousel: React.FC<CarouselProps> = ({ header, buttonText, buttonHref }) => {
  const isMobile = useIsMobile(BREAKPOINTS.xs);
  const swiperBreakpoints = getSwiperBreakpoints();

  return (
    <>
      <Box className="carousel">
        <Box className="carousel-header">
          <Typography variant="h5" className="pb-2 carousel-title">
            {header}
          </Typography>
          <Link href={buttonHref} className="carousel__link" style={{ display: 'flex', alignItems: 'center' }}>
            {buttonText}
            <FaCircleArrowRight className="carousel-linkIcon" />
          </Link>
        </Box>
      </Box>

      <Swiper
        pagination={{
          clickable: true,
          el: ".swiper-pagination",
        }}
        breakpoints={swiperBreakpoints}
        modules={!isMobile ? [Pagination, Navigation] : [Navigation]}
        className="mySwiper"
        navigation={
          !isMobile && {
            nextEl: ".image-swiper-arrow-next",
            prevEl: ".image-swiper-arrow-prev",
            disabledClass: "swiper-arrow-disabled",
          }
        }
      >
        {casinoSlides.map((slide, index) => (
          <SwiperSlide key={slide.id}>
            <Box className="card-container">
              <Image
                src={slide.imagePath}
                width={300}
                className="box-image"
                height={300}
                alt={slide.description}
                priority
              />
              <Box className="card-container-details">
                <Box className="card-container-badge">{slide.badge}</Box>
                <Typography variant="body2" className="card-container-name">
                  {slide.activityName}
                </Typography>
              </Box>
            </Box>
          </SwiperSlide>
        ))}
        <Box>
          {!isMobile && (
            <Box className="carousel-controls">
              <Button className="image-swiper-arrow-prev">
                <FaCircleArrowLeft />
              </Button>
              <div className="swiper-pagination carousel-pagination"></div>
              <Button className="image-swiper-arrow-next">
                <FaCircleArrowRight />
              </Button>
            </Box>
          )}
        </Box>

      </Swiper>
    </>
  );
};

export default Carousel;
