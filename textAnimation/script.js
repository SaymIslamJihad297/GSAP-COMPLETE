function breakText() {
    var h1 = document.querySelector("#main h1");
    var h1Text = h1.innerText;

    var splittedText = h1Text.split("");

    // console.log(h1Text);

    let clutter = ""
    splittedText.forEach(element => {
        // console.log(element);
        clutter += `<span>${element}</span>`
    });
    h1.innerHTML = clutter;
}

breakText();

gsap.from("h1 span", {
    y: 50,
    duration: 0.8,
    opacity: 0,
    stagger: 0.15,
})