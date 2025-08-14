const line1 = "M.Hassan Ali Khan";
const line2 = "a Front End Developer.";
let i = 0;
let j = 0;


function typeLine1() {
  if (i < line1.length) {
    const colored = `<span class="red-text">${line1.slice(0, i + 1)}</span>`;
    document.getElementById("hero-line1").innerHTML = colored;
    i++;
    setTimeout(typeLine1,140);
  } else {
    setTimeout(typeLine2, 500);
  }
}

function typeLine2() {
  if (j < line2.length) {
    document.getElementById("hero-line2").innerHTML += line2.charAt(j);
    j++;
    setTimeout(typeLine2, 120);
  }
}

window.onload = typeLine1;


// JavaScript for scroll effect
window.addEventListener("scroll", function () {
  const nav = document.querySelector("nav");
  if (window.scrollY > 50) {
    nav.classList.add("scrolled");
  } else {
    nav.classList.remove("scrolled");
  }
});
// PROJECT SLIDER FUNCTIONALITY 
const parent = document.querySelector(".projects-div");
const children = document.querySelectorAll(".project-box");
const next = document.getElementById("next");
const prev = document.getElementById("prev");

const box_width=children[0].offsetWidth + 420;

next.addEventListener("click",()=>{
  parent.scrollBy({
    left: box_width,
    behavior:"smooth"
  })
})
prev.addEventListener("click",()=>{
  parent.scrollBy({
    left:-box_width,
    behavior:"smooth"
  })
})