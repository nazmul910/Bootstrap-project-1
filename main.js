gsap.from("#gsap-img",{
  x:-500,
  opacity:0,
  duration:2,
})

gsap.from("#gsap-hero",{
  x:500,
  opacity:0,
  duration:2,
})


gsap.from("#features",{
  opacity:0,
  y:50,
  duration:2,
  scrollTrigger:{
    trigger:"#features",
    scroller:"body",
    start:"top 60%",
    end:"top 30%",
    scrub:2,

  }
})

ScrollReveal({ reset: true });
ScrollReveal().reveal('#card .card',{
  distance:'160px',
  origin:"left",
  
  opacity:0,
  duration:2500,
  delay:1,
  interval:200,
})