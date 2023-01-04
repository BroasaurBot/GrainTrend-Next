import React from 'react'
import CardInfo from '../components/CardInfo';
import PhotoBar from '../components/PhotoBar'
import Title from '../components/Title'
import { Team } from '../content/About';
import styles from '../styles/style';

export default function AboutPage() {
  return (
    <>
      <div className='flex flex-col justify-start items-center'>
        <div id="Team">
          <Title>Team</Title>
          <p className={`${styles.paragraph} text-smear my-12 px-16`}>
            {Team.text}
          </p>

          <div className='flex flex-col sm:flex-row justify-around items-center gap-10 md:gap-16 my-14'>
            <CardInfo {...Team.members[0]} />
            <CardInfo {...Team.members[1]} />
          </div>

        </div>
        <PhotoBar />
        <div id="History">
          <Title>History</Title>
        </div>
      </div>
    </>
  )
}
