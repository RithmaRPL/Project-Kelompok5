const yearEl = document.getElementById("year");
yearEl.textContent = new Date().getFullYear();

// smooth scroll
const links = document.querySelectorAll('a[href^="#"]');
links.forEach((a) => {
  a.addEventListener("click", (e) => {
    e.preventDefault();
    document.querySelector(a.getAttribute("href")).scrollIntoView({ behavior: "smooth" });
  });
});

// handle contact form
function handleContact(e) {
  e.preventDefault();
  const name = document.getElementById("name");
}
