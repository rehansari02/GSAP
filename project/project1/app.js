// =======================
// 🔰 GSAP Animations (Modular Code)
// =======================

// 🌙 Background Change on Scroll
function setupBackgroundScroll() {
  gsap.to("main", {
    backgroundColor: "black",
    scrollTrigger: {
      trigger: ".page2",
      start: "top 70%",
      end: "top 30%",
      scrub: 3,
    },
  });
}

// 🧭 Navbar Animation on Scroll
function setupNavbarScroll() {
  gsap.to("nav", {
    backgroundColor: "rgb(0, 0, 0)",
    height: "100px",
    scrollTrigger: {
      trigger: "nav",
      start: "top -10%",
      end: "top -11%",
      scrub: 1,
    },
  });
}

// 🖱️ Custom Cursor + Shine Movement
function setupCursor() {
  document.addEventListener("mousemove", (e) => {
    gsap.to(".cursor", {
      x: e.clientX - 5,
      y: e.clientY - 5,
      duration: 0.3,
      ease: "elastic.out(1, 0.3)",
    });

    gsap.to(".shine", {
      x: e.clientX - 140,
      y: e.clientY - 140,
      duration: 0.7,
    });
  });
}

// 🌟 Cursor Hover Effects
function setupHoverCursorEffect(elements) {
  elements.forEach((el) => {
    el.addEventListener("mouseenter", () => {
      gsap.to(".cursor", {
        scale: 3,
        backgroundColor: "transparent",
        border: "1px solid white",
        duration: 0.3,
      });
    });

    el.addEventListener("mouseleave", () => {
      gsap.to(".cursor", {
        scale: 1,
        backgroundColor: "#9DCB1F",
        border: "none",
        duration: 0.3,
      });
    });
  });
}

// 🍔 Card Hover Effects (Overlay + Heading + Cursor)
function setupCardEffects() {
  const cards = document.querySelectorAll(".card");
  const overlays = document.querySelectorAll(".overlay");
  const headings = document.querySelectorAll(".heading");

  cards.forEach((card, index) => {
    card.addEventListener("mouseenter", () => {
      gsap.to(overlays[index], {
        autoAlpha: 1,
        duration: 0.4,
        ease: "power2.out",
      });
      gsap.to(headings[index], {
        autoAlpha: 0,
        duration: 0.3,
        ease: "power1.out",
      });
      gsap.to(".cursor", {
        scale: 3,
        backgroundColor: "transparent",
        border: "1px solid white",
        duration: 0.3,
      });
    });

    card.addEventListener("mouseleave", () => {
      gsap.to(overlays[index], {
        autoAlpha: 0,
        duration: 0.4,
        ease: "power2.in",
      });
      gsap.to(headings[index], {
        autoAlpha: 1,
        duration: 0.3,
        ease: "power1.in",
      });
      gsap.to(".cursor", {
        scale: 1,
        backgroundColor: "#9DCB1F",
        border: "none",
        duration: 0.3,
      });
    });
  });
}

// 🖼️ Auto Image Slider
function setupImageSlider() {
  const image = document.querySelector(".food-img img");
  const images = [
    "https://eiwgew27fhz.exactdn.com/wp-content/uploads/2023/02/cafe-menu-e1702553754869.jpg?strip=all&lossy=1&sharp=1&ssl=1",
    "https://eiwgew27fhz.exactdn.com/wp-content/uploads/2023/02/hero-5.jpg?strip=all&lossy=1&sharp=1&ssl=1",
    "https://eiwgew27fhz.exactdn.com/wp-content/uploads/2023/02/cafe-about-1.jpg?strip=all&lossy=1&sharp=1&ssl=1",
  ];

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
}

// 📜 Scroll Animations (Sections)
function setupScrollAnimations() {
  gsap.from("#left", {
    x: -100,
    y: -50,
    opacity: 0,
    duration: 1,
    scrollTrigger: {
      trigger: ".page4 #left",
      start: "top 70%",
      end: "top 40%",
      scrub: 2,
    },
  });

  gsap.from("#right", {
    x: 100,
    y: 50,
    opacity: 0,
    duration: 1,
    scrollTrigger: {
      trigger: ".page4 #left",
      start: "top 70%",
      end: "top 40%",
      scrub: 2,
    },
  });

  gsap.from(".about", {
    y: 50,
    opacity: 0,
    duration: 1,
    scrollTrigger: {
      trigger: ".about",
      start: "top 60%",
      end: "top 40%",
      scrub: 2,
    },
  });

  gsap.from(".cards-container .card", {
    scale: 0.9,
    opacity: 0,
    duration: 0.5,
    stagger: 0.2,
    ease: "power2.in",
    scrollTrigger: {
      trigger: ".cards-container",
      start: "top 70%",
      end: "top 50%",
      scrub: 2,
    },
  });

  gsap.from(".food-img", {
    x: -300,
    opacity: 0,
    duration: 1,
    scrollTrigger: {
      trigger: ".foodie",
      start: "top 70%",
      end: "top 50%",
      scrub: 1,
    },
  });

  gsap.from(".food-content", {
    x: 300,
    opacity: 0,
    duration: 1,
    scrollTrigger: {
      trigger: ".foodie",
      start: "top 70%",
      end: "top 50%",
      scrub: 1,
    },
  });
}

// ✨ Text Stroke Hover Effect (Page 5)
function setupTextStrokeEffect() {
  const elems = document.querySelectorAll(".elem");
  const heading = document.querySelector(".page5 h1");

  elems.forEach((elem) => {
    elem.addEventListener("mouseenter", () => {
      gsap.to(heading, { webkitTextStroke: "2px #9dcb1f", ease: "power2.out" });
    });

    elem.addEventListener("mouseleave", () => {
      gsap.to(heading, { webkitTextStroke: "1px white", ease: "power2.in" });
    });
  });
}

// 🦶 Footer Hover Effects
function setupFooterHover() {
  const footerItems = document.querySelectorAll("footer h4, footer i");
  setupHoverCursorEffect(footerItems);
}

// =======================
// 🚀 INIT - Call All Functions
// =======================
function init() {
  setupBackgroundScroll();
  setupNavbarScroll();
  setupCursor();
  setupHoverCursorEffect(document.querySelectorAll("nav h4, button"));
  setupCardEffects();
  setupImageSlider();
  setupScrollAnimations();
  setupTextStrokeEffect();
  setupFooterHover();
}

init();
