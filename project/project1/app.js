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

document.addEventListener("mousemove", (e) => {
  gsap.to(".cursor", {
    x: e.clientX - 5,
    y: e.clientY - 5,
    duration: 0.3,
    ease: "elastic.out(1,0.3)",
  });
  gsap.to(".shine", {
    x: e.clientX - 140,
    y: e.clientY - 140,
    duration: 0.7,
  });
});

let h4s = document.querySelectorAll("nav h4");

h4s.forEach((h4) => {
  h4.addEventListener("mouseenter", () => {
    gsap.to(".cursor", {
      scale: 3,
      backgroundColor: "transparent",
      border: "1px solid white",
      duration: 0.3,
    });
  });

  h4.addEventListener("mouseleave", () => {
    gsap.to(".cursor", {
      scale: 1,
      backgroundColor: "#9DCB1F",
      border: "none",
      duration: 0.3,
    });
  });
});

let buttons = document.querySelectorAll(" button");

buttons.forEach((btn) => {
  btn.addEventListener("mouseenter", () => {
    gsap.to(".cursor", {
      scale: 3,
      backgroundColor: "transparent",
      border: "1px solid white",
      duration: 0.3,
    });
  });

  btn.addEventListener("mouseleave", () => {
    gsap.to(".cursor", {
      scale: 1,
      backgroundColor: "#9DCB1F",
      border: "none",
      duration: 0.3,
    });
  });
});
let cards = document.querySelectorAll(".card");
let overlays = document.querySelectorAll(".overlay");
let headings = document.querySelectorAll(".heading");

cards.forEach((card, index) => {
  card.addEventListener("mouseenter", () => {
    // Overlay show animation
    gsap.to(overlays[index], {
      autoAlpha: 1,
      duration: 0.4,
      ease: "power2.out",
    });

    // Heading hide
    gsap.to(headings[index], {
      autoAlpha: 0,
      duration: 0.3,
      ease: "power1.out",
    });

    // Cursor enlarge
    gsap.to(".cursor", {
      scale: 3,
      backgroundColor: "transparent",
      border: "1px solid white",
      duration: 0.3,
      ease: "power2.out",
    });
  });

  card.addEventListener("mouseleave", () => {
    // Overlay hide animation
    gsap.to(overlays[index], {
      autoAlpha: 0,
      duration: 0.4,
      ease: "power2.in",
    });

    // Heading show back
    gsap.to(headings[index], {
      autoAlpha: 1,
      duration: 0.3,
      ease: "power1.in",
    });

    // Cursor back to normal
    gsap.to(".cursor", {
      scale: 1,
      backgroundColor: "#9DCB1F",
      border: "none",
      duration: 0.3,
      ease: "power2.in",
    });
  });
});

let image = document.querySelector(".food-img img");
let img1 =
  "https://eiwgew27fhz.exactdn.com/wp-content/uploads/2023/02/cafe-menu-e1702553754869.jpg?strip=all&lossy=1&sharp=1&ssl=1";
let img2 =
  "https://eiwgew27fhz.exactdn.com/wp-content/uploads/2023/02/hero-5.jpg?strip=all&lossy=1&sharp=1&ssl=1";
let img3 =
  "https://eiwgew27fhz.exactdn.com/wp-content/uploads/2023/02/cafe-about-1.jpg?strip=all&lossy=1&sharp=1&ssl=1";

let images = [img1, img2, img3];
let index = 0;
setInterval(() => {
  gsap.to(image, {
    opacity: 0,
    duration: 0.5,
    onComplete: () => {
      index = (index + 1) % images.length;
      image.setAttribute("src", images[index]);
      gsap.to(image, { opacity: 1, duration: 0.5 });
    },
  });
}, 3000);
