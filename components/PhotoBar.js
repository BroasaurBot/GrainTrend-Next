import React from 'react';
import { useState, useEffect } from 'react';

let imageNames = [
  '/bar/img1.JPG',
  '/bar/img2.jpg',
  '/bar/img3.jpg',
  '/bar/img4.jpg',
  '/bar/img5.jpg',
  '/bar/img6.jpg',
  '/bar/img7.jpg',
  '/bar/img8.jpg',
  '/bar/img9.JPG',
  '/bar/img10.JPG',
  '/bar/img11.JPG',
  '/bar/img12.JPG',
  '/bar/img13.JPG',
  '/bar/img14.JPG',
  '/bar/img15.JPG',
  '/bar/img17.JPG'
];

const maxReelSize = 8;
const rotateRate = 8000;
const dimTime = 500;
const imageCount = imageNames.length;

function arrayRotate(arr, times) {
  for(let i = 0; i < times; i++) {
    arr.push(arr.shift());
  }
  return arr;
}
function PhotoBar() {

  let startIndex = Math.floor((Math.random() * imageCount));
  const [imageReel, setReel] = useState(arrayRotate([...imageNames], startIndex));
  const [imageDim, setDim] = useState('notdim');

  useEffect(() => {
    const interval = setInterval(() => {
      setReel(arrayRotate([...imageReel], 2));
      setDim('notdim');
    }, rotateRate);

    return () => clearInterval(interval)
  }
  , [imageReel]);

  useEffect(() => {
    const interval = setInterval(() => {
      setDim('dim');
    }, rotateRate - dimTime);

    return () => clearInterval(interval)
  }
  , [imageDim]);


  
  return (
    <>
        <div id='photobar' className='w-full h-full'>
            <div className="flex flex-row gap-2 md:gap-4 items-center justify-center
              overflow-x-hidden w-full h-full bar-mask" >
              {imageReel.slice(0, maxReelSize).map((img) => {
                return (
                  <div key={img} className='h-44 w-32 md:h-52 md:w-40 shrink-0' >
                    <img src={img} alt='Grain' className={`object-cover h-full w-full
                    transition-opacity duration-500
                    ${imageDim == 'dim' ? "opacity-0" : "opacity-100"}`}/>
                  </div>
                )})}
            </div>
        </div>
    </>
  )
}

export default PhotoBar