const slides = [
  {
    title: "Discover innovative ways to decorate",
    copy: "We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.",
    desktop: "./images/desktop-image-hero-1.jpg",
    mobile: "./images/mobile-image-hero-1.jpg",
    alt: "White chairs and a wooden table with a bonsai plant",
  },
  {
    title: "We are available all across the globe",
    copy: "With stores all over the world, it's easy for you to find furniture for your home or place of business. Locally, we\u2019re in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today.",
    desktop: "./images/desktop-image-hero-2.jpg",
    mobile: "./images/mobile-image-hero-2.jpg",
    alt: "Yellow, mint and grey modern chairs against a taupe wall",
  },
  {
    title: "Manufactured with the best materials",
    copy: "Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office.",
    desktop: "./images/desktop-image-hero-3.jpg",
    mobile: "./images/mobile-image-hero-3.jpg",
    alt: "Side view of a black folding chair against a dark backdrop",
  },
];

const els = {
  source: document.getElementById("hero-source"),
  img: document.getElementById("hero-img"),
  title: document.getElementById("hero-title"),
  copy: document.getElementById("hero-copy"),
  prev: document.getElementById("prev"),
  next: document.getElementById("next"),
  hero: document.querySelector(".hero"),
};
let current = 0;

function show(index) {
  current = (index + slides.length) % slides.length;
  const s = slides[current];
  els.source.srcset = s.desktop;
  els.img.src = s.mobile;
  els.img.alt = s.alt;
  els.title.textContent = s.title;
  els.copy.textContent = s.copy;
  // restart the fade animation
  [els.img, els.title, els.copy].forEach((el) => {
    el.style.animation = "none";
    void el.offsetWidth;
    el.style.animation = "";
  });
}

els.prev.addEventListener("click", () => show(current - 1));
els.next.addEventListener("click", () => show(current + 1));

// Arrow keys work while focus is anywhere inside the hero
els.hero.addEventListener("keydown", (e) => {
  if (e.key === "ArrowLeft") show(current - 1);
  if (e.key === "ArrowRight") show(current + 1);
});

// Preload remaining slide images for smooth switching
slides.forEach((s) => { new Image().src = s.mobile; new Image().src = s.desktop; });

// ---------- Mobile menu ----------
const header = document.querySelector(".site-header");
const toggle = document.getElementById("menu-toggle");
const icon = document.getElementById("menu-icon");
const backdrop = document.getElementById("backdrop");
const mq = window.matchMedia("(min-width: 48em)");

function setMenu(open) {
  header.classList.toggle("open", open);
  backdrop.hidden = !open;
  toggle.setAttribute("aria-expanded", String(open));
  toggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
  icon.src = open ? "./images/icon-close.svg" : "./images/icon-hamburger.svg";
  icon.width = open ? 16 : 20;
  icon.height = open ? 16 : 14;
}

toggle.addEventListener("click", () => setMenu(!header.classList.contains("open")));
backdrop.addEventListener("click", () => setMenu(false));
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && header.classList.contains("open")) { setMenu(false); toggle.focus(); }
});
mq.addEventListener("change", (e) => { if (e.matches) setMenu(false); });
