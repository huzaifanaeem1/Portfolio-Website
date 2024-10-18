import React from 'react'
import Image from 'next/image'
import Information from './components/Information'
import Education from './components/Education'
import Skill from './components/Skill'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Portfolio from './components/Portfolio'






export default function page() {
  return (
    <div>
      <Information />
      <Education />
      <Skill />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  )
}
