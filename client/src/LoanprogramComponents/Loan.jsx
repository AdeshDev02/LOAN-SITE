import React from 'react';
import { Link } from 'react-router-dom';
import Loan2 from './Loan2';


const imageUrl = "https://demo.strongtheme.com/americancredit/wp-content/uploads/sites/4/2021/06/amecreho010.png";

function Loan() {
  return (

    <div>
      
      <div>
        <main className='pg grid justify-center items-center h-[250px] mt-10 mb-1'>
          <h2 className='text-xl font-bold text-white md:text-2xl lg:text-4xl pt-7'>Loan Program Page</h2>
          <div className='flex items-center justify-center gap-1'>
          <h2 className='text-blue-400'>Home /</h2><h2 className='text-white'> Loan Program</h2>
            x
          </div>
        </main>
      </div>


      <div className='bg-white h-[2050px] md:h-[710px] lg:h-[700px] relative bottom-[90px] md:bottom-[60px] lg:bottom-[30px] grid grid-cols-1 md:grid-cols-[35%,65%] lg:grid-cols-[35%,65%] mt-[200px]'>
        <div className='h-[570px] md:h-[709px] lg:h-[700px] bg-white'>
          <img src={imageUrl} className='h-650px md:h-[550px] lg:h-[700px] left-[-100px] lg:left-[-50px] md:left-[-120px] absolute'/>
        </div>
        <div className='bg-white grid grid-cols-1 md:grid-cols-2 gap-[30px] md:gap-[15px] pr-[40px] md:pr-[50px] lg:pr-[100px] pl-[15px] md:pl-0 h-[1500px] md:h-[710px] lg:h-[700px]'>

          <div className='bg-green-500 h-fit rounded-[10px] overflow-hidden hover:bg-[rgb(38,106,225)] mb-0'>
            <div className='grid place-items-center bg-gradient-to-b from-[rgb(64,129,255)] to-[rgb(126,178,255)] h-fit pb-[40px] transform hover:scale-110 transition-all duration-[1.5s] hover:bg-[rgb(38,106,225)] man'>
              <p className='w-[250px] md:w-[140px] lg:w-[250px] text-[rgb(21,63,139)] text-[20px] font-bold mt-[50px] tracking-wider leading-[25px] mr-[20px] lg:mr-[80px] hover:text-white transition-all duration-[1.5s] manboy'>Want a quote from this buisiness?</p>

              <button className='bg-[rgb(12,51,121)] text-white py-[10px] px-[25px] whitespace-normal mt-[20px] mr-[150px] md:mr-[40px] lg:mr-[200px] rounded-[10px]'>Get a Quote</button>
            </div>
          </div>


          <div className='h-fit bg-white rounded-[10px] border-[rgb(214,227,249)] border-solid border-[1px] hover:bg-gradient-to-b
           hover:from-[rgb(155,203,249)] hover:to-[rgb(239,246,255)] hover:border-b-[rgb(41,108,225)] hover:border-b-[2px] transition duration-[0.5s] mb-0'>
            
              <img src="https://demo.strongtheme.com/americancredit/wp-content/uploads/sites/4/2021/06/ameioc09.png" className='w-[90px] md:w-[60px] lg:w-[70px] mt-[20px] ml-[25px] transform hover:scale-75 transition-all duration-[0.5s]' />

              <p className='text-[rgb(38,106,225)] text-[20px] mt-[20px] ml-[25px]'>Personal Loan</p>

              <p className='text-[rgb(186,141,139)] mt-[20px] ml-[25px] mb-[25px]'>Quick and easy application process</p>
            
          </div>


          <div className='h-fit  bg-white rounded-[10px] border-[rgb(214,227,249)] border-solid border-[1px] hover:bg-gradient-to-b
           hover:from-[rgb(155,203,249)] hover:to-[rgb(239,246,255)] hover:border-b-[rgb(41,108,225)] hover:border-b-[2px] transition duration-[0.5s] mb-0'>

            <img src="https://demo.strongtheme.com/americancredit/wp-content/uploads/sites/4/2021/06/ameioc012.png"  className='w-[90px] md:w-[60px] lg:w-[70px] mt-[20px] ml-[25px] transform hover:scale-75 transition-all duration-[0.5s]'/>

            <p className='text-[rgb(38,106,225)] text-[20px] mt-[20px] ml-[25px]'>Business Capital</p>

            <p className='text-[rgb(186,141,139)] mt-[20px] ml-[25px] mb-[25px]'>Competitive interest rates</p>
          </div>


          <div className='h-fit bg-white rounded-[10px] border-[rgb(214,227,249)] border-solid border-[1px] hover:bg-gradient-to-b
           hover:from-[rgb(155,203,249)] hover:to-[rgb(239,246,255)] hover:border-b-[rgb(41,108,225)] hover:border-b-[2px] transition duration-[0.5s] mb-0'>

            <img src="https://demo.strongtheme.com/americancredit/wp-content/uploads/sites/4/2021/06/ameioc011.png"  className='w-[90px] md:w-[60px] lg:w-[70px] mt-[20px] ml-[25px] transform hover:scale-75 transition-all duration-[0.5s]'/>

            <p className='text-[rgb(38,106,225)] text-[20px] mt-[20px] ml-[25px]'>Business Loan</p>
            

            <p className='text-[rgb(186,141,139)] mt-[20px] ml-[25px] mb-[25px]'>Flexible repayment terms</p>

           </div>


          <div className='h-fit bg-white rounded-[10px] border-[rgb(214,227,249)] border-solid border-[1px] hover:bg-gradient-to-b
           hover:from-[rgb(155,203,249)] hover:to-[rgb(239,246,255)] hover:border-b-[rgb(41,108,225)] hover:border-b-[2px] transition duration-[0.5s] mb-0'>

            <img src="https://demo.strongtheme.com/americancredit/wp-content/uploads/sites/4/2021/06/ameioc010.png"  className='w-[90px] md:w-[60px] lg:w-[70px] mt-[20px] ml-[25px] transform hover:scale-75 transition-all duration-[0.5s]'/>

            <p className='text-[rgb(38,106,225)] text-[20px] mt-[20px] ml-[25px]'>Investica Network</p>

            <p className='text-[rgb(186,141,139)] mt-[20px] ml-[25px] mb-[25px]'>Networking with like-minded professionals</p>

           </div>


          <div className='bg-green-500 h-fit rounded-[10px] overflow-hidden hover:bg-[rgb(38,106,225)] mb-0'>

            <div className='grid place-items-center bg-gradient-to-b from-[rgb(64,129,255)] to-[rgb(126,178,255)] h-fit pb-[40px] transform hover:scale-110 transition-all duration-[1.5s] hover:bg-[rgb(38,106,225)] man'>
              <p className='w-[250px] md:w-[140px] lg:w-[250px] text-[rgb(21,63,139)] text-[20px] font-bold mt-[50px] tracking-wider leading-[25px] mr-[20px] lg:mr-[80px] hover:text-white transition-all duration-[1.5s] manboy'>Need A Personal Loan?</p>

              <button className='bg-[rgb(12,51,121)] text-white py-[10px] px-[25px] whitespace-normal mt-[20px] mr-[150px] md:mr-[40px] lg:mr-[200px] rounded-[10px]'>
                <Link to='/apply'>Apply Now</Link>
              </button>
            </div>

           </div>

        </div>
      </div>
      
      <Loan2/>

    </div>

   

  )
}

export default Loan
