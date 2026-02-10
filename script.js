/* =========================
   Smooth Scroll
========================= */
document.querySelectorAll("a[href^='#']").forEach(anchor => {
    anchor.addEventListener("click", function(e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));
        if(target){
            target.scrollIntoView({
                behavior: "smooth"
            });
        }
    });
});


/* =========================
   Navbar Active Link
========================= */
const navLinks = document.querySelectorAll(".navbar nav a");

navLinks.forEach(link => {
    link.addEventListener("click", function() {
        navLinks.forEach(l => l.classList.remove("active"));
        this.classList.add("active");
    });
});


/* =========================
   Scroll Animation (Reveal)
========================= */
const revealElements = document.querySelectorAll(
    ".summary-card, .social-card, .project-card, .timeline-item, .interest-card"
);

function revealOnScroll(){
    const windowHeight = window.innerHeight;

    revealElements.forEach(el => {
        const elementTop = el.getBoundingClientRect().top;

        if(elementTop < windowHeight - 100){
            el.style.opacity = "1";
            el.style.transform = "translateY(0)";
        }
    });
}

revealElements.forEach(el => {
    el.style.opacity = "0";
    el.style.transform = "translateY(40px)";
    el.style.transition = "0.6s ease";
});

window.addEventListener("scroll", revealOnScroll);


/* =========================
   Typing Effect (Hero Text)
========================= */
const text = "Software Developer & AI Enthusiast";
let index = 0;

function typingEffect(){
    const typingElement = document.querySelector(".typing");

    if(!typingElement) return;

    if(index < text.length){
        typingElement.textContent += text.charAt(index);
        index++;
        setTimeout(typingEffect, 70);
    }
}

typingEffect();


/* =========================
   Popup Example (Contact Success)
========================= */
function showPopup(){
    const popup = document.querySelector(".popup");
    if(popup){
        popup.style.display = "flex";
    }
}

function closePopup(){
    const popup = document.querySelector(".popup");
    if(popup){
        popup.style.display = "none";
    }
}
/* ===== ANIMATED COUNTERS ===== */

const counters = document.querySelectorAll(".counter");
let counterStarted = false;

function runCounters(){
  if(counterStarted) return;

  counters.forEach(counter => {
    const target = +counter.dataset.target;
    let count = 0;

    const updateCounter = () => {
      const increment = Math.ceil(target / 100);
      count += increment;

      if(count < target){
        counter.innerText = count;
        setTimeout(updateCounter, 20);
      } else {
        counter.innerText = target + "+";
      }
    };

    updateCounter();
  });

  counterStarted = true;
}

window.addEventListener("scroll", () => {
  const section = document.querySelector(".counter-section");
  const sectionTop = section.getBoundingClientRect().top;

  if(sectionTop < window.innerHeight - 100){
    runCounters();
  }
});
