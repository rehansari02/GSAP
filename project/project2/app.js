function locomotiveScroll() {
  gsap.registerPlugin(ScrollTrigger);

  // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

  const locoScroll = new LocomotiveScroll({
    el: document.querySelector("main"),
    smooth: true,
  });
  // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
  locoScroll.on("scroll", ScrollTrigger.update);

  // tell ScrollTrigger to use these proxy methods for the "main" element since Locomotive Scroll is hijacking things
  ScrollTrigger.scrollerProxy("main", {
    scrollTop(value) {
      return arguments.length
        ? locoScroll.scrollTo(value, 0, 0)
        : locoScroll.scroll.instance.scroll.y;
    }, // we don't have to define a scrollLeft because we're only scrolling vertically.
    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight,
      };
    },
    // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
    pinType: document.querySelector("main").style.transform
      ? "transform"
      : "fixed",
  });

  // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll.
  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

  // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
  ScrollTrigger.refresh();
}

function page1() {
  let h = document.querySelector(".page1 h1");
  let h1 = h.innerText;
  let splitIt = h1.split("");
  let newH1 = "";
  splitIt.forEach((ele) => {
    newH1 += `<span>${ele}</span>`;
  });
  h.innerHTML = newH1;

  gsap.from("h1 span", {
    duration: 0.5,
    y: 600,
    opacity: 0,
    stagger: 0.2,
  });

  let cursor = document.querySelector(".cursor");
  let page1Content = document.querySelector(".page1-content");
  page1Content.addEventListener("mousemove", (dets) => {
    gsap.to(".cursor", {
      x: dets.x - 50,
      y: dets.y - 50,
    });
  });

  page1Content.addEventListener("mouseleave", () => {
    gsap.to(".cursor", {
      scale: 0,
      opacity: 0,
    });
  });
  page1Content.addEventListener("mouseenter", () => {
    gsap.to(".cursor", {
      scale: 1,
      opacity: 1,
    });
  });
}

function page2() {
  gsap.from(".page2-center h2", {
    y: 100,
    opacity: 0,
    duration: 1,
    stagger: 0.2,
    delay: 1,
    scrollTrigger: {
      trigger: ".page2",
      scroller: "main",
      start: "top 50%",
      end: "top 20%",
      scrub: 1,
    },
  });
}

function page3() {
  let box = document.querySelectorAll(".box");
  let img = document.querySelectorAll(".box .box-image");
  box.forEach((ele, idx) => {
    ele.addEventListener("mouseenter", () => {
      gsap.to(img[idx], {
        scale: 0,
        opacity: 0,
        duration: 0.5,
      });
    });
    ele.addEventListener("mouseleave", () => {
      gsap.to(img[idx], {
        scale: 1,
        opacity: 1,
        duration: 0.5,
      });
    });
  });
}
function page4() {
  gsap.from(".page4-center h2", {
    y: 100,
    opacity: 0,
    duration: 1,
    stagger: 0.2,
    delay: 1,
    scrollTrigger: {
      trigger: ".page4",
      scroller: "main",
      start: "top 50%",
      end: "top 20%",
      scrub: 1,
    },
  });
}
function page5() {
  gsap.to(".page5 .number", {
    y: 360,
    scrollTrigger: {
      trigger: ".page5 ",
      scroller: "main",
      start: "top 70%",
      end: "top 25%",
      scrub: 2,
    },
  });
  gsap.to(".page5 svg", {
    rotate: "240deg",
    scrollTrigger: {
      scroller: "main",
      trigger: ".page5 ",
      start: "top 70%",
      end: "top 25%",
      scrub: 2,
    },
  });

  let page5Content = document.querySelector(".page5");
  page5Content.addEventListener("mousemove", (dets) => {
    gsap.to(".circle", {
      x: dets.x - 700,
      y: dets.y - 450,
    });
  });

  page5Content.addEventListener("mouseleave", () => {
    gsap.to(".circle", {
      scale: 0,
      opacity: 0,
    });
  });
  page5Content.addEventListener("mouseenter", () => {
    gsap.to(".circle", {
      scale: 1,
      opacity: 1,
    });
  });
}
function page6() {
  gsap.from(".page6-center h2", {
    y: 100,
    opacity: 0,
    duration: 1,
    stagger: 0.2,
    delay: 1,
    scrollTrigger: {
      trigger: ".page6",
      scroller: "main",
      start: "top 50%",
      end: "top 20%",
      scrub: 1,
    },
  });
}

function swiper() {
  var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    autoplay: {
      delay: 2000,
      disableOnInteraction: true,
    },
  });
}
function loader() {
  gsap.from(".loader h3", {
    x: 100,
    opacity: 0,
    stagger: 0.2,
    duration: 0.7,
    delay: 1,
    onComplete: function () {
      gsap.to(".loader", {
        y: "-100%",
        duration: 0.7,
        ease: Power4.easeInOut,
        onComplete: function () {
          page1();
        },
      });
    },
  });
}

function footer() {
  let h = document.querySelector("footer h1");
  let h1 = h.innerText;
  let splitIt = h1.split("");
  let newH1 = "";
  splitIt.forEach((ele) => {
    newH1 += `<span>${ele}</span>`;
  });
  h.innerHTML = newH1;
  gsap.from("h1 span", {
    duration: 0.5,
    y: -600,
    opacity: 0,
    stagger: 0.2,
    scrollTrigger: {
      trigger: "footer",
      scroller: "main",
      start: "top 30%",
      end: "top 10%",
      scrub: 1,
    },
  });
}

locomotiveScroll();
loader();
page2();
page3();
page4();
page5();
page6();
swiper();
footer();
