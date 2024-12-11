import React from 'react'

const group=[
  {id:1, image: "https://demo.strongtheme.com/americancredit/wp-content/uploads/sites/4/2021/06/homecrec014-800x533.jpg", title: "Auditor Main Entity", button: "Apply Now" },
  {id:2, image: "https://demo.strongtheme.com/americancredit/wp-content/uploads/sites/4/2021/06/homecrec013.jpg", title: "Agriculture", button: "Apply Now"},
  {id:3, image: "https://demo.strongtheme.com/americancredit/wp-content/uploads/sites/4/2021/06/homecrec011-800x533.jpg", title: "Construction", button: "Apply Now"}
];

function Career() {
  return (
    <>
      <main className='pg grid justify-center items-center mt-10 h-[250px] mb-1'>
          <h2 className='text-xl md:text-2xl lg:text-4xl font-bold text-white pt-7'>Career Page</h2>
          <div className='flex justify-center items-center gap-1'>
          <h2 className='text-blue-400'>Home / Page /</h2><h2 className='text-white'> Career</h2>
          </div>
      </main>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 mb-5'>
        <div className='mt-2 ml-2 md:ml-7 bg-blue-500 bg-opacity-[20%] rounded-full'>
          <img className='lg:ml-5 md:-ml-2' src="https://demo.strongtheme.com/americancredit/wp-content/uploads/sites/4/2021/06/amecreho032.png" />
        </div>
        <div className='ml-9 lg:mt-44 md:mt-14 mt-4'>
          <h1 className='lg:text-4xl font-bold mb-2'>Explore Career <br></br> Opportunities</h1>
          <h1 className='text-[15px] text-justify mr-20'>It encourages job seekers to discover various roles within the company, focusing on a meaningful career path in the financial services industry. This phrase should be integrated thoughtfully into the website to not only attract talent but also reinforce the company’s commitment to growth, innovation, and empowerment in the financial space.</h1>
        </div>
      </div>

      <main className='h-[400px] gap-5 p-2 rounded-md grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 mr-10 ml-10 mb-[700px] md:mb-[1450px] lg:mb-1'>
          {
            group.map((index)=>(
              <div key={index.id} className='rounded-md h-[340px] md:h-[600px] lg:h-[360px] relative shadow-xl p-3'>
            <img className='rounded-lg' src={index.image} height='100%' width='100%' alt="" />
          <div className='h-[50px] w-[350px] md:h-[50px] md:w-[450px] lg:h-[50px] lg:w-[350px] bg-white absolute bottom-20 md:bottom-20 lg:bottom-6 p-2 mb-10'>
            <h1 className='text-xl font-semibold text-blue-500'>{index.title}</h1>
          </div>
            <button className='p-3 border-[2px] w-[300px] lg:w-[385px] mr-9 bottom-9 md:bottom-6 lg:bottom-2 rounded-lg absolute border-blue-500 hover:scale-95 transition-all duration-700 '>
              <h1 className='text-blue-500'>{index.button}</h1>
          </button>
          </div>
            ))
          }

      </main>
    </>
  )
}

export default Career