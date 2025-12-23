/* =========================
   MOUSE-TRACKING STEAM
   ========================= */
const steam = document.getElementById("steam");

document.addEventListener("mousemove", (e) => {
  steam.style.transform = `translate(${e.clientX - 90}px, ${e.clientY - 90}px)`;
});

/* =========================
   SCROLL REVEAL
   ========================= */
const reveals = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  },
  { threshold: 0.2 }
);

reveals.forEach((el) => observer.observe(el));
