import React from 'react'
import styles from '../styles/style'

function IconPair({title, description, image, size, reverse=false}) {
  return (
    <div className='py-3'>
        <div className={`flex flex-col ${reverse ? "sm:flex-row-reverse" : "sm:flex-row"} 
            justify-start items-start max-w-[95%] lg:max-w-[90%]
            ${reverse ? "ml-auto" : "mr-auto"}`}>

            <div className={`px-5 py-1 md:py-2 lg:py-3 h-full`}>
                <h1 className={`${styles.sub_title} text-lg md:text-xl lg:text-3xl text-dark-green
                    ${reverse ? "text-right" : "text-left"}`}>
                    {title}
                </h1>
                <p className={` py-2 md:py-4 lg:py-6 ${styles.text} px-3 md:px-5
                    ${reverse ? "text-right" : "text-left"}
                    ${reverse ? "text-smear-right" : "text-smear-left"}`}>
                        {description}
                </p>
            </div>

            <div className={`min-w-[180px] md:min-w-[200px] `}>
                <img src={image} alt={title} className='shadow-lg object-cover'/>
            </div>
        </div>
    </div>
  )
}

export default IconPair