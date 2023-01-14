import React , {useState} from 'react'
import styles from '../styles/style';

function IconList({content, size}) {

  return (
    <div>
        <div className="flex flex-row flex-wrap justify-center gap-3 sm:gap-6">
            {content.map((service, index) => (

                <div key={index} className="relative flex flex-col max-w-[22rem]
                    rounded-lg shadow-xl items-center p-1 sm:p-2
                    bg-slate-100  border-b-4 border-burnt-yellow
                    group hover:bg-slate-200">
                    <div className={`flex flex-row justify-start ${size} max-w-[22rem]
                        items-center p-3 `}>
                        <div className={`${service.size}`}>
                            <img src={service.image} className='object-cover'></img>
                        </div>
                        <div className='relative flex flex-col justify-center ml-auto'>
                            <h1 className={`${styles.sub_title_small} text-dark-green`}>
                                {service.title}
                            </h1>
                            {service.description != "" &&
                                <p className='underline text-darkened-yellow'>
                                    Read more
                                </p>}
                        </div>
                    </div>

                    {service.description != "" && 
                    <div className={`absolute top-[99%] z-0 bg-white shadow border-b-4 border-burnt-yellow
                        overflow-scroll group-hover:h-[250px] h-0 group-hover:p-3 p-0 group-hover:z-[5]
                        transition-all duration-500 ease-in-out`}>
                        <p className={`${styles.text}`}>{service.description}</p>
                    </div>}
                </div>
            ))}
        </div>
    </div>
  )
}

export default IconList;