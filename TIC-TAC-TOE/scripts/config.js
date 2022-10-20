function openPlayerconfig(event) {
  editedPlayer =  +event.target.dataset.playerid;  //+'1' => 1
  playerConfOverlay.style.display = 'block';
  backdrop.style.display = 'block';
}

function closePlayrconf() {
  playerConfOverlay.style.display = 'None';
  backdrop.style.display = 'None';
  formElement.firstElementChild.classList.remove('error');
  errorsOutput.textContent = '';
  formElement.firstElementChild.lastElementChild.value = '';
}
function savePlayerconf(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const enteredPlayername = formData.get('playername').trim();  //trim-builin method which trims whitespaces in our content
    console.log(enteredPlayername);

  if(!enteredPlayername){        //enteredPlayername === '';
     event.target.firstElementChild.classList.add('error');
     errorsOutput.textContent ='Please enter a valid name';
     return;
  }

  const updatedPlayerDataElement = document.getElementById('player-'+ editedPlayer +'-data');
  updatedPlayerDataElement.children[1].textContent = enteredPlayername;

  // if(editPlayer === 1){
  //   players[0].name = enteredPlayername;
  // }
  // else{
  //   players[1].name = enteredPlayername;
  // }                                            
   players[editedPlayer-1].name=enteredPlayername;

  closePlayrconf();
}
