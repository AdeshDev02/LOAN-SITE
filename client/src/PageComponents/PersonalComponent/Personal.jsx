import React from 'react'

import prs from './prs.jpg'
import { Link } from 'react-router-dom'

function Personal() {
  return (
    <>
      <main className='pg grid justify-center items-center h-[250px] mt-10 mb-1'>
          <h2 className='text-xl md:text-2xl lg:text-4xl font-bold text-white pt-7'>Personal Page</h2>
          <div className='flex justify-center items-center gap-1'>
          <h2 className='text-blue-400'>Home / Page /</h2><h2 className='text-white'> Personal</h2>
          </div>
      </main>

    <main className='h-[700px] md:h-[700px] lg:h-[660px] lg:ml-10 lg:mr-10 rounded-lg grid grid-rows-[70%,30%] md:grid-cols-2 lg:grid-cols-2'>
      <div className='bg-blue-600'>
        <h1 className='text-xs md:text-[15px] lg:text-3xl font-bold mt-8 md:mt-16 ml-6 mb-5'>Accept Credit for Personal Loan</h1>
        <h1 className='text-[10px] md:text-[15px] ml-6 mr-6 text-justify mb-5'>When applying for or managing a personal loan, understanding the concept of accepting credit is crucial. This involves evaluating your creditworthiness and understanding how lenders assess your ability to repay the loan. Below is an overview of the key aspects related to accepting credit for a personal loan.</h1>
        <div className='md:grid md:grid-cols-2'>
          <div>
          <div className='flex ml-6'>
                <img src="https://demo.strongtheme.com/americancredit/wp-content/uploads/sites/4/2021/06/ameioc07.png" className='w-[40px] h-[40px] md:w-[30px] md:h-[30px] lg:w-[40px] lg:h-[40px] mt-[20px] md:mt-[30px] cursor-pointer'/>
                <p className='text-[15px] md:text-xs lg:text-[20px] font-bold text-white  mt-[15px] md:mt-[25px] ml-3 md:ml-2 lg:mt-6 lg:ml-6 cursor-pointer'>Loan up to</p>
              </div>
              <p className='text-[15px] md:text-xs lg:text-[15px] ml-[80px] md:ml-[60px] lg:ml-[85px] -mt-3 text-white cursor-pointer mb-5'>80% and $500,000</p> 
          </div>
          <div>
            <div className='flex ml-6'>
                  <img src="https://demo.strongtheme.com/americancredit/wp-content/uploads/sites/4/2021/06/ameioc07.png" className='w-[40px] h-[40px] md:w-[30px] md:h-[30px] lg:w-[40px] lg:h-[40px] mt-2 md:mt-[30px] cursor-pointer'/>
                  <p className='text-[15px] md:text-xs lg:text-[20px] font-bold text-white  md:mt-[25px] ml-3 md:ml-2 lg:mt-6 lg:ml-6 cursor-pointer'>Low Rates</p>
                </div>
                <p className='text-[15px] md:text-xs lg:text-[15px] ml-[80px] md:ml-[60px] lg:ml-[85px] -mt-2 text-white cursor-pointer mb-5'>Starting 9% 12-60 months </p>
          </div>
          <div>
              <div className='flex ml-6'>
                    <img src="https://demo.strongtheme.com/americancredit/wp-content/uploads/sites/4/2021/06/ameioc07.png" className='w-[40px] h-[40px] md:w-[30px] md:h-[30px] lg:w-[40px] lg:h-[40px] mt-2 md:mt-[30px] cursor-pointer'/>
                    <p className='text-[15px] md:text-xs lg:text-[20px] font-bold text-white md:mt-[25px] ml-3 md:ml-2 lg:mt-6 lg:ml-6 cursor-pointer'>Quick Approval</p>
                  </div>
                  <p className='text-[15px] md:text-xs lg:text-[15px] ml-[80px] md:ml-[60px] lg:ml-[85px] -mt-2 text-white cursor-pointer mb-5'>1 - 2 days</p>  

          </div>
          <div>
              <div className='flex ml-6'>
                      <img src="https://demo.strongtheme.com/americancredit/wp-content/uploads/sites/4/2021/06/ameioc07.png" className='w-[40px] h-[40px] md:w-[30px] md:h-[30px] lg:w-[40px] lg:h-[40px] mt-2 md:mt-[30px] cursor-pointer'/>
                      <p className='text-[15px] md:text-xs lg:text-[20px] font-bold text-white md:mt-[25px] ml-3 md:ml-2 lg:mt-6 lg:ml-6 cursor-pointer'>Online Funding</p>
                    </div>
                    <p className='text-[15px] md:text-xs lg:text-[15px] ml-[80px] md:ml-[60px] lg:ml-[85px] -mt-2 text-white cursor-pointer'>Easy Process</p>  

          </div>


        </div>
      </div>
      <div className='bg-blue-300'>
        <h1 className='text-center md:mt-40 mt-10 font-bold text-xl md:text-2xl mb-5'>Personal Loan</h1>
        <button className='bg-blue-600 text-[15px] border-[2px] ml-[100px] md:ml-[90px] lg:ml-[210px] w-52 p-3 font-bold rounded-md transition-all duration-700 hover:scale-90 mb-3'>Click to Apply</button>
        <h1 className='text-center text-[15px] mb-1'>Have Question?</h1>
        <h1 className='text-center text-[15px] hover:text-blue-700'>
          <Link to='/faq'>Visit our FAQ?</Link>
        </h1>
      </div> 
    </main>
    

    <div className='bg-white h-fit grid grid-cols-1 lg:grid-cols-2 mt-3 md:-mt-20 mb-3'>

<div className='grid grid-cols-1 bg-white h-fit'>
  <div className='bg-white h-fit'>
    <p className='text-[rgb(147,150,154)] ml-[15px] lg:ml-[80px] mb-[15px]'>HOW IT WORKS</p>

    <p className='text-[rgb(12,51,121)] text-[25px] md:text-[30px] lg:text-[35px] font-semibold ml-[15px] lg:ml-[80px]'>Start Your Credit Approval</p>
  </div>


  <div className=' h-fit grid grid-cols-[30%,70%] md:grid-cols-2'>
    <div>
      <div className='bg-[rgb(236,243,253)] py-[10px] px-[30px] w-[85px] text-[rgb(62,128,255)] text-[40px] font-bold rounded-[50%] mt-[40px] ml-[10px] md:ml-[40px] lg:ml-[90px] transform hover:scale-110 transition-all duration-[0.5s]'>1</div>
      <div className='bg-[rgb(38,106,225)] h-[90px] w-[3px] ml-[50px] md:ml-[80px] lg:ml-[130px]'></div>
      <div className='bg-[rgb(236,243,253)] py-[10px] px-[30px] w-[85px] text-[rgb(62,128,255)] text-[40px] font-bold rounded-[50%] ml-[10px] md:ml-[40px] lg:ml-[90px] transform hover:scale-110 transition-all duration-[0.5s]'>2</div>
      <div className='bg-[rgb(38,106,225)] h-[90px] w-[3px] ml-[50px] md:ml-[80px] lg:ml-[130px]'></div>
      <div className='bg-[rgb(236,243,253)] py-[10px] px-[30px] w-[85px] text-[rgb(62,128,255)] text-[40px] font-bold rounded-[50%] ml-[10px] md:ml-[40px] lg:ml-[90px] transform hover:scale-110 transition-all duration-[0.5s]'>3</div>

    </div>
    <div className='bg-white'>
      <p className='text-[rgb(38,106,230)] text-[23px] mt-[40px] mb-[20px] tracking-wider'>Check for an offer</p>

      <p className='text-[rgb(147,150,154)] '>No obligation and no hidden fees</p>

      <p className='text-[rgb(38,106,230)] text-[23px] mt-[75px] mb-[20px] tracking-wider'>Quick application</p>

      <p className='text-[rgb(147,150,154)]'>Easy-to-follow steps</p>

      <p className='text-[rgb(38,106,230)] text-[23px] mt-[75px] mb-[20px] tracking-wider'>Get funded</p>

      <p className='text-[rgb(147,150,154)]'>Personalized support throughout the process</p>
    </div>
  </div>
</div>


<div className='h-full bg-white'>
  <img src="https://demo.strongtheme.com/americancredit/wp-content/uploads/sites/4/2021/06/amecreho013-800x596.png" className='mt-[40px] lg:mt-[60px]'/>
</div>
</div>

    </>
  )
}

export default Personal