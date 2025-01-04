import React from 'react'
import './Contact.css'
import ContactInforCard from './ContactInforCard'
import ContactHero from './ContactHero'
import ContactForm from './ContactForm'
import ContactFaq from './ContactFaq'

const Contact = () => {
  return (
    <div>
      <ContactHero />
      <ContactInforCard />
      <ContactForm />
      <ContactFaq />
    </div>
  )
}

export default Contact