import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick"

import Scroll from '../HomeComponents/Scroll';



import loan3 from './loan3.jpg'

import team1 from './team1.jpg'
import team2 from './team2.jpg'
import team3 from './team3.jpg'
import team4 from './team4.jpg'
import team5 from './team5.jpg'
import team6 from './team6.jpg'






function About() {

  const settings = {
    autoplay: true,
    autoplaySpeed: 5000, 
    // dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (

        <> 

      <main className='pg grid justify-center items-center h-[250px] mt-10 mb-1'>
        <h2 className='text-xl md:text-2xl lg:text-4xl font-bold text-white pt-7'>ABOUT US</h2>
        <div className='flex justify-center items-center gap-1'>
        <h2 className='text-blue-400'>Home /</h2><h2 className='text-white'> About</h2>
        </div>
      </main>

        <div className='mb-8 gap-1 h-[480px] md:h-[380px] lg:h-[370px] mt-10 grid grid-cols-1 md:grid-cols-2'>
            <section className=''>  
              <h1 className='pt-6 ml-4 text-xl mb-3 text-black'>OUR ABOUT PAGE</h1>
              <h2 className='ml-5 mr-2 text-justify text-[17px] text-black'>Welcome to Bitxbase Loan, where we make borrowing simple, secure, and tailored to your needs. We believe in empowering our clients with transparent, accessible loan options that help turn goals into reality. Whether you’re looking to finance a new home, start a business, or consolidate debt, our team is dedicated to finding the right solution for you.</h2>
            </section>
            <section>
              <img className='h-full w-[100%] lg:h-[80%] lg:w-full' src={loan3}/>
            </section>
        </div>

        <div className='h-[250px] md:h-[300px] lg:h-[100px] lg:mb-[480px] mb-40 grid grid-cols-1 md:grid-cols-1 lg:grid-cols-[60%,40%]'>
            <section className=''>
                <div className='p-2'>
                <Slider {...settings}>
                  {/* <div>
                    <img className='md:h-[150%] w-[150%] lg:h-[100%] lg:w-[100%] peer' src={team1} />
                    <button className='w-64 bg-slate-50 p-3 lg:text-xl text-xl peer-hover:bottom-2 absolute bottom-[-50px] font-bold transition-all duration-700'>OUR TEAM</button>
                  </div> */}
                  <div>
                    <img className='md:h-[150%] w-[150%] lg:h-[100%] lg:w-[100%] peer' src={team2} />
                    <button className='w-64 bg-slate-50 p-3 lg:text-xl text-xl peer-hover:bottom-2 absolute bottom-[-50px] font-bold transition-all duration-700'>OUR TEAM</button>
                  </div>
                  <div>
                    <img className='md:h-[150%] w-[150%] lg:h-[100%] lg:w-[100%] peer' src={team3} />
                    <button className='w-64 bg-slate-50 p-3 lg:text-xl text-xl peer-hover:bottom-2 absolute bottom-[-50px] font-bold transition-all duration-700'>OUR TEAM</button>
                  </div>
                  <div>
                    <img className='md:h-[150%] w-[150%] lg:h-[100%] lg:w-[100%] peer' src={team4} />
                    <button className='w-64 bg-slate-50 p-3 lg:text-xl text-xl peer-hover:bottom-2 absolute bottom-[-50px] font-bold transition-all duration-700'>OUR TEAM</button>
                  </div>
                  <div>
                    <img className='md:h-[150%] w-[150%] lg:h-[100%] lg:w-[100%] peer' src={team5} />
                    <button className='w-64 bg-slate-50 p-3 lg:text-xl text-xl peer-hover:bottom-2 absolute bottom-[-50px] font-bold transition-all duration-700'>OUR TEAM</button>
                  </div>
                  <div>
                    <img className='md:h-[150%] w-[150%] mb-3 lg:h-[100%] lg:w-[100%] peer' src={team6} />
                    <button className='w-64 bg-slate-50 p-3 lg:text-xl text-xl peer-hover:bottom-2 absolute bottom-[-50px] font-bold transition-all duration-700'>OUR TEAM</button>
                  </div>
                  </Slider>
                </div>
            </section>
            <section className=''>
                <h1 className='font-semibold text-xs pt-16 ml-2 md:text-[15px] lg:text-xl'>WHO WE ARE</h1>
                <h2 className='font-bold text-xs md:text-xl lg:text-xl ml-3 text-[rgb(34,69,133)] mb-4'>Provide Excellent service</h2>
                <h2 className='ml-2 mr-3 text-justify text-xs md:text-[15px] lg:text-xl'>At BitxBase Loan Company, we pride ourselves on providing exceptional loan services tailored to meet the unique needs of each client. With a focus on transparency, flexibility, and personal support, we strive to make borrowing an empowering experience, not just a transaction. Our team of dedicated professionals brings years of industry expertise to the table, ensuring you receive top-quality guidance, competitive rates, and customized solutions.</h2>
            </section>
        </div>

        <div className='bg-white h-fit mt-[190px] lg:mt-16 grid grid-cols-1 lg:grid-cols-2'>
        
        <div className='grid grid-cols-1 bg-gray-500 h-fit'>
          <div className='bg-white h-[225px] md:h-[250px] lg:h-[350px]'>
            <p className='text-[rgb(147,150,170)] text-[20px] font-semibold tracking-wider ml-[10px] lg:ml-[70px] mb-[20px]'>OUR MISSION</p>
            <p className='font-semibold text-[25px] md:text-[30px] lg:text-[35px] text-[rgb(12,51,121)] ml-[10px] lg:ml-[70px] w-[350px] md:w-[400px] lg:w-[450px] mb-[20px]'>Helping Find Solutions For Customers Since 1990</p>
            <p className='text-[rgb(147,150,154)] ml-[10px] lg:ml-[70px] pr-[5px] md:w-[650px] lg:w-[360px] leading-[20px]'>Delivering reliable, customized financial solutions for over 30 years. We're here to help you make informed decisions and achieve your dreams.</p>
          </div>
          
          
          <div className='bg-white'>
            {/* <div className='bg-gradient-to-l from-[rgb(249,253,255)] to-[rgb(220,235,252)] py-[40px] px-[45px]'>1600</div>
            <div className='bg-gradient-to-l from-[rgb(249,253,255)] to-[rgb(220,235,252)] py-[40px] px-[45px] mt-[5px]'>1600</div>
            <div className='bg-gradient-to-l from-[rgb(249,253,255)] to-[rgb(220,235,252)] py-[40px] px-[45px] mt-[5px]' >1600</div> */}

            <Scroll/>
          </div>
        </div>
        
        
        <div className='bg-white h-fit'>
          <img src="https://demo.strongtheme.com/americancredit/wp-content/uploads/sites/4/2021/06/amecreho017-800x533.png" />
          <img src="https://demo.strongtheme.com/americancredit/wp-content/uploads/sites/4/2021/06/Bbb_logo_PNG1-800x409.png" className='relative w-[200px] md:w-[400px] lg:w-[350px] bottom-[75px] md:bottom-[150px] lg:bottom-[130px] left-[-5px] md:left-[-19px] lg:left-[-10px]'/>
        </div>
      </div>
        </>
  )
}

export default About
