var initialPath = `M 10 100 Q 100 100 990 100`;

var finalPath = `M 10 100 Q 100 100 990 100`;

var string = document.querySelector("#string");

string.addEventListener("mousemove", (dets) => {
    let path = `M 10 100 Q ${dets.x} ${dets.y} 990 100`

    console.log(dets.x);

    gsap.to("svg path", {
        attr: { d: path },
        duration: 0.3,
        ease: "power3.out"
    })
})
string.addEventListener("mouseleave", () => {
    gsap.to("svg path", {
        attr: { d: initialPath },
        ease: "elastic.out(1,0.2)",
        duration: 1.5,
    })
})