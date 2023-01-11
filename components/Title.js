import React from 'react'

export default function Title({children}) {
  return (
      <div className='flex flex-row justify-start w-full'>
        <h1 className='text-dark-green font-mono text-3xl lg:text-5xl font-extrabold pl-8 md:pl-12'>
          {children}
        </h1>
      </div>
  )
}
