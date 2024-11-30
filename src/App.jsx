import { useEffect } from 'react';
import './App.css';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);
import Lenis from 'lenis'
import { images } from './images';

function App() {
  const firstArray = [...images.slice(0, 9)];
  const secondArray = [...images.slice(9, 18)];
  const thirdArray = [...images.slice(18, 27)];

  useEffect(() => {
    let scrollDirection = 0;
    
    const lenis = new Lenis({lerp: 0.1, smoothWheel: true});
    lenis.on('scroll', (e) => {
      console.log(e);
    });
    lenis.on('scroll', ScrollTrigger.update);
    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);             
    });
    gsap.ticker.lagSmoothing(0);


    
    const scrollTrigger = ScrollTrigger.create({
      trigger: ".scroller__wrapper_cover",
      start: "top top",
      end: "bottom bottom",
      markers: true, 
      scrub: true,
      pin: true,
  
      onUpdate: (self) => {
        const currentScroll = self.scroll();
        if (currentScroll > scrollDirection) {
          // Scrolling down
          gsap.to(".first_scroller_wrapper", { y: `${150 * self.progress }vh`, ease: "none" });
          gsap.to(".second_scroller_wrapper", { y: `${-150 * self.progress}vh`, ease: "none" });
          gsap.to(".third_scroller_wrapper", { y: `${150 * self.progress}vh`, ease: "none" });
        } else if (currentScroll < scrollDirection) {
          // Scrolling up
          gsap.to(".first_scroller_wrapper", { y: `${-150 * self.progress }vh`, ease: "none" });
          gsap.to(".second_scroller_wrapper", { y:`${150 * self.progress }vh`, ease: "none" });
          gsap.to(".third_scroller_wrapper", { y: `${-150 * self.progress }vh`, ease: "none" });
        }

     
        scrollDirection = currentScroll;
      },
    });

    return () => {
      scrollTrigger.kill();
    };
  }, []);

  return (
    <section className="wrapper">
      <section className="redundant__cover">
        
        </section>
        <div className="scroller__wrapper_cover ">
       
        <div className="first_scroller_wrapper" >
          {firstArray.map((img, idx) => (
            <div className="img__holder" key={idx}>
              <img src={img} alt={`image${idx + 1}`} />
            </div>
          ))}
          </div>
      

        
          <div className="second_scroller_wrapper">
          {secondArray.map((img, idx) => (
            <div className="img__holder" key={idx}>
              <img src={img} alt={`image${idx + 1}`} />
            </div>
          ))}
          </div>
       

    
        <div className="third_scroller_wrapper">
          {thirdArray.map((img, idx) => (
            <div className="img__holder" key={idx}>
              <img src={img} alt={`image${idx + 1}`} />
            </div>
          ))}
        
        </div>
      </div>
      <section className="redundant__cover">

      </section>
    </section>
  );
}

export default App;
