function page1Animation() {
  let tl = gsap.timeline();
  tl.from(".page1 h1", {
    y: -50,
    opacity: 0,
    duration: 0.5,
    delay: 0.2,
  });

  tl.from("nav .part2 h4,nav .part2 button", {
    y: -50,
    opacity: 0,
    duration: 0.5,
    stagger: 0.2,
  });

  tl.from(
    ".center-part1",
    {
      x: -50,
      opacity: 0,
      duration: 0.5,
    },
    "truu"
  );
  tl.from(
    ".center-part2",
    {
      x: 50,
      opacity: 0,
      duration: 0.5,
    },
    "truu"
  );
  tl.from(".page1 .bottom img", {
    y: 50,
    opacity: 0,
    duration: 0.5,
    stagger: 0.2,
  });
}
function page2Animation() {
  let tl2 = gsap.timeline({
    scrollTrigger: {
      trigger: ".page2",
      scroller: "body",
      start: "top 50%",
      end: "top 0%",
      scrub: 1,
    },
  });
  tl2.from(".service", {
    x: -100,
    opacity: 0,
    duration: 0.5,
  });
  tl2.from(
    ".container .left1",
    {
      x: -100,
      opacity: 0,
      duration: 0.5,
      stagger: 0.2,
    },
    "same"
  );
  tl2.from(
    ".container .right1",
    {
      x: 100,
      opacity: 0,
      duration: 0.5,
      stagger: 0.2,
    },
    "same"
  );
  tl2.from(
    ".container .left2",
    {
      x: -100,
      opacity: 0,
      duration: 0.5,
      stagger: 0.2,
    },
    "noo"
  );
  tl2.from(
    ".container .right2",
    {
      x: 100,
      opacity: 0,
      duration: 0.5,
      stagger: 0.2,
    },
    "noo"
  );
}
function page3Animation() {
  let tl3 = gsap.timeline({
    scrollTrigger: {
      trigger: ".page3",
      scroller: "body",
      start: "top 50%",
      end: "top 0%",
      scrub: 1,
    },
  });

  tl3.from(".page3 .p3-part1", {
    y: 100,
    opacity: 0,
    duration: 0.5,
  });
  tl3.from(".page3 .study ", {
    x: -100,
    opacity: 0,
    duration: 0.5,
  });
  tl3.from(".page3 .p3-part2 ", {
    x: 100,
    opacity: 0,
    duration: 0.5,
  });
}

page1Animation();
page2Animation();
page3Animation();
