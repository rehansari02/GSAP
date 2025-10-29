let tl = gsap.timeline();

let menu = document.querySelector(".ri-menu-3-line");
let close = document.querySelector(".ri-close-line");
let flag = 0;

function start() {
  if (flag === 0) {
    flag++;
    tl.from("nav h1", {
      y: -100,
      opacity: 0,
      duration: 0.5,
    });
    tl.from("nav i", {
      y: -100,
      opacity: 0,
      duration: 0.5,
    });
  }
}
start();

function menuCard() {
  tl.to(".right", {
    right: "0",
    duration: 0.5,
  });
  tl.from(".right h4", {
    stagger: 0.2,
    opacity: 1,
    x: 500,
  });
  tl.from(".right .ri-close-line", {
    y: -150,
    opacity: 1,
    duration: 0.5,
  });
}

menu.addEventListener("click", () => {
  menuCard();
});

close.addEventListener("click", () => {
  tl.reverse();
});
