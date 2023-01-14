import styles from '../styles/style';
import { durum } from '../content/Durum';

import Hero from '../components/Hero';
import Button from '../components/Button';
import Title from '../components/Title';

export default function Home() {


  return (
    <>
        <Hero {...{title: "Australian Durum Company"}}/>

        <div className="mb-16" id="Australian Durum">
        <Title>Durum Specialists</Title>

          <p className={`${styles.text} ${styles.text_highlight}`}>
            {durum.main} 
          </p>
          <div className="flex flex-col sm:flex-row w-full gap-3 sm:gap-8">
            <div>
              <p className={`${styles.text}`}> {durum.description}</p>

              <div className='flex flex-row items-center'>
                <p className={`${styles.text} font-semibold text-dark-green`}> {durum.callToAction}</p>
                <div className='shrink-0 h-full p-3'>
                  <Button path="/contact">
                    <div className='m-3'>Contact us</div>
                  </Button>
                </div>
              </div>

            </div>
            <div className='w-[100%] shadow-xl m-3 p-3'>
              <img src={durum.image} alt="Australian Durum" className="w-full h-full object-cover shadow-xl" />
            </div>
          </div>
        </div>
    </>
  )
}
