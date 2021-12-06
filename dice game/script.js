let dice;
let totalScore = 0;
let gamePlaying;

const total = document.querySelector("#total");

let diceImgs = {
    dice1:'dice1.png',
    dice2:'dice2.png',
    dice3:'dice3.png',
    dice4:'dice4.png',
    dice5:'dice5.png',
    dice6:'dice6.png',
  }

const throwDice = () => {  
        dice = Math.floor((Math.random() * 6) + 1);
        
const diceDOM = document.querySelector("#diceImgDOM");
diceDOM.classList.remove("no-display");
diceDOM.src = diceImgs['dice' + dice];
        
if (dice === 1) {
            const loseMsg = document.querySelector("#lose");
            loseMsg.innerHTML = 'YOU LOSE';
            totalScore=0;
            toggleBtn(rollBtn);
        } else {
            hideMsg()
            totalScore += dice;
            total.innerHTML = totalScore;
}
        
if (totalScore >= 20) {
const winMsg = document.querySelector("#win");
winMsg.innerHTML = 'YOU WON';
totalScore = 0;
toggleBtn(rollBtn);
        }
}

const hideMsg = () => {
    document.querySelector("#lose").innerHTML = '';
    document.querySelector("#win").innerHTML = '';
}

const rollBtn = document.querySelector("#roll-btn");
rollBtn.addEventListener("click",  throwDice)

const toggleBtn = (btn) => {
    if (btn.disabled === true) {
        btn.disabled = false;
    } else if (btn.disabled === false) {
        btn.disabled = true;
    };
}

const reset = () => {
    totalScore = 0;
    document.querySelector("#diceImgDOM").classList.add("no-display");
    total.textContent='0';
    hideMsg();
    toggleBtn(rollBtn);

}

const resetBtn = document.querySelector("#reset-btn");
resetBtn.addEventListener("click", reset);
  
  