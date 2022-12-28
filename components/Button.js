import React from 'react'
import Link from 'next/link'

export default function Button({children, path}) {
  return (
    <>
      <Link href={`${path}`}>
        <button className='
          px-3 py-2 rounded-md text-lg font-medium
          border-slate-300 border-2
        hover:bg-burnt-yellow'>
          {children}
        </button>
      </Link>
    </>
  )
}
