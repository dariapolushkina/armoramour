document.addEventListener("DOMContentLoaded", function() {
  let t = 0;
  let mouseX = 0;
  let mouseY = 0;

  function animate() {
    t += 0.02; 
    const autoX = Math.sin(t) * 100;
    const autoY = Math.cos(t * 0.8) * 50;

    const totalX = autoX + mouseX * 2;
    const totalY = autoY + mouseY * 2;
    document.body.style.setProperty('--x', totalX + 'px');
    document.body.style.setProperty('--y', totalY + 'px');
    requestAnimationFrame(animate);
  }

  document.addEventListener("mousemove", function(e) {
    mouseX = (e.clientX / window.innerWidth  - 0.5) * 200;
    mouseY = (e.clientY / window.innerHeight - 0.5) * 100;
  });

  animate();


  const circle = document.querySelector(".circle");
  if (circle) {
    circle.addEventListener("mouseenter", function() {
      document.body.classList.add("show-text");
    });
    circle.addEventListener("mouseleave", function() {
      document.body.classList.remove("show-text");
    });
  }

 
  document.body.addEventListener("click", function() {
    if (document.body.classList.contains("start_page")) {
      window.location.href = "пространство.html";
    }
  });
});