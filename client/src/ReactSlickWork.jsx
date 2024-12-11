import React from "react";
import Slider from "react-slick";
import png1 from './HomeComponents/png1.png'
import png2 from './HomeComponents/png2.png'
import png3 from './HomeComponents/png3.png'
import png4 from './HomeComponents/png4.png'


function Fade() {
  const settings = {
    // dots: true,
    fade: true,
    infinite: true,
    speed: 2000,
    slidesToShow: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    cssEase: "linear",
    slidesToScroll: 1,
    waitForAnimate: false
  };
  return (
    <div className="slider-container">
      <Slider {...settings}>
        
        <div className='bg-gradient-to-l from-[rgb(249,253,255)] to-[rgb(179,217,252)] h-[400px] md:h-[400px] lg:h-[400px]  relative rounded-[10px] overflow-hidden' >
            <img src={png1} alt=""className='h-[400px] ml-[35px] md:h-[320px] lg:h-[350px] md:ml-0 md:mt-[50px] lg:ml-[80px] ' />
            <div className='bg-white h-[80px] w-[190px] relative  bottom-[0px] left-[198px] pt-[25px] pl-[48px]  tracking-wider text-[22px] text-[rgb(12,51,121)] mustslide '>Vin Diesel</div>
        </div>
        
        <div className='bg-gradient-to-l from-[rgb(249,253,255)] to-[rgb(179,217,252)] h-[400px] md:h-[400px] lg:h-[400px]  relative rounded-[10px] overflow-hidden' >
            <img src={png2} alt="" className='h-[400px] ml-[35px] md:h-[320px] lg:h-[350px] md:ml-0 md:mt-[50px] lg:ml-[80px] ' />
            <div  className='bg-white h-[80px] w-[190px] relative  bottom-[0px] left-[198px] pt-[25px] pl-[48px]  tracking-wider text-[22px] text-[rgb(12,51,121)] anotherslider '>Emma Stone</div>
        </div>
        
      </Slider>
    </div>
  );
}

export default Fade;
