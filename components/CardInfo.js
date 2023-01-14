import React from 'react'
import styles from '../styles/style'

function CardInfo({title, description, image, size}) {
  return (
    <div >
        <h1 className={`z-10 group-hover:scale-0 duration-700 text-dark-green
        ${styles.sub_title} pb-3`}>
            {title}
        </h1>
      <div className={`${size} relative group`}>
          <div className='absolute top-0 left-0 w-full h-full bg-amber-100 rounded-3xl'>
              <p className={`p-3 ${styles.text}`}>
                {description} 
              </p>
          </div>
          <div className='absolute bottom-0 left-0 w-full h-[97%] rounded-3xl bg-dark-green
              ease-in-out duration-700 group-hover:h-12 flex flex-col justify-start items-center'>
              
              <img src={image} alt={title} className='w-full h-full object-cover absolute rounded-3xl'/>
              <div className='relative z-10 flex flex-col items-center w-20 h-10 -mt-1'>
                  <img src='/angle-small-down.png' alt='Press Down'
                    className='invert object-fill w-full h-full group-hover:rotate-180 ease duration-700'/>
              </div>
          </div>
      </div>
    </div>
  )
}

export default CardInfo