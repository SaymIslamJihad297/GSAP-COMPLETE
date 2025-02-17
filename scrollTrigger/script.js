gsap.from("#page1 #box", {
    rotate: 360,
    duration: 1,
})
gsap.from("#page2 h1", {
    x: -30,
    opacity: 0,
    duration: 1,
    scrollTrigger: {
        trigger: "#page2 h1",
        scroller: "body",
        markers: true,
        start: "top 50%"
    }
})
gsap.from("#page2 h2", {
    x: -30,
    opacity: 0,
    duration: 1,
    scrollTrigger: {
        trigger: "#page2 h2",
        scroller: "body",
        markers: true,
        start: "top 50%"
    }
})

gsap.from("#page3 #box", {
    rotate: 760,
    opacity: 0,
    duration: 1,
    scrollTrigger: {
        trigger: "#page3 #box",
        scroller: "body",
        markers: true,
        start: "top 60%",
        end: "top 30%",
        scrub: 2,
    }
})
