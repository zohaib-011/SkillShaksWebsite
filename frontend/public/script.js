console.log("Welcome to the script .. ..");
const tabs=document.querySelectorAll(".scrollable-tab-container a");
const tabList=document.querySelector(".scrollable-tab-container ul");
const rightArrow=document.querySelector(".right-arrow");
const leftArrow=document.querySelector(".left-arrow");
const removeAllActiveClasses=()=>{

    tabs.forEach((tab)=>{
        
        tab.classList.remove("active");    
          
    });
}
tabs.forEach((tab)=>{
    console.log("Welcome to for Each loop  .. ..");
   
    tab.addEventListener("click",()=>{
        removeAllActiveClasses();
        tab.classList.add("active");
    });
});
rightArrow.addEventListener("click",()=>{
    console.log(" Right Arrorww clicked . ");
    tabList.scrollLeft+=200;
 });
 leftArrow.addEventListener("click",()=>{
tabList.scrollLeft-=200;
 });
