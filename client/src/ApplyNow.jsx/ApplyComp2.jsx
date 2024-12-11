import React, { useState } from 'react'

function ApplyComp2() {
    const [mainpurpose, setPurpose]= useState("");
    const [yearsnum, setYears] = useState("");

const Purposes = [
    { label: "Business",   },
    { label: "Home Purchases",   },
    { label: "Car Purchases",   },
    { label: "Holiday",   },
    { label: "Wedding",   },
    { label: "Investment",   },
    { label: "Payday Loan",   },
    { label: "Start Up",   },
    { label: "Others",   },
    // Add more countries as needed...
  ];


  const handleChange = (event) => {
    setPurpose(event.target.value);
  };

  const NumYears = [
    { label: "6 Months",   },
    { label: "1 Year",   },
    { label: "2 Years",   },
    { label: "3 Years",   },
    { label: "4 Years",   },
    { label: "5 Years",   },
    { label: "6 Years",   },
    { label: "7 Years",   },
    { label: "8 Years",   },
    { label: "9 Years",   },
    { label: "10 Years",   },
    { label: "11 Years",   },
    { label: "12 Years",   },
    { label: "13 Years",   },
    { label: "14 Years",   },
    { label: "15+ Years",   },
    // Add more countries as needed...
  ];

  const holdChange = (event) => {
    setYears(event.target.value);
  };
  return (
    <>
      <main className='h-[400px] hidden md:hidden lg:blockml-20 mr-20' >
        <div className='lg:flex hidden gap-1 md:hidden'>
            <h2 className='text-[15px] pt-10'>
            Calculate your loan amount
            </h2>
            <div className='h-[5px] w-[50px] bg-blue-500 mt-12 rounded-sm'>

            </div>
        </div>

        <h2 className='text-3xl mt-2 font-bold text-black'>Loan Details</h2>

        <form className='flex gap-10 mb-1'>
            <div className='grid mt-2 ml-3 gap-2 text-[17px]'>
                <h1 className='ml-1'>Loan Amount:*</h1> <input className='w-[550px] p-7 placeholder:text-[15px] focus:outline-none rounded-md text-[15px] bg-slate-100' type="number"  name="" id="" placeholder='Loan Amount' required/> 
            </div>
            <div className='grid mt-2 mr-3 ml-3'>
                <h1 className='ml-1'>Monthly Income:*</h1> <input className='w-[550px] p-7 placeholder:text-[15px] focus:outline-none rounded-md text-[15px] bg-slate-100' type="number"  name="" id="" placeholder='Monthly Income' required/> 
            </div>
        </form>

        <form className='flex gap-10 mt-5'>
            <div className='grid mt-2 ml-3 gap-2 text-[17px]'>
                <h1 className='ml-1'>Purpose of Loan*</h1> 
                <select onChange={handleChange} className='w-[550px] p-6 placeholder:text-[15px] focus:outline-none rounded-md text-[15px] bg-slate-100' type="number"  name="" id="" placeholder='Loan Amount' required> 
                {Purposes.map((purpose) => (
                   <option key={purpose.value} value={purpose.value}>
                    {purpose.label}
                   </option> 
                ))}
                </select>
            </div>
            <div className='grid mt-2 mr-3 ml-3'>
                <h1 className='ml-1'>Loan Year</h1> 
                <select onChange={holdChange} className='w-[550px] p-6 placeholder:text-[15px] focus:outline-none rounded-md text-[15px] bg-slate-100' type="number"  name="" id="" placeholder='Monthly Income' required>
                    {NumYears.map((years) => (
                    <option key={years.value} value={years.value}>
                        {years.label}
                    </option> 
                    ))}
                </select> 
            </div>
        </form>
      </main>

      <div className='h-[400px] hidden md:block lg:hidden ml-10 mr-10' >
        <div className='lg:hidden hidden gap-1 md:flex'>
            <h2 className='text-[15px] pt-10'>
            Calculate your loan amount
            </h2>
            <div className='h-[5px] w-[50px] bg-blue-500 mt-12 rounded-sm'>

            </div>
        </div>

        <h2 className='text-3xl mt-2 font-bold text-black'>Loan Details</h2>

        <form className='flex gap-10 mb-1'>
            <div className='grid mt-2 ml-3 gap-2 text-[17px]'>
                <h1 className='ml-1'>Loan Amount:*</h1> <input className='w-[300px] p-7 placeholder:text-[15px] focus:outline-none rounded-md text-[15px] bg-slate-100' type="number"  name="" id="" placeholder='Loan Amount' required/> 
            </div>
            <div className='grid mt-2 mr-3 ml-3'>
                <h1 className='ml-1'>Monthly Income:*</h1> <input className='w-[305px] p-7 placeholder:text-[15px] focus:outline-none rounded-md text-[15px] bg-slate-100' type="number"  name="" id="" placeholder='Monthly Income' required/> 
            </div>
        </form>

        <form className='flex gap-10 mt-5'>
            <div className='grid mt-2 ml-3 gap-2 text-[17px]'>
                <h1 className='ml-1'>Purpose of Loan*</h1> 
                <select onChange={handleChange} className='w-[305px] p-6 placeholder:text-[15px] focus:outline-none rounded-md text-[15px] bg-slate-100' type="number"  name="" id="" placeholder='Loan Amount' required> 
                {Purposes.map((purpose) => (
                   <option key={purpose.value} value={purpose.value}>
                    {purpose.label}
                   </option> 
                ))}
                </select>
            </div>
            <div className='grid mt-2 mr-3 ml-3'>
                <h1 className='ml-1'>Loan Year</h1> 
                <select onChange={holdChange} className='w-[305px] p-6 placeholder:text-[15px] focus:outline-none rounded-md text-[15px] bg-slate-100' type="number"  name="" id="" placeholder='Monthly Income' required>
                    {NumYears.map((years) => (
                    <option key={years.value} value={years.value}>
                        {years.label}
                    </option> 
                    ))}
                </select> 
            </div>
        </form>
      </div>



      <main className='h-[400px] md:hidden block lg:hidden ml-3 mr-3' >
        <div className='lg:hidden md:hidden gap-1 flex'>
            <h2 className='text-[12px] pt-7'>
            Calculate your loan amount
            </h2>
            <div className='h-[5px] w-[50px] bg-blue-500 mt-12 rounded-sm'>

            </div>
        </div>

        <h2 className='text-xl mt-2 font-bold text-black'>Loan Details</h2>

        <form className='grid gap-6 mb-1'>
            <div className='grid ml-3 gap-2 text-[13px]'>
                <h1 className='ml-1'>Loan Amount:*</h1> <input className='w-[360px] p-5 placeholder:text-[10px] focus:outline-none rounded-md text-[12px] bg-slate-100' type="number"  name="" id="" placeholder='Loan Amount' required/> 
            </div>
            <div className='grid mr-3 ml-3 text-[13px]'>
                <h1 className='ml-1'>Monthly Income:*</h1> <input className='w-[360px] p-5 placeholder:text-[10px] focus:outline-none rounded-md text-[12px] bg-slate-100' type="number"  name="" id="" placeholder='Monthly Income' required/> 
            </div>
        </form>

        <form className='gap-6'>
            <div className='grid mt-2 ml-3 gap-2 text-[13px]'>
                <h1 className='ml-1'>Purpose of Loan*</h1> 
                <select onChange={handleChange} className='w-[360px] p-5 placeholder:text-[10px] focus:outline-none rounded-md text-[15px] bg-slate-100' type="number"  name="" id="" placeholder='Loan Amount' required> 
                {Purposes.map((purpose) => (
                   <option key={purpose.value} value={purpose.value}>
                    {purpose.label}
                   </option> 
                ))}
                </select>
            </div>
            <div className='grid mr-3 ml-3 text-[13px]'>
                <h1 className='ml-1 mt-3'>Loan Year</h1> 
                <select onChange={holdChange} className='w-[360px] p-5 placeholder:text-[10px] focus:outline-none rounded-md text-[15px] bg-slate-100' type="number"  name="" id="" placeholder='Monthly Income' required>
                    {NumYears.map((years) => (
                    <option key={years.value} value={years.value}>
                        {years.label}
                    </option> 
                    ))}
                </select> 
            </div>
        </form>
      </main>
    </>
  )
}

export default ApplyComp2
