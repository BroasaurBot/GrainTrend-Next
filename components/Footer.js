import React from 'react'
import Button from '../components/Button'

export default function Footer() {
  return (
    <div>
      <div className="relative">
        <svg className='absolute' xmlns="http://www.w3.org/2000/svg" viewBox="0 130 1440 130"><path fill="#499542" fill-opacity="1" d="M0,160L80,181.3C160,203,320,245,480,240C640,235,800,181,960,176C1120,171,1280,213,1360,234.7L1440,256L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path></svg>
        <svg className='' xmlns="http://www.w3.org/2000/svg" viewBox="0 130 1440 130"><path fill="#90E38A" fill-opacity="1" d="M0,256L80,229.3C160,203,320,149,480,154.7C640,160,800,224,960,234.7C1120,245,1280,203,1360,181.3L1440,160L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path></svg>
      </div>
      <div className='bg-dark-green py-1 px-6'>
        <div className='border-t-2 border-burnt-yellow py-3 flex flex-row justify-between items-end'>
          <img src={"GrainTrend_Clear.png"} className='brightness-[5] w-[12rem] md:w-[16rem]'/>
          <p className='text-gray-200 text-xs sm:text-base text-sans justify-self-center'>Copyright <span>&copy;</span> 2023 GrainTrend </p>
        </div>
      </div>
    </div>
  )
}
