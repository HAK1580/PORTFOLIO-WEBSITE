const line1 = "M.HASSAN ALI KHAN";
const line2 = "a Front End Developer.";
let i = 0;
let j = 0;

function typeLine1() {
  if (i < line1.length) {
    const colored = `<span class="red-text">${line1.slice(0, i + 1)}</span>`;
    document.getElementById("hero-line1").innerHTML = colored;
    i++;
    setTimeout(typeLine1, 120);
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

document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    const targetId = this.getAttribute('href');
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 40, // adjust for header height if needed
        behavior: 'smooth'
      });
    }
  });
});
