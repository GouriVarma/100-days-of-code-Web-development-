function resetgamestatus(){
   activePlayer = 0;
   currentRound = 1;
   gameisover = false;
   gameoverelement.firstElementChild.innerHTML = 
    'You Won,<span id="winner-name">PLAYER NAME</span>!';
   gameoverelement.style.display = 'none';

   let gameboardIndex = 0;
   for(let i=0;i<3;i++){
     for(let j=0;j<3;j++){
      gamedata[i][j] = 0; 
      const gameboarditem =gameBoardElement.children[gameboardIndex];
      gameboarditem.textContent ='';
      gameboarditem.classList.remove('disabled');
      gameboardIndex++;
     }
   }
}

function startNewGame(){
  if(players[0].name === ''|| players[1].name === ''){
    alert('please enter player names!');
    return;
  }

  resetgamestatus();

  activePlayerGameel.textContent = players[activePlayer].name;
  gameAreaelement.style.display = 'block';
}
function switchPlayer(){
  if(activePlayer === 0){
    activePlayer = 1;
  }
  else{
    activePlayer=0;
  }
  activePlayerGameel.textContent = players[activePlayer].name;
}

function selectgamefield(event){

  if(event.target.tagName!=='LI' || gameisover){
     return;
  }
  const selectfield = event.target;
  const selectedColumn = selectfield.dataset.col-1;
  const selectedrow = selectfield.dataset.row-1;

  if(gamedata[selectedrow][selectedColumn]>0){
    alert('please select an empty field');
    return;
  }

  selectfield.textContent = players[activePlayer].symbol;  //players[0]
  selectfield.classList.add('disabled');



  gamedata[selectedrow][selectedColumn] = activePlayer+1;
  console.log(gamedata);

  const winnerID =checkforGameover();

  if(winnerID !== 0){
    endGame(winnerID);
  }
  currentRound++;

  switchPlayer();
}

function checkforGameover(){  //Checking the rows for equality
  for(i=0;i<3;i++){
    if(gamedata[i][0]>0 && 
      gamedata[i][0]=== gamedata[i][1] && 
      gamedata[i][1]===gamedata[i][2])
      {
        return gamedata[i][0];
    }
  }
  for(i=0;i<3;i++){  //checking columns for equality
    if(gamedata[0][i]>0 && 
      gamedata[0][i]=== gamedata[1][i] && 
      gamedata[1][i]===gamedata[2][i])
      {
        return gamedata[0][i];
    }
  }
 //diagonal top left to bottom right
  if(gamedata[0][0]>0 && 
    gamedata[0][0]===gamedata[1][1] &&
    gamedata[1][1]===gamedata[2][2]){
      return gamedata[0][0];
    }

//diagonal bottom left to top right
  if(gamedata[2][0]>0 && 
    gamedata[2][0]===gamedata[1][1] &&
    gamedata[1][1]===gamedata[0][2]){
      return gamedata[2][0];
  }
  if(currentRound===9){
    return -1;
  }
  return 0;
}
function endGame(winnerID){
  gameisover=true;
    gameoverelement.style.display = 'block';
    if(winnerID>0){
      const winnername = players[winnerID-1].name;
      gameoverelement.firstElementChild.firstElementChild.textContent = winnername;
    }
    else{
      gameoverelement.firstElementChild.textContent = 'It\'s a draw!';
    }
    
}



