// Simple animation for values cards
document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".value-card");
  cards.forEach((card, index) => {
    card.style.opacity = 0;
    setTimeout(() => {
      card.style.transition = "opacity 1s ease";
      card.style.opacity = 1;
    }, index * 400);
  });
});
