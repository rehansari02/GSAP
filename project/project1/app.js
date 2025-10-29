gsap.to("main", {
  backgroundColor: "black",
  scrollTrigger: {
    trigger: ".page2",
    start: "top 70%",
    end: "top 30%",
    scrub: 3,
  },
});

gsap.to("nav", {
  backgroundColor: "rgb(0, 0, 0 )",
  height: "100px",
  scrollTrigger: {
    trigger: "nav",
    start: "top -10%",
    end: "top -11%",
    scrub: 1,
  },
});

let main = document.querySelector("main");

main.addEventListener("mousemove", (e) => {
  gsap.to(".cursor", {
    x: e.clientX - 5,
    y: e.clientY - 5,
    duration: 0.3,
  });
});
