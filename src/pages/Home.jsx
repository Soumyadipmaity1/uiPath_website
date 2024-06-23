import React from 'react'
import Navbar from '../components/navbar'
import Slider from '../components/slider'
import Community from '../components/community'
import Believe from '../components/believe'
import About from '../components/about'
import Testimonial from '../components/Testimonial'
import Footer from '../components/footer'
import Champion from '../components/champion'
import Leads from '../components/Leads'
import Mentor from '../components/Mentor/mentor'
import Advisory from '../components/Advisory'
import FormerLead from '../components/Former Lead/FormerLead'
import UiPathInfo from '../components/UiPath'
// import loading from "../aassets/loading.mp4";

export default function Home() {
  return (
    <div>
      <Navbar/>
      <Slider/>
      <Community/>
      <Believe/>
      <About/>
      <UiPathInfo/>
      <Champion/>
      <Mentor/>
      <Advisory/>
      <Leads/>
      <FormerLead/>
      <Testimonial/>
      <Footer/>
    </div>
  )
}
