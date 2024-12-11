import React, { useState } from 'react'

function ApplyComp3() {

    const [marital, setMarital] = useState("");
    const [depend, setDepend] = useState("");

    const Status = [
        { label: "Single",   },
        { label: "Married",   },
        { label: "Widowed",   },
        { label: "Co Habiting",   },
        { label: "Seperated",   },
        { label: "Divorced",   },
        { label: "Civil Union",   },
        { label: "Patner",   },
        // Add more countries as needed...
      ];
    
    
      const handleChange = (event) => {
        setMarital(event.target.value);
      };

      const Gurant = [
        { label: "0 Dependent",   },
        { label: "1 Dependent",   },
        { label: "2 Dependents",   },
        { label: "3 Dependents",   },
        { label: "4+ Dependents",   },
            // Add more countries as needed...
      ];

      const holdChange = (event) => {
        setDepend(event.target.value);
      };








  return (
    <>
        <main className='h-[600px] hidden md:hidden lg:block -mt-5 ml-20 mr-20' >
            <div className='lg:flex hidden gap-1 md:hidden'>
            <h2 className='text-[15px] pt-10'>
            Ask for More Details
            </h2>
            <div className='h-[5px] w-[50px] bg-blue-500 mt-12 rounded-sm'>

            </div>
        </div>

        <h2 className='text-3xl mt-2 font-bold text-black'>Personal Details</h2>

        <form className='flex gap-10 mb-1 mt-1'>
            <div className='grid mt-2 ml-3 gap-2 text-[17px]'>
                <div className='flex gap-2'>
                    <h1 className='ml-1'>Full Name*</h1>
                    <h1 className='text-xs font-bold mt-2'>[as per TaxPayer id]</h1>
                </div>
                 <input className='w-[550px] p-7 placeholder:text-[15px] focus:outline-none rounded-md text-[15px] bg-slate-100' type="text"  name="" id="" placeholder='Full Name' required/> 
            </div>
            <div className='grid mt-2 mr-3 ml-3'>
                <h1 className='ml-1'>Email*</h1> <input className='w-[550px] p-6 placeholder:text-[15px] focus:outline-none rounded-md text-[15px] bg-slate-100' type="email"  name="" id="" placeholder='Your Email' required/> 
            </div>
        </form>

        <form className='flex gap-10 mb-1 mt-2'>
            <div className='grid mt-2 ml-3 gap-2 text-[17px]'>
                <h1 className='ml-1'>Mobile Number*</h1> <input className='w-[550px] p-7 placeholder:text-[15px] focus:outline-none rounded-md text-[15px] bg-slate-100' type="tel"  name="" id="" placeholder='Mobile Number' required/> 
            </div>
            <div className='grid mt-2 mr-3 ml-3'>
                <h1 className='ml-1'>Marital Status*</h1> 
                    <select onChange={handleChange} className='w-[550px] p-6 placeholder:text-[15px] focus:outline-none rounded-md text-[15px] bg-slate-100' type="email"  name="" id="" required>
                    {Status.map((stat) => (
                        <option key={stat.value} value={stat.value}>
                            {stat.label}
                        </option> 
                        ))}
                </select>
            </div>
        </form>
        
        <form className='flex gap-10 mb-1 mt-2'>
            <div className='grid mt-2 ml-3 gap-2 text-[17px]'>
            <div className='flex gap-2'>
                    <h1 className='ml-1'>Date of Birth*</h1>
                    <h1 className='text-xs font-bold mt-2'>[as per TaxPayer id]</h1>
                </div>
                 <input className='w-[550px] p-7 placeholder:text-[15px] focus:outline-none rounded-md text-[15px] bg-slate-100' type="text"  name="" id="" placeholder='Date of Birth' required/> 
            </div>
            <div className='grid mt-2 mr-3 ml-3'>
                <h1 className='ml-1'>NUmber of Dependents*</h1> 
                    <select onChange={holdChange} className='w-[550px] p-6 placeholder:text-[15px] focus:outline-none rounded-md text-[15px] bg-slate-100' type="text"  name="" id="" required>
                    {Gurant.map((depends) => (
                        <option key={depends.value} value={depends.value}>
                            {depends.label}
                        </option> 
                        ))}
                </select>
            </div>
        </form>
      </main>


      <div className='h-[600px] hidden md:block lg:hidden -mt-5 ml-10 mr-10' >
            <div className='md:flex hidden gap-1 lg:hidden'>
            <h2 className='text-[15px] pt-10'>
            Ask for More Details
            </h2>
            <div className='h-[5px] w-[50px] bg-blue-500 mt-12 rounded-sm'>

            </div>
        </div>

        <h2 className='text-3xl mt-2 font-bold text-black'>Personal Details</h2>

        <form className='flex gap-10 mb-1 mt-1'>
            <div className='grid mt-2 ml-3 gap-2 text-[17px]'>
                <div className='flex gap-2'>
                    <h1 className='ml-1'>Full Name*</h1>
                    <h1 className='text-xs font-bold mt-2'>[as per TaxPayer id]</h1>
                </div>
                 <input className='w-[305px] p-7 placeholder:text-[15px] focus:outline-none rounded-md text-[15px] bg-slate-100' type="text"  name="" id="" placeholder='Full Name' required/> 
            </div>
            <div className='grid mt-2 mr-3 ml-3'>
                <h1 className='ml-1'>Email*</h1> <input className='w-[305px] p-6 placeholder:text-[15px] focus:outline-none rounded-md text-[15px] bg-slate-100' type="email"  name="" id="" placeholder='Your Email' required/> 
            </div>
        </form>

        <form className='flex gap-10 mb-1 mt-2'>
            <div className='grid mt-2 ml-3 gap-2 text-[17px]'>
                <h1 className='ml-1'>Mobile Number*</h1> <input className='w-[305px] p-7 placeholder:text-[15px] focus:outline-none rounded-md text-[15px] bg-slate-100' type="tel"  name="" id="" placeholder='Mobile Number' required/> 
            </div>
            <div className='grid mt-2 mr-3 ml-3'>
                <h1 className='ml-1'>Marital Status*</h1> 
                    <select onChange={handleChange} className='w-[305px] p-6 placeholder:text-[15px] focus:outline-none rounded-md text-[15px] bg-slate-100' type="email"  name="" id="" required>
                    {Status.map((stat) => (
                        <option key={stat.value} value={stat.value}>
                            {stat.label}
                        </option> 
                        ))}
                </select>
            </div>
        </form>
        
        <form className='flex gap-10 mb-1 mt-2'>
            <div className='grid mt-2 ml-3 gap-2 text-[17px]'>
            <div className='flex gap-2'>
                    <h1 className='ml-1'>Date of Birth*</h1>
                    <h1 className='text-xs font-bold mt-2'>[as per TaxPayer id]</h1>
                </div>
                 <input className='w-[305px] p-7 placeholder:text-[15px] focus:outline-none rounded-md text-[15px] bg-slate-100' type="text"  name="" id="" placeholder='Date of Birth' required/> 
            </div>
            <div className='grid mt-2 mr-3 ml-3'>
                <h1 className='ml-1'>NUmber of Dependents*</h1> 
                    <select onChange={holdChange} className='w-[305px] p-6 placeholder:text-[15px] focus:outline-none rounded-md text-[15px] bg-slate-100' type="text"  name="" id="" required>
                    {Gurant.map((depends) => (
                        <option key={depends.value} value={depends.value}>
                            {depends.label}
                        </option> 
                        ))}
                </select>
            </div>
        </form>
      </div>



      <main className='h-[760px] lg:hidden block md:hidden mt-14 ml-3 mr-3' >
            <div className='lg:hidden flex md:hidden gap-1'>
            <h2 className='text-[12px] pt-10'>
            Ask for More Details
            </h2>
            <div className='h-[5px] w-[50px] bg-blue-500 mt-12 rounded-sm'>

            </div>
        </div>

        <h2 className='text-xl mt-2 font-bold text-black'>Personal Details</h2>

        <form className='grid gap-5 mb-1 mt-1'>
            <div className='grid mt-2 ml-3 gap-2 text-[13px]'>
                <div className='flex gap-2'>
                    <h1 className='ml-1'>Full Name*</h1>
                    <h1 className='text-xs font-bold'>[as per TaxPayer id]</h1>
                </div>
                 <input className='w-[360px] p-5 placeholder:text-[10px] focus:outline-none rounded-md text-[13px] bg-slate-100' type="text"  name="" id="" placeholder='Full Name' required/> 
            </div>
            <div className='grid mt-2 mr-3 ml-3'>
                <h1 className='ml-1'>Email*</h1> <input className='w-[360px] p-5 placeholder:text-[10px] focus:outline-none rounded-md text-[13px] bg-slate-100' type="email"  name="" id="" placeholder='Your Email' required/> 
            </div>
        </form>

        <form className='grid gap-5 mb-1 mt-2'>
            <div className='grid mt-2 ml-3 gap-2 text-[13px]'>
                <h1 className='ml-1'>Mobile Number*</h1> <input className='w-[360px] p-5 placeholder:text-[10px] focus:outline-none rounded-md text-[13px] bg-slate-100' type="tel"  name="" id="" placeholder='Mobile Number' required/> 
            </div>
            <div className='grid mt-2 mr-3 ml-3'>
                <h1 className='ml-1'>Marital Status*</h1> 
                    <select onChange={handleChange} className='w-[360px] p-5 placeholder:text-[10px] focus:outline-none rounded-md text-[13px] bg-slate-100' type="email"  name="" id="" required>
                    {Status.map((stat) => (
                        <option key={stat.value} value={stat.value}>
                            {stat.label}
                        </option> 
                        ))}
                </select>
            </div>
        </form>
        
        <form className='grid gap-5 mb-1 mt-2'>
            <div className='grid mt-2 ml-3 gap-2 text-[17px]'>
            <div className='flex gap-2'>
                    <h1 className='ml-1'>Date of Birth*</h1>
                    <h1 className='text-xs font-bold mt-2'>[as per TaxPayer id]</h1>
                </div>
                 <input className='w-[360px] p-5 placeholder:text-[10px] focus:outline-none rounded-md text-[13px] bg-slate-100' type="text"  name="" id="" placeholder='Date of Birth' required/> 
            </div>
            <div className='grid mt-2 mr-3 ml-3'>
                <h1 className='ml-1'>NUmber of Dependents*</h1> 
                    <select onChange={holdChange} className='w-[360px] p-5 placeholder:text-[10px] focus:outline-none rounded-md text-[13px] bg-slate-100' type="text"  name="" id="" required>
                    {Gurant.map((depends) => (
                        <option key={depends.value} value={depends.value}>
                            {depends.label}
                        </option> 
                        ))}
                </select>
            </div>
        </form>
      </main>
    </>
  )
}

export default ApplyComp3
