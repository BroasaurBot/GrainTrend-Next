import IconList from '../components/IconList';
import Hero from '../components/Hero';
import Quote from '../components/Quote';
import { briefIntro, services, products } from '../content/Home';
import styles from '../styles/style';

import Title from '../components/Title';
import PhotoBar from '../components/PhotoBar';

export default function Home() {


  return (
    <>
    <Hero {...{title: "GrainTrend", subtitle: "Partnering Global Agribusienss"}}/>
    <div className="flex flex-col justify-start items-start mb-24 md:mb-36">
      <Title>Welcome to GrainTrend</Title>
      <p className={`${styles.text} ${styles.text_highlight}`}>
        {briefIntro.p1}
        {briefIntro.p2}
      </p> 
      <Quote>
        {briefIntro.quote}
      </Quote>
    </div>


    <div className='mb-24 md:mb-36'>
      <PhotoBar/>
    </div>

    <div id="Services" className='mb-24 md:mb-36'>
      <Title>Services</Title>
      <p className={`${styles.text} ${styles.text_highlight} mb-6`}>{services.description}</p>
      <IconList content={services.list} size={"w-[18rem]"} />
    </div>

    <div id="Products" className='mb-24 md:mb-36'>
      <Title>Products</Title>
      <p className={`${styles.text} ${styles.text_highlight} mb-6`}>{products.description}</p>
      <IconList content={products.list} size={"w-[8rem] sm:w-[12rem] md:w-[16rem]"}/>
    </div>


    </>
  )
}
