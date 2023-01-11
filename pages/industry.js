import React from 'react'
import Hero from '../components/Hero'

import Title from '../components/Title'
import { vendorDocuments, webLinks } from '../content/Industry'
import styles from '../styles/style'

export default function IndustryPage() {
  return (
    <div>
      <Hero {...{title: "Industry"}}/>
      <div>
        <Title>Vendor Documents</Title>
        <p className={`${styles.text_lg} mb-8`}>{vendorDocuments.description}</p>

        <div id="Documents" className='mb-24 md:mb-36'>
          <div className='flex flex-col sm:flex-row justify-around items-center gap-8 md:gap-14'>
            {vendorDocuments.documents.map((doc, i) => (
              <div key={i} className='relative flex flex-col justify-start items-center group
                h-[180px] sm:h-full overflow-clip max-w-[80%]'>
                <h2 className={`${styles.sub_title_small} text-center text-dark-green`}>{doc.title}</h2>
                <a href={doc.link} download 
                    className='rounded-xl text-smear-both p-3 vertical-mask flex flex-col items-center'>
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

      <div>
        <Title>Web Links</Title>
        <p className={`${styles.text_lg}`}>
          {webLinks.description}
        </p>
        
        <div className='w-full flex flex-row flex-wrap justify-center gap-7 sm:gap-10 lg:gap-16 my-5'>
          {webLinks.links.map((link, i) => (
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
    </div>
  )
}
