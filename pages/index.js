import Image from 'next/image'
import CardInfo from '../components/CardInfo';
import IconPair from '../components/IconPair';
import IconReel from '../components/IconReel';
import Header from '../components/Header';
import Quote from '../components/Quote';
import { briefIntro, services, coreValues } from '../content/Home';
import styles from '../styles/style';

import { useState, useEffect } from 'react';
import Title from '../components/Title';

export default function Home() {

  const [mobile, setMobile] = useState(false);
  useEffect(() => {
    const changeMobile = () => {
      if (window.innerWidth < 640) {
        setMobile(true);
      } else {
        setMobile(false);
      }
    }

    window.addEventListener('resize', changeMobile);
    changeMobile();

    return () => window.removeEventListener('resize', changeMobile);
  }, []);

  return (
    <>
    <div className="flex flex-col justify-start items-center">
      <Header {...{title: "GrainTrend", subtitle: "Partnering Global Agribusienss"}}/>
      <Quote>
        {briefIntro.quote}
      </Quote>
      <p className={`${styles.centerContent}`}>
        {briefIntro.p1}
        {briefIntro.p2}
      </p> 
    </div>


    <div id="Services" className='mt-32'>

      <Title>Services</Title>
      <IconReel reel={services} />
    </div>
    <div id='Core values' className='mt-32'>
      <Title>Core Values</Title>
      {mobile ? cardInfos() : iconPairs()}
    </div>


    </>
  )
}

const iconPairs = () => {
  return (
      <div className=''>
        <IconPair {... coreValues[0]} reverse={false}/>
        <IconPair {... coreValues[1]} reverse={true}/>
        <IconPair {... coreValues[2]} reverse={false}/>
      </div>
  );
}

const cardInfos = () => {
  return (
        <div className='flex flex-col justify-start items-center gap-6'>
          <CardInfo {... coreValues[0]} />
          <CardInfo {... coreValues[1]} />
          <CardInfo {... coreValues[2]} />
        </div>
  );
}