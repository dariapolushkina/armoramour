document.addEventListener("DOMContentLoaded", function() {
  const signupForm = document.querySelector(".signup-form");
  const signupTitle = document.querySelector(".signup-title");

  if (signupForm) {
    signupForm.addEventListener("submit", function(e) {
      e.preventDefault();
      if (signupTitle) signupTitle.style.display = "none";
      const thanks = document.createElement("p");
      thanks.className = "signup-thanks";
      thanks.textContent = "Спасибо. Вы будете получать уведомления о новых событиях и проектах.";
      signupForm.replaceWith(thanks);
    });
  }
});