import React from 'react'

export default function Quote(props) {
  return (
    <p className='text-dark-green font-mono text-center font-bold text-lg  md:text-xl lg:text-2xl md:mx-10 py-3 leading-normal sm:leading-loose'>
        {` " ${props.children} " `}
    </p>
  )
}
