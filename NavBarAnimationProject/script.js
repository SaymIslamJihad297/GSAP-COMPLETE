let tl = gsap.timeline();

const menu = document.querySelector("#nav i");
const close = document.querySelector("#menu i");
const cursor = document.querySelector("#cursor")
const main = document.querySelector("#main")

tl.to("#menu", {
    right: 0,
    duration: 0.5,
})
tl.from("#menu h4", {
    x: 100,
    opacity: 0,
    duration: 0.7,
    stagger: 0.3,
})

tl.pause();

menu.addEventListener("click", () => {
    tl.play();
})
close.addEventListener("click", () => {
    tl.reverse();
});

main.addEventListener("mousemove", (dets) => {
    // console.log(dets.x);
    gsap.to(cursor, {
        duration: 0.5,
        x: dets.x,
        y: dets.y,
    })
})