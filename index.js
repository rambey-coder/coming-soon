gsap.to(".container", {
    y: 10,
    duration: 2,
    ease: Elastic.easeOut.config(1, 0.3),
})

gsap.from(".header", {
    y: 100,
    duration: 2,
    ease: Elastic.easeOut.config(1, 0.3),
    stagger: 0.3,
})


gsap.to(".section", {
    x: 10,
    duration: 2,
    ease: Elastic.easeOut.config(1, 0.3),
    stagger: 0.4
}, '-=0.75')

gsap.to(".fa-brands", {
    rotate: 360,
    duration: 0.6,
    ease: Elastic.easeOut.config(1, 0.3),
    stagger: 0.5
}, '-=0.85')