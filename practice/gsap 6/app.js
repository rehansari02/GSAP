let h = document.querySelector("h1");
let h1 = h.innerText;
let splitIt = h1.split("");
let halfValue = Math.floor(splitIt.length / 2);
let newH1 = "";
splitIt.forEach((ele, idx) => {
  if (idx < halfValue) {
    newH1 += `<span class="left">${ele}</span>`;
  } else {
    newH1 += `<span class="right">${ele}</span>`;
  }
});
h.innerHTML = newH1;

gsap.from("h1 .left", {
  y: 100,
  opacity: 0,
  duration: 0.6,
  stagger: 0.1,
});

gsap.from("h1 .right", {
  y: 100,
  opacity: 0,
  duration: 0.6,
  stagger: -0.1,
});
