import React from 'react'

function ApplyComp4() {
  return (
    <>
        <main className='h-[400px] hidden md:hidden lg:block -mt-24 ml-20 mr-20' >
            <div className='lg:flex hidden gap-1 md:hidden'>
            <h2 className='text-[15px] pt-10'>
            Street, City And State
            </h2>
            <div className='h-[5px] w-[50px] bg-blue-400 mt-12 rounded-sm'>

            </div>
        </div>

        <h2 className='text-3xl mt-2 font-bold text-black'>Address Details</h2>

        <form className='flex gap-10 mb-1'>
            <div className='grid mt-2 ml-3 gap-2 text-[17px]'>
                <h1 className='ml-1'>House No/Name*</h1> <input className='w-[350px] p-6 placeholder:text-[15px] focus:outline-none rounded-md text-[15px] bg-slate-100' type="text"  name="" id="" placeholder='House Number/Name' required/> 
            </div>
            <div className='grid mt-2 mr-3 ml-3'>
                <h1 className='ml-1'>Street*</h1> <input className='w-[350px] p-6 placeholder:text-[15px] focus:outline-none rounded-md text-[15px] bg-slate-100' type="text"  name="" id="" placeholder='Street' required/> 
            </div>
            <div className='grid mt-2 mr-3 ml-3'>
                <h1 className='ml-1'>City*</h1> <input className='w-[350px] p-6 placeholder:text-[15px] focus:outline-none rounded-md text-[15px] bg-slate-100' type="text"  name="" id="" placeholder='City' required/> 
            </div>
        </form>

        <form className='flex gap-10 mb-1 mt-3'>
            <div className='grid mt-2 ml-3 gap-2 text-[17px]'>
                <h1 className='ml-1'>State*</h1> <input className='w-[350px] p-6 placeholder:text-[15px] focus:outline-none rounded-md text-[15px] bg-slate-100' type="text"  name="" id="" placeholder='State' required/> 
            </div>
            <div className='grid mt-2 mr-3 ml-3'>
                <h1 className='ml-1'>Country*</h1> <input className='w-[350px] p-6 placeholder:text-[15px] focus:outline-none rounded-md text-[15px] bg-slate-100' type="text"  name="" id="" placeholder='Country' required/> 
            </div>
            <div className='grid mt-2 mr-3 ml-3'>
                <h1 className='ml-1'>Pin Code*</h1> <input className='w-[350px] p-6 placeholder:text-[15px] focus:outline-none rounded-md text-[15px] bg-slate-100' type="number"  name="" id="" placeholder='Pin Code' required/> 
            </div>
        </form>
      </main>


      <div className='h-[400px] hidden lg:hidden md:block -mt-24 ml-10 mr-10' >
            <div className='md:flex hidden gap-1 lg:hidden'>
            <h2 className='text-[15px] pt-10'>
            Street, City And State
            </h2>
            <div className='h-[5px] w-[50px] bg-blue-400 mt-12 rounded-sm'>

            </div>
        </div>

        <h2 className='text-3xl mt-2 font-bold text-black'>Address Details</h2>

        <form className='flex gap-10 mb-1'>
            <div className='grid mt-2 ml-3 gap-2 text-[17px]'>
                <h1 className='ml-1'>House No/Name*</h1> <input className='w-[185px] p-6 placeholder:text-[15px] focus:outline-none rounded-md text-[15px] bg-slate-100' type="text"  name="" id="" placeholder='House Number/Name' required/> 
            </div>
            <div className='grid mt-2 mr-3 ml-3'>
                <h1 className='ml-1'>Street*</h1> <input className='w-[185px] p-6 placeholder:text-[15px] focus:outline-none rounded-md text-[15px] bg-slate-100' type="text"  name="" id="" placeholder='Street' required/> 
            </div>
            <div className='grid mt-2 mr-3 ml-3'>
                <h1 className='ml-1'>City*</h1> <input className='w-[185px] p-6 placeholder:text-[15px] focus:outline-none rounded-md text-[15px] bg-slate-100' type="text"  name="" id="" placeholder='City' required/> 
            </div>
        </form>

        <form className='flex gap-10 mb-1 mt-3'>
            <div className='grid mt-2 ml-3 gap-2 text-[17px]'>
                <h1 className='ml-1'>State*</h1> <input className='w-[185px] p-6 placeholder:text-[15px] focus:outline-none rounded-md text-[15px] bg-slate-100' type="text"  name="" id="" placeholder='State' required/> 
            </div>
            <div className='grid mt-2 mr-3 ml-3'>
                <h1 className='ml-1'>Country*</h1> <input className='w-[185px] p-6 placeholder:text-[15px] focus:outline-none rounded-md text-[15px] bg-slate-100' type="text"  name="" id="" placeholder='Country' required/> 
            </div>
            <div className='grid mt-2 mr-3 ml-3'>
                <h1 className='ml-1'>Pin Code*</h1> <input className='w-[180px] p-6 placeholder:text-[15px] focus:outline-none rounded-md text-[15px] bg-slate-100' type="number"  name="" id="" placeholder='Pin Code' required/> 
            </div>
        </form>
      </div>


      <main className='h-[800px] md:hidden lg:hidden block -mt-5 ml-3 mr-3' >
            <div className='flex md:hidden gap-1 lg:hidden'>
            <h2 className='text-[12px] pt-10'>
            Street, City And State
            </h2>
            <div className='h-[5px] w-[50px] bg-blue-400 mt-12 rounded-sm'>

            </div>
        </div>

        <h2 className='text-xl mt-2 font-bold text-black'>Address Details</h2>

        <form className='grid gap-5 mb-1'>
            <div className='grid mt-2 ml-3 gap-2 text-[13px]'>
                <h1 className='ml-1'>House No/Name*</h1> <input className='w-[360px] p-5 placeholder:text-[10px] focus:outline-none rounded-md text-[13px] bg-slate-100' type="text"  name="" id="" placeholder='House Number/Name' required/> 
            </div>
            <div className='grid mt-2 mr-3 ml-3'>
                <h1 className='ml-1'>Street*</h1> <input className='w-[360px] p-5 placeholder:text-[10px] focus:outline-none rounded-md text-[13px] bg-slate-100' type="text"  name="" id="" placeholder='Street' required/> 
            </div>
            <div className='grid mt-2 mr-3 ml-3'>
                <h1 className='ml-1'>City*</h1> <input className='w-[360px] p-5 placeholder:text-[10px] focus:outline-none rounded-md text-[13px] bg-slate-100' type="text"  name="" id="" placeholder='City' required/> 
            </div>
        </form>

        <form className='grid gap-5 mb-1 mt-3'>
            <div className='grid mt-2 ml-3 gap-2 text-[13px]'>
                <h1 className='ml-1'>State*</h1> <input className='w-[360px] p-5 placeholder:text-[10px] focus:outline-none rounded-md text-[13px] bg-slate-100' type="text"  name="" id="" placeholder='State' required/> 
            </div>
            <div className='grid mt-2 mr-3 ml-3'>
                <h1 className='ml-1'>Country*</h1> <input className='w-[360px] p-5 placeholder:text-[10px] focus:outline-none rounded-md text-[13px] bg-slate-100' type="text"  name="" id="" placeholder='Country' required/> 
            </div>
            <div className='grid mt-2 mr-3 ml-3'>
                <h1 className='ml-1'>Pin Code*</h1> <input className='w-[360px] p-5 placeholder:text-[10px] focus:outline-none rounded-md text-[13px] bg-slate-100' type="number"  name="" id="" placeholder='Pin Code' required/> 
            </div>
        </form>
      </main>
    </>



  )
}

export default ApplyComp4
