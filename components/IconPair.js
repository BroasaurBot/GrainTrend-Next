import React from 'react'
import styles from '../styles/style'

function IconPair({title, description, image, size, reverse=false}) {
  return (
    <div className='my-5 '>
        <div className={`flex flex-col ${reverse ? "sm:flex-row-reverse" : "sm:flex-row"} 
            justify-start items-center max-w-[95%] lg:max-w-[80%]
            ${reverse ? "ml-auto" : "mr-auto"}`}>
            <div className={`px-5 py-1 md:py-2 lg:py-4 h-full `}>
                <h1 className={`${styles.sub_title} text-lg md:text-xl lg:text-3xl text-dark-green
                    ${reverse ? "text-right" : "text-left"}`}>
                    {title}
                </h1>
                <p className={` py-2 md:py-4 lg:py-8 ${styles.paragraph}
                    ${reverse ? "text-right" : "text-left"}
                    ${reverse ? "text-smear-right" : "text-smear-left"}`}>
                        {description}
                </p>
            </div>

            <div className={`${size} min-w-[200px]`}>
                <img src={image} alt={title} className='py-10'/>
            </div>
        </div>
    </div>
  )
}

export default IconPair