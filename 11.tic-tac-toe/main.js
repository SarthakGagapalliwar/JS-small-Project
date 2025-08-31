const board=document.querySelector('.board');
const square =document.querySelectorAll('.square');
const message =document.querySelector('.message');
const RestartButton =document.querySelector('.RestartButton');


const players = ['X','O'];
let currentPlayer=players[0];
message.textContent=`X's turn`
const winningPatterns = [
  [0, 1, 2], // top row
  [3, 4, 5], // middle row
  [6, 7, 8], // bottom row
  [0, 3, 6], // left column
  [1, 4, 7], // middle column
  [2, 5, 8], // right column
  [0, 4, 8], // diagonal
  [2, 4, 6]  // diagonal
];

for(let i=0; i<square.length; i++){
  square[i].addEventListener('click',()=>{
    if(square[i].textContent !== ""  || chekWinnnre(currentPlayer)){
      return;
    }

    square[i].textContent=currentPlayer;

    if(chekWinnnre(currentPlayer)){
      message.textContent=`Game Over. ${currentPlayer} wins the game!! Please restart`
      return
    }
    if(checkTieResult(currentPlayer)){
      message.textContent=`Game Over. this age is Tie`
      return
    }

    currentPlayer = currentPlayer === players[0] ? players [1] :players[0]

    if(currentPlayer===players[0]){
      message.textContent=`X's Turn`;
    }else{
      message.textContent=`O's Turn`;
    }

  })
}

function chekWinnnre(currentPlayer){
  for(let i=0; i<winningPatterns.length; i++){
    const [a,b,c] = winningPatterns[i];

    if(square[a].textContent===currentPlayer &&
      square[b].textContent===currentPlayer &&
      square[c].textContent===currentPlayer 
    ){
      return true;
    }
  }
  return false;
}


function checkTieResult(){
  for(let i=0; i<square.length; i++){
    if(square[i].textContent===''){
      return false;
    }
  }
  return true;
}



function restartgame(){
  for(let i=0; i<square.length; i++){
    square[i].textContent='';
  }
  message.textContent=`X's ture;`
  currentPlayer=players[0];
}

RestartButton.addEventListener('click',()=>{
  restartgame();
})