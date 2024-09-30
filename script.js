let container = document.querySelector(".container");
let slider = document.querySelector(".slider");
let slides = document.querySelectorAll(".slide");
let prev = document.querySelector(".prev");
let next = document.querySelector(".next");
let image = document.querySelector("#img1")
let img2 = document.querySelector("#img2")


container.addEventListener("mouseout", function () {
    prev.style.display = "none";
    next.style.display = "none";
})
container.addEventListener("mouseenter", function () {
    prev.style.display = "block";
    next.style.display = "block";
})


image.addEventListener("mouseenter", function () {
    gsap.to("#img1", {
        scale: 1.05,
        duration:1,
        ease: "power2",
       transformOrigin: "center"
    })
})
image.addEventListener("mouseout", function () {
    gsap.to("#img1", {
        scale: 1,
        duration:1,
       
    })
})


img2.addEventListener("mouseenter", function () {
    gsap.to("#img2", {
        scale: 1.05,
        duration:1,
        ease: "power2",
        transformOrigin: "center"
    })
})
img2.addEventListener("mouseout", function () {
    gsap.to("#img2", {
        scale: 1,
        duration:1,
    })
})






  


