import React from 'react'

export default function Hero({title, subtitle}) {
  return (
      <div className='w-full min-h-[80vh]'>
          <video className='absolute top-0 left-0 w-full h-[80vh] object-cover -z-10 contrast-[0.9]'
             autoPlay playsInline muted loop id='wheat'>
            <source src="/Wheat_Blowing.mp4" type="video/mp4" />
          </video>

          <div className='min-h-[80vh] flex flex-col justify-center items-center z-0'>
            <h1 className='font-sans text-6xl md:text-7xl text-white font-semibold
            border-b-8 border-dark-green'>
              {title != undefined ? title : ""}
            </h1>
            <p className='font-mono md:text-4xl text-3xl text-burnt-yellow outline-2 text-center'>
              {subtitle != undefined ? subtitle : ""}
            </p>
          </div>
      </div>
  )
}
