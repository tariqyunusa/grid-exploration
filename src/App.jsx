import { useEffect, useState } from 'react'
import './App.css'
import Lenis from 'lenis'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

function App() {
  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.1,
      smoothWheel: true
    });
    lenis.on('scroll', (e) => {
      console.log(e);
    });
    lenis.on('scroll', ScrollTrigger.update);
    gsap.ticker.add((time) => {
      lenis.raf(time * 1000); 
    });
    gsap.ticker.lagSmoothing(0);

  },[])

  return (
    <>
      
    </>
  )
}

export default App
