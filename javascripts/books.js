document.addEventListener("DOMContentLoaded", function() {
  const modal = document.querySelector(".image-full");
  const modalImg = modal.querySelector(".opened-image");
  const overlay = modal.querySelector(".image-overlay");
  let gallery = [], idx = -1;

  document.querySelectorAll(".book-scroll").forEach(scroll => {
    const imgs = Array.from(scroll.querySelectorAll("img:not(.img-hover)"));
    imgs.forEach((img, i) => {
      (img.classList.contains("img-default") ? img.parentElement : img).onclick = () => {
        gallery = imgs; idx = i;
        modalImg.src = imgs[idx].src;
        modal.style.display = "block";
      };
    });
  });

  overlay.onclick = () => {
    modal.style.display = "none";
    gallery = []; idx = -1;
  };

  document.onkeydown = e => {
    if (modal.style.display === "block") {
      if (e.key === "Escape") modal.style.display = "none";
      if (e.key === "ArrowRight" && idx < gallery.length - 1) modalImg.src = gallery[++idx].src;
      if (e.key === "ArrowLeft" && idx > 0) modalImg.src = gallery[--idx].src;
    }
  };
});