// get the element from id=imageModal
const modal = document.getElementById("imageModal");
const modalImg = document.getElementById("modalImg");
const closeBtn = document.querySelector(".close-modal");
const previewImgs = document.querySelectorAll(".preview-img");

// click the image for preview
previewImgs.forEach(img => {
  img.addEventListener("click", () => {
    modal.style.display = "block";
    modalImg.src = img.src; 
  });
});

// close lightbox when clicking the close button
closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

// close lightbox when clicking anywhere
modal.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});