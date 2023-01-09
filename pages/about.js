import React from 'react'
import CardInfo from '../components/CardInfo';
import Header from '../components/Header';
import PhotoBar from '../components/PhotoBar'
import Title from '../components/Title'
import { Team, AustralianDurum } from '../content/About';
import styles from '../styles/style';

export default function AboutPage() {
  return (
    <>
      <Header {...{title: "About Us"}}/>
      <div className='flex flex-col justify-start items-center'>
        <div id="Team">
          <Title>Team</Title>
          <p className={`${styles.centerContent} text-smear my-6 px-8 py-3 md:px-16`}>
            {Team.text}
          </p>

          <div className='flex flex-col sm:flex-row justify-around items-center gap-10 md:gap-16 my-14'>
            <CardInfo {...Team.members[0]} />
            <CardInfo {...Team.members[1]} />
          </div>

        </div>
        <PhotoBar />
        <div className="mt-12 mb-6" id="Australian Durum">
          <Title>Australian Durum Company</Title>

          <p className={`${styles.centerContent} text-smear my-6 px-8 py-3 md:px-16`}>
            {AustralianDurum.main} 
          </p>
          <div className="flex flex-col sm:flex-row w-full gap-3 sm:gap-8">
            <div>
              <p className={`${styles.paragraph}`}> {AustralianDurum.more}<br/><br/></p>
              <p className={`${styles.paragraph}`}> {AustralianDurum.more2}<br/><br/></p>
              <p className={`${styles.paragraph}`}> {AustralianDurum.more3}<br/><br/></p>
            </div>
            <div className='w-[100%]'>
              <img src={AustralianDurum.image} alt="Australian Durum" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
