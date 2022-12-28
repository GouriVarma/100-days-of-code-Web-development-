const pianokeys =document.querySelectorAll('.key');

function playsound(newurl){
  console.log(newurl);
  new Audio(newurl).play()
}


pianokeys.forEach((pianokey,i) =>{
  const reMap = ['02','04','06',      '09','11',     '14','16','18',       '21','23',
  '01','03','05','07','08','10','12','13','15','17','19','20','22','24']
  const newurl = '24-pianokeys/24-piano-keys/key'+reMap[i]+'.mp3'
  
  pianokey.addEventListener('click',()=>playsound(newurl))
})
