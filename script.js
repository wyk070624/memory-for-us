const reveals = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  },
  {
    threshold: 0.12
  }
);

reveals.forEach(el => observer.observe(el));

const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightboxImg");
const closeLightbox = document.getElementById("closeLightbox");

document.querySelectorAll("figure img, .notes-wall img, .memory-flow img").forEach(img => {
  img.addEventListener("click", () => {
    lightboxImg.src = img.src;
    lightbox.classList.add("show");
  });
});

closeLightbox.addEventListener("click", () => {
  lightbox.classList.remove("show");
  lightboxImg.src = "";
});

lightbox.addEventListener("click", event => {
  if (event.target === lightbox) {
    lightbox.classList.remove("show");
    lightboxImg.src = "";
  }
});
