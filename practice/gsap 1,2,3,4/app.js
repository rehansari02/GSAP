gsap.to(".page2 h1", {
  x: -1200,
  scrollTrigger: {
    trigger: ".page2",
    start: "top 0%",
    end: "bottom -100%",
    scrub: true,
    markers: true,
    pin: true,
  },
});

let initial = "M 10 80 Q 350 80 900 80";

let final = "M 10 80 Q 350 120 900 80";

let str = document.querySelector(".string");

str.addEventListener("mousemove", (dets) => {
  let path = `M 10 80 Q 350 ${dets.y} 900 80`;

  gsap.to("svg path", {
    attr: { d: path },
    duration: 0.3,
    ease: "power3.out",
  });
});

str.addEventListener("mouseleave", () => {
  gsap.to("svg path", {
    attr: { d: initial },
    duration: 1,
    ease: "elastic.out(1, 0.3)",
  });
});

// cursor

let cursor = document.querySelector(".cursor");
let main = document.querySelector("main");
main.addEventListener("mousemove", (dets) => {
  gsap.to(cursor, {
    x: dets.x - 20,
    y: dets.y - 20,
    duration: 2,
    ease: "elastic.out(1,0.3)",
  });
});


