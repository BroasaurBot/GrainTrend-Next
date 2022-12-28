import React from 'react'
export default function Header() {
  return (
        <div className='w-full'>
              <video className='absolute top-0 min-w-full h-[80vh] object-cover -z-10' autoPlay muted loop id='wheat'>
                <source src="/Wheat_Blowing.mp4" type="video/mp4" />
              </video>

              <div className='min-h-[80vh] -mb-14 flex flex-col justify-center items-center z-0'>
                <h1 className='font-mono2 text-6xl md:text-7xl text-white font-semibold
                border-b-8 border-dark-green'>
                  GrainTrend
                </h1>
                <p className='font-mono md:text-4xl text-3xl text-burnt-yellow outline-2'>
                  Partnering Global Agribusiness
                </p>
              </div>
        </div>
  )
}
