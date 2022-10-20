const gamedata = [
   [0,0,0],
   [0,0,0],
   [0,0,0],
];

let editedPlayer = 0;
let activePlayer = 0;
let currentRound = 1;
let gameisover =false;

const players=[
  {
    name :'',
    symbol: 'X'
  },
  {
    name :'',
    symbol: 'O'
  },
];

const playerConfOverlay = document.getElementById('config-overlay');
const backdrop = document.getElementById('backdrop');
const formElement = document.querySelector('form');
const errorsOutput = document.getElementById('conf-errors');
const gameAreaelement = document.getElementById('game-on');
//const gameFieldElements = document.querySelectorAll('#gameboard li');
const gameBoardElement = document.getElementById('gameboard');
const activePlayerGameel = document.getElementById('active-player-name');

const gameoverelement  = document.getElementById('game-over');

const editPlayer1btn = document.getElementById('p1btn');
const editPlayer2btn = document.getElementById('p2btn');

const cancelConfbtn = document.getElementById('cancel-conf');
const startNewGamebtn = document.getElementById('start-game-btn');

editPlayer1btn.addEventListener('click',openPlayerconfig);
editPlayer2btn.addEventListener('click',openPlayerconfig);

backdrop.addEventListener('click',closePlayrconf);
cancelConfbtn.addEventListener('click',closePlayrconf);

formElement.addEventListener('submit',savePlayerconf);//submit is an built-in event

startNewGamebtn.addEventListener('click',startNewGame);

//for(const gameFieldElement of gameFieldElements){
  //gameFieldElement.addEventListener('click',selectgamefield);
//}

gameBoardElement.addEventListener('click',selectgamefield);



