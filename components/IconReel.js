import React from 'react'
import {useEffect, useState} from 'react';
import styles from '../styles/style';

function IconReel({reel}) {

    const [selection , setSelected] = useState(0);
    const [hasSelected, sethasSelected] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            if (!hasSelected) {
                setSelected((selection + 1) % reel.length);
            }
        }, 3000);
        return () => clearInterval(interval);
    }, [selection, hasSelected]);

    const handleMouseEnter = (index) => {
        setSelected(index);
        sethasSelected(true);
    }

    const selectStyle = "highlight rounded"
    const unselectedStyle = "highlight-light"

    return (
    <div className='min-h-[22rem]'>
        <div className='block md:flex flex-row'>

            <div className="flex flex-row flex-wrap justify-around items-center w-full md:w-[50%]">
                {reel.map((service, index) => (
                    <div className='flex flex-col items-center pt-4' key={index} onClick={() => handleMouseEnter(index)}>

                        <button className={`w-20 md:w-32 xl:w-40 h-20 md:h-32 xl:h-40 rounded-full z-10
                            ${index == selection ? selectStyle : unselectedStyle} 
                            p-4 ${service.size} transition-all duration-700 ease-in-out`}>
                            <img unselectable='on' 
                                className={`w-full z-0
                                ${index == selection ? "contrast-100" : "contrast-[0.2] hover:contrast-100"}`} 
                                src={service.image} alt={service.title} />
                            <h1 className={`mt-3 text-sm text-center ${index==selection ? "font-bold" : ""}`}>
                                {service.title}
                            </h1>
                        </button>

                    </div>
                ))}
            </div>

            <div className={`${styles.text} ${styles.text_highlight} w-full md:w-[50%]`}>
                <p className={`${styles.text}`}>
                    {reel[selection].description}
                </p>
            </div>
        </div>
    </div>
    )
}

export default IconReel