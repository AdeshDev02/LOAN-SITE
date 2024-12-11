import React, { useState } from 'react'

function ApplyComp5() {

  const [stat, setStat] = useState("");

  const Status = [
    { label: "Full Time Employed",   },
    { label: "Part Time Employed",   },
    { label: "Self Employed",   },
    { label: "Temporarily Emloyed",   },
    { label: "Student",   },
    { label: "Pension",   },
    { label: "Disability",   },
    { label: "Unemployed",   },

        // Add more countries as needed...
  ];

  const holdChange = (event) => {
    setDepend(event.target.value);
  };


  return (
    <>
      <main className='h-[450px] hidden md:hidden lg:block -mt-10 ml-20 mr-20' >
            <div className='lg:flex hidden gap-1 md:hidden'>
            <h2 className='text-[15px] pt-10'>
              Employement and other stuff
            </h2>
            <div className='h-[5px] w-[50px] bg-blue-400 mt-12 rounded-sm'>

            </div>
        </div>

        <h2 className='text-3xl mt-2 font-bold text-black'>Employement Details</h2>

        <form className='flex gap-10 mb-1'>
            <div className='grid mt-2 ml-3 gap-2 text-[17px]'>
                <h1 className='ml-1'>Employement Industry*</h1> <input className='w-[550px] p-6 placeholder:text-[15px] focus:outline-none rounded-md text-[15px] bg-slate-100' type="text"  name="" id="" placeholder='Employement Industry' required/> 
            </div>
            <div className='grid mt-2 mr-3 ml-3'>
                <h1 className='ml-1'>Employement Name*</h1> <input className='w-[550px] p-6 placeholder:text-[15px] focus:outline-none rounded-md text-[15px] bg-slate-100' type="text"  name="" id="" placeholder='Employement Name' required/> 
            </div>
        </form>

        <form className='flex gap-10 mb-1 mt-3'>
            <div className='grid mt-2 ml-3 gap-2 text-[17px]'>
                <h1 className='ml-1'>Employement Status*</h1> 
                <select onChange={holdChange} className='w-[350px] p-6 placeholder:text-[15px] focus:outline-none rounded-md text-[15px] bg-slate-100' type="text"  name="" id="" placeholder='State' required>
                    {Status.map((stat) => (
                      <option key={stat.value} value={stat.value}>
                        {stat.label}
                      </option> 
                    ))}
                  </select> 
            </div>
            <div className='grid mt-2 mr-3 ml-3'>
                <h1 className='ml-1'>Length of Employement*</h1> <input className='w-[350px] p-6 placeholder:text-[15px] focus:outline-none rounded-md text-[15px] bg-slate-100' type="text"  name="" id="" placeholder='Length of Employement' required/> 
            </div>
            <div className='grid mt-2 mr-3 ml-3'>
                <h1 className='ml-1'>Work Phone Number*</h1> <input className='w-[350px] p-6 placeholder:text-[15px] focus:outline-none rounded-md text-[15px] bg-slate-100' type="tel"  name="" id="" placeholder='Work Phone Number' required/> 
            </div>
        </form>
        <button className='ml-3 mt-4 text-[17px] font-bold bg-blue-500 p-4 text-white w-32 rounded-md hover:scale-90 transition-all duration-500'>Submit</button>
      </main>


      <div className='h-[450px] hidden lg:hidden md:block -mt-10 ml-10 mr-10' >
            <div className='md:flex hidden gap-1 lg:hidden'>
            <h2 className='text-[15px] pt-10'>
              Employement and other stuff
            </h2>
            <div className='h-[5px] w-[50px] bg-blue-400 mt-12 rounded-sm'>

            </div>
        </div>

        <h2 className='text-3xl mt-2 font-bold text-black'>Employement Details</h2>

        <form className='flex gap-10 mb-1'>
            <div className='grid mt-2 ml-3 gap-2 text-[17px]'>
                <h1 className='ml-1'>Employement Industry*</h1> <input className='w-[305px] p-6 placeholder:text-[15px] focus:outline-none rounded-md text-[15px] bg-slate-100' type="text"  name="" id="" placeholder='Employement Industry' required/> 
            </div>
            <div className='grid mt-2 mr-3 ml-3'>
                <h1 className='ml-1'>Employement Name*</h1> <input className='w-[305px] p-6 placeholder:text-[15px] focus:outline-none rounded-md text-[15px] bg-slate-100' type="text"  name="" id="" placeholder='Employement Name' required/> 
            </div>
        </form>

        <form className='flex gap-10 mb-1 mt-3'>
            <div className='grid mt-2 ml-3 gap-2 text-[17px]'>
                <h1 className='ml-1'>Employement Status*</h1> 
                <select onChange={holdChange} className='w-[185px] p-6 placeholder:text-[15px] focus:outline-none rounded-md text-[15px] bg-slate-100' type="text"  name="" id="" placeholder='State' required>
                    {Status.map((stat) => (
                      <option key={stat.value} value={stat.value}>
                        {stat.label}
                      </option> 
                    ))}
                  </select> 
            </div>
            <div className='grid mt-2 mr-3 ml-3'>
                <h1 className='ml-1'>Length of Employement*</h1> <input className='w-[185px] p-6 placeholder:text-[15px] focus:outline-none rounded-md text-[15px] bg-slate-100' type="text"  name="" id="" placeholder='Length of Employement' required/> 
            </div>
            <div className='grid mt-2 mr-3 ml-3'>
                <h1 className='ml-1'>Work Phone Number*</h1> <input className='w-[180px] p-6 placeholder:text-[15px] focus:outline-none rounded-md text-[15px] bg-slate-100' type="tel"  name="" id="" placeholder='Work Phone Number' required/> 
            </div>
        </form>
        <button className='ml-3 mt-4 text-[17px] font-bold bg-blue-500 p-4 text-white w-32 rounded-md hover:scale-90 transition-all duration-500'>Submit</button>
      </div>


      <div className='h-[780px] md:hidden lg:hidden block -mt-14 ml-3 mr-3' >
            <div className='flex md:hidden gap-1 lg:hidden'>
            <h2 className='text-[12px] pt-10'>
              Employement and other stuff
            </h2>
            <div className='h-[5px] w-[50px] bg-blue-400 mt-12 rounded-sm'>

            </div>
        </div>

        <h2 className='text-xl mt-2 font-bold text-black'>Employement Details</h2>

        <form className='grid gap-5 mb-1'>
            <div className='grid mt-2 ml-3 gap-2 text-[13px]'>
                <h1 className='ml-1'>Employement Industry*</h1> <input className='w-[360px] p-5 placeholder:text-[10px] focus:outline-none rounded-md text-[10px] bg-slate-100' type="text"  name="" id="" placeholder='Employement Industry' required/> 
            </div>
            <div className='grid mt-2 mr-3 ml-3'>
                <h1 className='ml-1'>Employement Name*</h1> <input className='w-[360px] p-5 placeholder:text-[10px] focus:outline-none rounded-md text-[10px] bg-slate-100' type="text"  name="" id="" placeholder='Employement Name' required/> 
            </div>
        </form>

        <form className='grid gap-5 mb-1 mt-3'>
            <div className='grid mt-2 ml-3 gap-2 text-[13px]'>
                <h1 className='ml-1'>Employement Status*</h1> 
                <select onChange={holdChange} className='w-[360px] p-5 placeholder:text-[10px] focus:outline-none rounded-md text-[10px] bg-slate-100' type="text"  name="" id="" placeholder='State' required>
                    {Status.map((stat) => (
                      <option key={stat.value} value={stat.value}>
                        {stat.label}
                      </option> 
                    ))}
                  </select> 
            </div>
            <div className='grid mt-2 mr-3 ml-3'>
                <h1 className='ml-1'>Length of Employement*</h1> <input className='w-[360px] p-5 placeholder:text-[10px] focus:outline-none rounded-md text-[10px] bg-slate-100' type="text"  name="" id="" placeholder='Length of Employement' required/> 
            </div>
            <div className='grid mt-2 mr-3 ml-3'>
                <h1 className='ml-1'>Work Phone Number*</h1> <input className='w-[360px] p-5 placeholder:text-[10px] focus:outline-none rounded-md text-[10px] bg-slate-100' type="tel"  name="" id="" placeholder='Work Phone Number' required/> 
            </div>
        </form>
        <button className='ml-3 mt-4 text-[17px] font-bold bg-blue-500 p-4 text-white w-32 rounded-md hover:scale-90 transition-all duration-500'>Submit</button>
      </div>
    </>
  )
}

export default ApplyComp5
