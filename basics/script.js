gsap.to("#box1", {
    x: 1000,
    duration: 2,
    delay: 1,
    borderRadius: "50%",
})
gsap.from("#box2", {
    x: 500,
    y: 500,
    delay: 1,
    duration: 2,
    rotate: 360,
})
gsap.from(".showH1", {
    opacity: 0,
    duration: 2,
    delay: 1,
    y: 30,
    stagger: 0.3,
})