import React from 'react'
import Navbar from '../Navbar/Navbar'
import Hero from '../Hero/Hero'
import Programs from '../Programs/Programs'
import Title from '../Title/Title'
import About from '../About/About'
import Campus from '../Campus/Campus'
import Testimonials from '../Testimonials/Testimonials'
import Contact from '../Contact/Contact'
import Footer from '../Footer/Footer'
import VideoPlayer from '../VideoPlayer/VideoPlayer'
import { useState } from 'react'

const Home = () => {

const [playState, setPlayState] = useState(false);


  return (
    
    <div>
      <Navbar/>
      <Hero/>
      
      <div className="container">
        <Title subTitle='OUR PROGRAM' title='What we offer'/>
        <Programs url="programs"/>
        <About  setPlayState ={setPlayState}/>
        <Title subTitle='Gallery' title='Campus photos'/>
        <Campus/>
        <Title subTitle='testimonials' title='What a student says'/>
        <Testimonials/>
        <Title subTitle='contact us' title='Get in touch'/>
        <Contact/>
        <Footer/>
        </div>
     <VideoPlayer playState={playState} setPlayState={setPlayState}/>
    </div>
  )
}

export default Home