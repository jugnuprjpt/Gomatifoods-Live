import React from 'react'
import About from '../About/About'
import Contact from '../Contact/Contact'
import Mit from '../Mitesh/Mit'
import Trolly from '../ProductCard/Trolly'
import ResuableService from '../Resuable/ResuableService'
import Slider from '../Slider/Slider'

const MainPage = () => {
  return (
    <>
      <Slider></Slider>
      <About></About>
      <Mit></Mit>
      {/* <ResuableService></ResuableService> */}
      <Trolly></Trolly>
      <Contact></Contact>
    </>
  )
}

export default MainPage
