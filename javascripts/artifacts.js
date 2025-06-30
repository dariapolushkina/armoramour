document.addEventListener("DOMContentLoaded",function(){
  const filterTabs=document.querySelectorAll(".art-filter");
  const artifactBlocks=document.querySelectorAll(".artifact-block");
  filterTabs.forEach(tab=>{
    tab.addEventListener("click",function(){
      filterTabs.forEach(t=>t.classList.remove("active"));
      tab.classList.add("active");
      const mode=tab.getAttribute("data-filter");
      artifactBlocks.forEach(b=>{
        b.style.display=b.classList.contains(mode)?"flex":"none";
      });
    });
  });
});