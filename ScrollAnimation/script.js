gsap.to("#page2 h1", {
    transform: "translateX(-80%)",
    scrollTrigger: {
        trigger: "#page2",
        scroller: "body",
        markers: true,
        scrub: 2,
        pin: true
    }
})