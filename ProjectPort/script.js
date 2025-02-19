

// animate navbar
var tl = gsap.timeline();

tl.from("#nav #navFirstDiv", {
    y: -50,
    opacity: 0,
    duration: 0.7,
}, "one")
tl.from("#nav #navSecondDiv h3", {
    y: -50,
    opacity: 0,
    duration: 0.7,
    stagger: 0.15,
})
tl.from("#nav #navThirdDiv", {
    y: -50,
    opacity: 0,
    duration: 0.7,
    stagger: 0.15,
}, "one")


// animate tattoo secton
var TaTTooTextContainer = document.querySelector("#TattooText");
console.log(TaTTooTextContainer);

var TaTTooText = TaTTooTextContainer.innerHTML;

var TaTTooTextSplitted = TaTTooText.split("");

let newText = ""

TaTTooTextSplitted.forEach(element => {
    newText += `<tspan class='inline-block'>${element}</tspan>`
});

TaTTooTextContainer.innerHTML = newText;
// console.log("DOne");


gsap.from("#TattoGroup", {
    y: 50,
    duration: 1,
    opacity: 0,
    delay: 1,
})

gsap.from("#TattooText tspan", {
    opacity: 0,
    duration: 1,
    delay: 1,
    stagger: 0.15,
});


// custom mouse cursor
const cursor = document.querySelector("#cursor");
const main = document.querySelector("#main");
main.addEventListener("mousemove", (dets) => {
    gsap.to(cursor, {
        x: dets.x,
        y: dets.y,
    })
})

// animate svg

tl.from("#mainImage", {
    y: 150,
    duration: 1,
    opacity: 0,
}, "one")