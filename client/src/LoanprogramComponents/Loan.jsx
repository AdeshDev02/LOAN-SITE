import React from 'react'

function Loan() {
  return (

    <div>
      
      <div className='bg-red-500 h-[280px] md:h-[280px] lg:h-[250px] mt-[50px] md:mt-[45px] grid grid-cols-1 md:grid-cols-[38%,62%] lg:grid-cols-2'>
        <div className='bg-gray-500 h-fit md:h-full'>
          <p className='text-[rgb(12,51,121)] tracking-wider text-[17px] md:text-[18px] lg:text-[19px] ml-[10px] lg:ml-[80px] md:mt-[120px]'>PAGE LOAN PROGRAM</p>
        </div>
        
        <div className='h-full bg-green-500'>

        </div>
      </div>

    </div>

    <>
      <main className='pg grid justify-center items-center h-[250px] mt-10 mb-1'>
          <h2 className='text-xl font-bold text-white md:text-2xl lg:text-4xl pt-7'>Loan Program Page</h2>
          <div className='flex items-center justify-center gap-1'>
          <h2 className='text-blue-400'>Home /</h2><h2 className='text-white'> Loan Program</h2>
          </div>
      </main>
    </>

  )
}

export default Loan
