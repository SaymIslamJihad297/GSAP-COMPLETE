// gsap.to("#box1", {
//     x: 1000,
//     duration: 2,
//     delay: 1,
//     borderRadius: "50%",
//     repeat: -1,
//     yoyo: true,
// })
// gsap.from("#box2", {
//     x: 500,
//     y: 500,
//     delay: 1,
//     duration: 2,
//     rotate: 360,
// })
// gsap.from(".showH1", {
//     opacity: 0,
//     duration: 2,
//     delay: 1,
//     y: 30,
//     stagger: 0.3,
// })

var tl = gsap.timeline();

tl.to("#box1", {
    x: 1000,
    duration: 2,
    delay: 1,
    borderRadius: "50%",
})
tl.to("#box2", {
    x: 1000,
    duration: 2,
    borderRadius: "50%",
})
tl.to("#box3", {
    x: 1000,
    duration: 2,
    borderRadius: "50%",
})