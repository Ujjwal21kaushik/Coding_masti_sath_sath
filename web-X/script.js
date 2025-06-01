var tl =gsap.timeline()
tl.from(".loder h1",{
    y:40,
    opacity:0,
    duration:0.8,
    stagger:0.8,
    ease:"circ.out",
})
tl.to(".loder h1",{
    y:-40,
    opacity:0,
    stagger:0.1,
})
tl.from(".loder img",{
    y:15,
    opacity:0,
    ease:"elastic.out"
})
tl.to(".loder img",{
    transform:"translateY(-600%)",
    opacity:0,
    delay:0,
    display:"none"
})
tl.from(".page1",{
    y:1000,
    opacity:0,
    ease:"circ.out"
    
})


