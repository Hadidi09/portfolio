import SwiperCore, { Navigation, Pagination, Scrollbar, A11y, Virtual, Zoom } from 'swiper';
import { Swiper, SwiperSlide } from "swiper/react";


import Image from 'next/image'
import raquette from '../public/test-maquette.png'
import Nature from '../public/nature.jpg';
import Dev from "../public/dev.png";
import CV from "../public/cvtech.png";
// Import Swiper styles



// import Swiper core and required modules
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Virtual, Zoom]);

// install Swiper modules



const Carousel = () => {
    return (
        <Swiper
        spaceBetween={5}
        slidesPerView={2}
        navigation={true}
        pagination={{ type: 'progressbar'} }
        scrollbar={{ draggable: true }}  
        onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log('slide change')}
            className="swiper-container flex justify-center items-center overflow-hidden"
        >
            <SwiperSlide className="w-1/2">
                <Image src={raquette} alt="livre" width={500} height={400} quality={100} className=" rounded-3xl   object-cover " />
            </SwiperSlide>
            <SwiperSlide className="w-1/2">
                <Image src={Nature} alt="livre" width={500} height={400}  quality={100} className=" rounded-3xl   object-cover " />
            </SwiperSlide>
            <SwiperSlide className="w-1/2">
                <Image src={Dev} alt="livre" width={500} height={400}  quality={100} className=" rounded-3xl   object-cover " />
            </SwiperSlide>
            <SwiperSlide className="w-1/2">
                <Image src={CV} alt="livre" width={500} height={400}  quality={100} className=" rounded-3xl   object-cover " />
            </SwiperSlide>
       
      </Swiper>
      )
};

export default Carousel;