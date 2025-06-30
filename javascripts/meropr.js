document.addEventListener("DOMContentLoaded",function(){
  const filterTabs=document.querySelectorAll(".filter");
  const eventBlocks=document.querySelectorAll(".event-block");
  filterTabs.forEach(tab=>{
    tab.addEventListener("click",function(){
      filterTabs.forEach(t=>t.classList.remove("active"));
      tab.classList.add("active");
      const mode=tab.getAttribute("data-filter");
      eventBlocks.forEach(b=>{
        b.style.display=b.classList.contains(mode)?"flex":"none";
      });
    });
  });

  const signupBtns=document.querySelectorAll(".btn-signup");
  const signupModal=document.querySelector(".mero-signup-form");
  const formOverlay=signupModal?signupModal.querySelector(".mero-signup-overlay"):null;
  const modalForm=signupModal?signupModal.querySelector(".mero-signup-content"):null;
  const formMessage=document.querySelector(".mero-signup-message");
  const messageOverlay=formMessage?formMessage.querySelector(".mero-signup-overlay"):null;

  if(signupBtns.length&&signupModal&&formOverlay&&modalForm&&formMessage){
    signupBtns.forEach(btn=>{
      btn.addEventListener("click",()=>{
        signupModal.style.display="block";
      });
    });
    formOverlay.addEventListener("click",()=>{
      signupModal.style.display="none";
    });
    modalForm.addEventListener("submit",e=>{
      e.preventDefault();
      signupModal.style.display="none";
      formMessage.style.display="block";
      setTimeout(()=>{formMessage.style.display="none";},2000);
    });
    if(messageOverlay){
      messageOverlay.addEventListener("click",()=>{
        formMessage.style.display="none";
      });
    }
  }
});