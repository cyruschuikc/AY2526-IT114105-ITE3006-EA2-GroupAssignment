document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contactForm");
  const response = document.getElementById("formResponse");

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    response.textContent = "Thank you for reaching out! We’ll get back to you soon.";
    form.reset();
  });
});
