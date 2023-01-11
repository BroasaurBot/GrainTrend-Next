import React, {useState, useEffect} from 'react'
import CardInfo from '../components/CardInfo';
import Hero from '../components/Hero';
import IconPair from '../components/IconPair';

import Title from '../components/Title'
import { Team, AustralianDurum , coreValues} from '../content/About';
import styles from '../styles/style';

export default function AboutPage() {

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

  const iconPairs = () => {
    return (
        <div className=''>
          <IconPair {... coreValues.values[0]} reverse={false}/>
          <IconPair {... coreValues.values[1]} reverse={true}/>
          <IconPair {... coreValues.values[2]} reverse={false}/>
        </div>
    );
  }

  const cardInfos = () => {
    return (
          <div className='flex flex-col justify-start items-center gap-8'>
            <CardInfo {... coreValues.values[0]} />
            <CardInfo {... coreValues.values[1]} />
            <CardInfo {... coreValues.values[2]} />
          </div>
    );
  }

  return (
    <>
      <Hero {...{title: "About Us"}}/>
      <div>
        <div id="Team" className="mb-24 md:mb-36">
          <Title>Meet the Team</Title>
          <p className={`${styles.text} ${styles.text_highlight}`}>
            {Team.text}
          </p>

          <div className='flex  flex-wrap justify-around items-center gap-10 md:gap-16 mt-14'>
            <CardInfo {...Team.members[0]} />
            <CardInfo {...Team.members[1]} />
            <CardInfo {...Team.members[2]} />
          </div>

        </div>

        <div id='Core values' className='mb-16'>
          <Title>Core Values</Title>
          <p className={`${styles.text} ${styles.text_highlight} mb-12`}>{coreValues.description}</p>
          {mobile ? cardInfos() : iconPairs()}
        </div>

      </div>
    </>
  )

}
