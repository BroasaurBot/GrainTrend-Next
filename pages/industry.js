import React from 'react'
import Header from '../components/Header'

import Title from '../components/Title'
import { vendorDocuments } from '../content/Industry'
import styles from '../styles/style'

export default function IndustryPage() {
  return (
    <div>
      <Header {...{title: "Industry"}}/>
      <Title>Vendor Documents</Title>
      <div>
        <p>{vendorDocuments.description}</p>

        <div id="Documents">
          <div className='flex flex-col sm:flex-row justify-around items-center gap-8 md:gap-14 my-14'>
            {vendorDocuments.documents.map((doc, i) => (
              <div key={i} className='relative flex flex-col justify-start items-center group
                h-[220px] sm:h-full overflow-clip'>
                <h2 className={`${styles.sub_title_small} text-center text-dark-green`}>{doc.title}</h2>
                <a href={doc.link} download 
                    className='rounded-xl text-smear p-3 vertical-mask flex flex-col items-center'>
                  <img src={doc.image} alt={doc.title} 
                    className="w-full h-full contrast-[0.9] group-hover:contrast-[1]" />

                  <button className="absolute rounded-xl bottom-12 w-[60%] h-10 sm:h-8 md:h-10
                    flex flex-col items-center overflow-hidden
                    bg-blue-400 group-hover:bg-blue-500
                    group-hover:h-16 group-hover:sm:h-12 group-hover:md:h-16 transition-all duration-100">
                    <img src='/download.png' alt='download' className='w-10 h-10 sm:w-8 sm:h-8 md:w-10 md:h-10' />
                    <p className='text-base sm:text-xs lg:text-base'>Click to Download</p>
                  </button>
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Title>Web Links</Title>
      <div>

      </div>
    </div>
  )
}
