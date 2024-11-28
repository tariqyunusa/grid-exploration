import gsap from "gsap"
import ScrollTrigger from "gsap/ScrollTrigger"

export const slideAnim = () => {
    gsap.registerPlugin(ScrollTrigger)
    const tl = gsap.timeline()
    tl.to(".first_scroller_wrapper",{
        ScrollTrigger: {
            trigger: "scroller__wrapper_cover",
            start: "top top",
            end: "bottom bottom",
            markers: true,
            scrub: true,
            pin: true
        },
        y: "-50%",
        ease: "none"

    } )
}