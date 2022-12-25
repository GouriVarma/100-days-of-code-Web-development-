const toggle= document.getElementById('toggledark');
const bodyel = document.querySelector('body');

toggle.addEventListener('click',function()
{
  this.classList.toggle('bi-moon');
  if(this.classList.toggle('bi-brightness-high-fill')){
    bodyel.style.background = 'white';
    bodyel.style.color = 'black';
    bodyel.style.transition ='1s';
  }else{
    bodyel.style.background = 'black';
    bodyel.style.color = 'white';
    bodyel.style.transition ='1s';
  }
})
