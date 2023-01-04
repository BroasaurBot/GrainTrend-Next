import React from 'react'

export default function Title({children}) {
  return (
      <div className='flex flex-row justify-center'>
        <h1 className='text-dark-green font-mono text-5xl lg:text-7xl font-extrabold'>
          {children}
        </h1>
      </div>
  )
}
