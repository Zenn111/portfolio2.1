function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}
// TYPEWRITER TEXT SLIDER
const typeTexts = ["Frontend Developer", "UI/UX Designer", "Graphics Designer", "Tech Enthusiast"];
let typeIndex = 0;
let charIndex = 0;
let typing = true; // typing or deleting
const typeElement = document.getElementById("text-slider");
const typingSpeed = 150; // ms per character
const pauseTime = 1500; // pause before deleting

function typeEffect() {
  const currentText = typeTexts[typeIndex];

  if (typing) {
    typeElement.textContent = currentText.slice(0, charIndex + 1);
    charIndex++;
    if (charIndex === currentText.length) {
      typing = false;
      setTimeout(typeEffect, pauseTime);
      return;
    }
  } else {
    typeElement.textContent = currentText.slice(0, charIndex - 1);
    charIndex--;
    if (charIndex === 0) {
      typing = true;
      typeIndex = (typeIndex + 1) % typeTexts.length;
    }
  }
  setTimeout(typeEffect, typingSpeed);
}

typeEffect();

