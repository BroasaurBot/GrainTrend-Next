import React from 'react'

export default function Quote(props) {
  return (
    <p className='text-dark-green font-sans text-center font-bold text-xl md:text-3xl mx-2 md:mx-10 py-3'>
        {` " ${props.children} " `}
    </p>
  )
}
