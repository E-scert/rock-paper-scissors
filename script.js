console.log('Rock, Paper and Scissors game');
// logic to get computer choice of the rock paper scissors
function getComputerChoice(){
let number = Math.floor(Math.random() * 3)+1;
let choice =' ';

if(number === 1){
choice ='Rock';
}else if(number === 2){
    choice ='Paper';
}
else{
    choice ='Scissors';
}
 return choice;
}
// console.log('Computer choice :'+getComputerChoice());

// human logic rock and paper and scissors
function getHumanChoice(){
    console.log("Plear enter choice 1:Rock, 2:Paper, 3:Scissors");
    let humanChoice = parseInt(prompt("Enter you choice: "));
    let choice = ' ';
if(isNaN(humanChoice) || humanChoice < 1 || humanChoice > 3){
    console.log("Invalid choice, please enter a valid choice");
    humanChoice = parseInt(prompt("Enter you choice: "));
}else{
    if(humanChoice === 1){
        choice ='Rock';

    }else if(humanChoice === 2){
        choice = 'Paper';
    }else{
        choice ='Scissors';
    }
}
    return choice;
}
// document.getElementById('demo').innerHTML =getHumanChoice();
let humanScore = 0; let computerScore= 0;

//play function
function playRound(humanChoice, computerChoice){
     let results =" ";
    if(humanChoice === computerChoice){
 results = "It's a tie!";

    }
    else if((humanChoice === 'Rock' && computerChoice === 'Scissors')){
        results = "You win! Rock beats Scissors";
        humanScore++;
    }else if((humanChoice ==='Paper' && computerChoice === 'Rock')){
        results = "You win! Paper beats Rock";
        humanScore++;
    }else if((humanChoice === 'Scissors' && computerChoice === 'Paper')){
        results ="You win! Scissors beat Paper";
        humanScore++;
    }
    else if((humanChoice === 'Scissors' && computerChoice === 'Rock')){
        results = "You loose! Rock beats Scissors";
        computerScore++;
    }else if((humanChoice ==='Rock' && computerChoice === 'Paper')){
        results = "You loose! Paper beats Rock";
        computerScore++;
    }else if((humanChoice === 'Paper' && computerChoice === 'Scissors')){
        results ="You loose! Scissors beat Paper";
        computerScore++;
    }
    return results;

}
//test if it works first
//document.getElementById('demo').innerHTML = playRound(getHumanChoice(),getComputerChoice());
//create the playGame function 

function playGame(){
 let result = '';

    for(let i=0; i <= 5 ; i++){
         let humanChoice = getHumanChoice();
        let computerChoice = getComputerChoice();
    playRound(humanChoice,computerChoice);
    result += '<br>Round :'+i+'<br>Human score:'+humanScore +'<br>'+' Computer score:'+computerScore;
    }
    return result
}
//call the function
document.getElementById('demo').innerHTML = playGame();
