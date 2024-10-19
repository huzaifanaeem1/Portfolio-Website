import React from 'react'
import Image from 'next/image'
import Information from './components/Information'
import Education from './components/Education'
import Skill from './components/Skill'
import Portfolio from './components/Portfolio'
import Contact from './components/Contact'
import Footer from './components/Footer'






export default function Home() {
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
