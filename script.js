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


// logic rock and paper and scissors
    let rock = document.getElementById('rock').value;
    console.log(rock)

function getHumanChoice(){
    console.log("Plear enter choice 1:Rock, 2:Paper, 3:Scissors");
    let rock = document.getElementById('rock').value;

    let paper = document.getElementById('paper').value;
    
    let scissors = document.getElementById('scissors').value;
    
    let choice = ' ';

    if(rock.value == 1){
        choice ='Rock';

    }else if(paper.value == 2){
        choice = 'Paper';
    }else if(scissors == 3){
        choice ='Scissors';
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
//displays the results in each button press
document.getElementById('rock').onclick = function(){
    document.getElementById('display').innerHTML = playRound('Rock',getComputerChoice()) + '<br> Human Score: '+humanScore+'<br> Computer Score: '+computerScore;
     checkWinner();
}
document.getElementById('paper').onclick = function(){
    document.getElementById('display').innerHTML = playRound('Paper',getComputerChoice())+ '<br> Human Score: '+humanScore+'<br> Computer Score: '+computerScore;
     checkWinner();
}
document.getElementById('scissors').onclick = function(){
    document.getElementById('display').innerHTML = playRound('Scissors',getComputerChoice())+ '<br> Human Score: '+humanScore+'<br> Computer Score: '+computerScore;
    checkWinner();
}

//display the winner after 5 points
function checkWinner(){
if(humanScore === 5){
    document.getElementById('display').innerHTML = "Congratulations! You are the overall winner!";
}else if(computerScore === 5){
    document.getElementById('display').innerHTML = "Computer is the overall winner! Better luck next time!";
}
}

;
