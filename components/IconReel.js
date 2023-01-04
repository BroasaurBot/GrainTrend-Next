import React from 'react'
import {useEffect, useState} from 'react';

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

    const selectStyle = "highlight"
    const unselectedStyle = "highlight-light"

    return (
    <div className='mx-5 min-h-[25rem]'>
        <div className='max-w-4xl mx-auto'>
            <div className="flex flex-row flex-wrap justify-around items-center">
                {reel.map((service, index) => (
                    <div className='flex flex-col items-center pt-4' key={index} onClick={() => handleMouseEnter(index)}>

                        <button className={`w-20 md:w-32 xl:w-40 h-20 md:h-32 xl:h-40 rounded-full z-10
                            ${index == selection ? selectStyle : unselectedStyle} 
                            p-4 ${service.size}`}>
                            <img unselectable='on' 
                                className={`w-full z-0
                                ${index == selection ? "contrast-100" : "contrast-50 hover:contrast-100"}`} 
                                src={service.image} alt={service.title} />
                        </button>

                        <h1 className={`mt-3 font-mono ${index==selection ? "font-bold" : ""}`}>
                            {service.title}
                        </h1>
                    </div>
                ))}
            </div>

            <div className='px-5 sm:px-16 lg:px-32 py-5 my-2 text-smear h-[200px]'>
                <p className='text-center text-lg lg:text-xl'>
                    {reel[selection].description}
                </p>
            </div>
        </div>
    </div>
    )
}

export default IconReel