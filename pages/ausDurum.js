import styles from '../styles/style';
import { durum } from '../content/Durum';

import Hero from '../components/Hero';
import Quote from '../components/Quote';
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
              <p className={`${styles.text}`}> {durum.more}<br/><br/></p>
              <p className={`${styles.text}`}> {durum.more2}<br/><br/></p>
              <p className={`${styles.text}`}> {durum.more3}<br/><br/></p>
            </div>
            <div className='w-[100%]'>
              <img src={durum.image} alt="Australian Durum" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
    </>
  )
}
