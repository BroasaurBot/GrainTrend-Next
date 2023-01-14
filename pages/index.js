import IconList from '../components/IconList';
import Hero from '../components/Hero';
import Quote from '../components/Quote';
import { briefIntro, services, products, membership } from '../content/Home';
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


    <div>
      <Title>Memberships</Title>
      <p className={`${styles.text} ${styles.text_highlight} mb-6`}>{membership.description}</p>
      
      <div className='w-full flex flex-row flex-wrap justify-center gap-7 sm:gap-10 lg:gap-16 my-5'>
        {membership.list.map((link, i) => (

          <div key={i} className='flex flex-col justify-end items-center group'>
            <a href={link.link} target="_blank" rel="noreferrer" className={`flex flex-col items-center
              w-[100px] bg-gren-300`}>
              <h1 className={`text-center mb-3 border-b-2 border-burnt-yellow text-dark-green`}>{link.title}</h1>
              <div className={`${link.size}`}>
                <img src={link.image} alt={link.title} className={`w-full object-fit group-hover:scale-125
                  transition-all duration-200`} />
              </div>
            </a>
          </div>
        ))}
      </div>
    </div>
    </>
  )
}
