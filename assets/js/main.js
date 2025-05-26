// swiper initialization
const swiper = new Swiper(".swiper", {
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  effect: "fade",
  speed: 800,
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },
});

// animate on scroll
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.remove("opacity-0", "translate-y-8");
        entry.target.classList.add("opacity-100", "translate-y-0");
        observer.unobserve(entry.target); // анімується тільки один раз
      }
    });
  },
  { threshold: 0.1 }
);

document.querySelectorAll("[data-animate]").forEach((el) => {
  observer.observe(el);
});

//  Form Submission

function handleSubmit() {
  const form = document.getElementById("contact-form");
  const message = document.getElementById("thankYouMessage");
  const emailInput = document.getElementById("emailInput");

  if (!emailInput.value.trim()) return;

  form.classList.add("hidden");
  message.classList.remove("hidden");

  setTimeout(() => {
    message.classList.add("hidden");
    emailInput.value = "";
    form.classList.remove("hidden");
  }, 3000);
}
