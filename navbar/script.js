var tl = gsap.timeline();

tl.from("#part1", {
    y: -20,
    opacity: 0,
    duration: 0.5,
    delay: 0.5,
})

tl.from("nav div p", {
    y: -20,
    opacity: 0,
    duration: 1,
    stagger: 0.3,
})

tl.from("#MainText", {
    y: -30,
    opacity: 0,
    duration: 1,
})