// import Swiper from "swiper";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Slider = () => {
    
    const images = [
      {url:"./Images/SliderImages/carousal1.jpeg"},
      {url:"./Images/SliderImages/carousal2.jpeg"},
      {url:"./Images/SliderImages/carousal3.jpeg"}
    ];
  

      
        return (
            <div>
            <Swiper
            modules={[Navigation, Pagination]}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true,type:"bullets" }}
            
          >
            {images.map((image, index) => (
              <SwiperSlide key={index}>
                <img src={image.url} alt={image.alt || `Slide ${index + 1}`} />
              </SwiperSlide>
            ))}
          </Swiper>
          
          </div>
    );
  };
  
  export default Slider;
  