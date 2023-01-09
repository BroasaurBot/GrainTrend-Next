import React from 'react'

import Header from '../components/Header';
import styles from '../styles/style';
import { contactInfo } from '../content/Contact';

export default function ContactPage() {
  return (
    <div>
      <Header {...{title: "Contact Us"}}/>

      <p className={`${styles.sub_title} text-dark-green mb-3`}>
        {contactInfo.title} 
      </p>
      <p className={`${styles.paragraph}`}>{contactInfo.description}</p>
      <div className="flex flex-col sm:flex-row justify-between items-start gap-8 md:gap-12 my-4 sm:pl-10" >
        <div className='w-full'>
          {contactInfo.contacts.map((contact, index) => (
            <div key={index} className="flex flex-row justify-start items-start gap-4 my-4">
              <img src={contact.icon} alt={contact.title} className={`${contact.size} object-fit`} />
              <p className='w-16 text-right'>{contact.title}:</p>
              <div className='max-w-[300px]'>{contact.link}</div>
            </div>
          ))}
        </div>

        <div className='p-3 self-center w-full h-[280px] md:h-[250px] bg-sunset-yellow'>
          <h1 className={`${styles.sub_title_small} text-right text-dark-green`}>Find us here</h1>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3312.4139644959764!2d151.23346631618932!3d-33.87899098065339!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b12ade1bb5e2109%3A0xa98aca6b865bf73!2s23%2F233%20New%20South%20Head%20Rd%2C%20Edgecliff%20NSW%202027!5e0!3m2!1sen!2sau!4v1673235930144!5m2!1sen!2sau"
            className="w-full h-full box drop-shadow-lg"
            Allowfullscreen="true" Loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>
      </div>
    </div>
  )
}
