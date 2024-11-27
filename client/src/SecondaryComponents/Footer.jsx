import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLandmark, } from '@fortawesome/free-solid-svg-icons';

import loanpay from './loanpay.png'

function Footer() {
  return (


    <div className='bg-blue-950 h-[300px] relative '>
      
    <main className='loan h-[150px] md:h-[200px] lg:h-[250px]'>
      
    </main>
    <div className='bg-blue-950 h-[1000px] p-3 lg:p-5 grid grid-cols-1 md:grid-cols-4 lg:h-[300px] md:h-[500px] md:grid-rows-2 lg:grid-rows-1 lg:grid-cols-5'>
        <div className=' md:col-span-full lg:col-auto md:mb-3 lg:mb-3'>
          <FontAwesomeIcon icon={faLandmark} className=' shadow-lg text-white mb-2 lg:mt-14 mt-8 text-9xl lg:text-9xl md:mt-4 md:text-[180px] ml-28 md:ml-72 lg:ml-16 lg:mb-3'/>
          <h1 className='font-bold text-3xl text-white lg:text-xl md:text-4xl md:text-center text-center '>BIXBASE LOAN APP</h1></div>
        <div className='-mt-3'>
          <h1 className='mt-3 font-bold text-[10px] text-white lg:text-xl mb-3 ml-2 lg:ml-7 lg:mt-14'>ABOUT US</h1>
          <section className='text-white text-xs mb-3 ml-2 lg:ml-7'>✔ Our Company</section>
          <section className='text-white text-xs mb-3 ml-2 lg:ml-7'>✔ Our Mission</section>
          <section className='text-white text-xs mb-3 ml-2 lg:ml-7'>✔ Diversity</section>
          <section className='text-white text-xs mb-3 ml-2 lg:ml-7'>✔ Leadership</section>
          <section className='text-white text-xs mb-3 ml-2 lg:ml-7'>✔ Scholarship</section>
        </div>
        <div className='-mt-3'>
          <h1 className='mt-3 font-bold text-[10px] lg:text-xl text-white mb-3 ml-1 lg:mt-14'> FOR CONSUMER</h1>
          <section className='text-white text-xs mb-3 ml-2 lg:ml-1'>✔ Corporate Finance</section>
          <section className='text-white text-xs mb-3 ml-2 lg:ml-1'>✔ Investor Relations</section>
          <section className='text-white text-xs mb-3 ml-2 lg:ml-1'>✔ Social Impact</section>
          <section className='text-white text-xs mb-3 ml-2 lg:ml-1'>✔ Customers FAQS</section>
          <section className='text-white text-xs mb-3 ml-2 lg:ml-1'>✔ Careers</section>
        </div>
        <div className='-mt-3'>
          <h1 className='mt-3 font-bold text-[10px] text-white lg:text-xl mb-3 ml-2 lg:mt-14'>INVESTOR</h1>
          <section className='text-white text-xs mb-3 ml-2 lg:ml-2'>✔ Financial Information</section>
          <section className='text-white text-xs mb-3 ml-2 lg:ml-2'>✔ Annual Report</section>
          <section className='text-white text-xs mb-3 ml-2 lg:ml-2'>✔ Proxy Statement</section>
          <section className='text-white text-xs mb-3 ml-2 lg:ml-2'>✔ corporate Governance</section>
          <section className='text-white text-xs mb-3 ml-2 lg:ml-2'>✔ News and Social Media</section>
        </div>
        <div className='-mt-3'>
          <h1 className='mt-2 font-bold text-[10px] text-white lg:text-xl mb-3 ml-2 lg:mt-14'>CONTACT US</h1>
        <section className='text-white text-xs mb-3 ml-2 lg:ml-2'>✔ Terms</section>
        <section className='text-white text-xs mb-3 ml-2 lg:ml-2'>✔ Privacy</section>
        <section className='text-white text-xs mb-3 ml-2 lg:ml-2'>✔ Notice at Collection</section>
        <section className='text-white text-xs mb-3 ml-2 lg:ml-2'>✔ Accesibility</section>
        <section className='text-white text-xs mb-3 ml-2 lg:ml-2'>✔ Site Feedback</section>
        </div> 

    </div>
  </div>  
  )
}

export default Footer
