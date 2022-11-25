const starsEl = document.querySelectorAll(".fa-star");

const emojiEl = document.querySelectorAll(".fa-regular");
const bodyEl = document.querySelector(".bodyColor");
const colorsArr =["crimson","orange","lightcyan","teal","greenyellow"];
const cpEl = document.querySelectorAll(".cp");

updateRating(0);

starsEl.forEach((starsEl,index)=>{
  starsEl.addEventListener("click",()=>{
    updateRating(index)
  });
});

function updateRating(index){
  starsEl.forEach((starsEl,idx)=>{
        if(idx<index+1){
          starsEl.classList.add("active");
        }else{
          starsEl.classList.remove("active");
        }
  });
  
  emojiEl.forEach((emojiEl)=>{
    emojiEl.style.transform = `translateX(-${index*50}px)`;
    emojiEl.style.color = colorsArr[index]
    bodyEl.style.background = colorsArr[index];
  });

}
