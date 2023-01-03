import Image from 'next/image'
import CardInfo from '../components/CardInfo';
import IconPair from '../components/IconPair';
import IconReel from '../components/IconReel';
import Quote from '../components/Quote';
import { briefIntro, services, coreValues } from '../content/Home';
import styles from '../styles/style';

export default function Home() {
  return (
    <>
    <div className="flex flex-col justify-start items-center">
      <p className={`${styles.centerContent}`}>
        {briefIntro.p1}
      </p> 
      <Quote>
        {briefIntro.quote}
      </Quote>
      <p className={`${styles.centerContent}`}>
        {briefIntro.p2}
      </p> 
    </div>
    <div id="Services" className='mt-32'>
      <h1>Services</h1>
      <IconReel reel={services} />
    </div>
    <div id='Core values' className='mt-32'>
      <div className='invisible absolute sm:visible sm:static'>
        <IconPair {... coreValues[0]} reverse={false}/>
        <IconPair {... coreValues[1]} reverse={true}/>
        <IconPair {... coreValues[2]} reverse={false}/>
      </div>
      <div className='visible static sm:invisible sm:absolute
        flex flex-col justify-start items-center gap-6'>
        <CardInfo {... coreValues[0]} />
        <CardInfo {... coreValues[1]} />
        <CardInfo {... coreValues[2]} />
      </div>
    </div>



    </>
  )
}
