//variables
    let PlayerMove


//functions
function ComputerChoice () {
    const CompPossible = ["rock", "paper", "scissors"];
    let ComputerMove = Math.floor(Math.random() * 3);
    return CompPossible [ComputerMove];
}

//game proper
document.getElementById("btn_paper").addEventListener("click", function (){
    PlayerMove = "paper"
    console.log(PlayerMove)
    PlayRound(PlayerMove,ComputerChoice())
})

document.getElementById("btn_scissors").addEventListener("click", function (){
    PlayerMove = "scissors"
    console.log(PlayerMove)
    PlayRound(PlayerMove,ComputerChoice())
})

document.getElementById("btn_rock").addEventListener("click", function (){
    PlayerMove = "rock"
    console.log(PlayerMove)
    PlayRound(PlayerMove,ComputerChoice())
})


/*
function PlayRound (PlayerMove, ComputerMove) {
    if (PlayerMove === ComputerMove) {
        console.log ("It's a tie!")
    };

    if (PlayerMove=="rock") {
        if (ComputerMove=="paper") {
            console.log ("You lost! Paper beats rock!")
            computerScore++
        } else if (ComputerMove=="scissors") {
            console.log("You won! Rock beats scissors!")
            playerScore++;
        }
    }
    
    if (PlayerMove=="paper") {
        if (ComputerMove=="scissors") {
            console.log ("You lost! Scissors beat paper!")
            computerScore++
        } else if (ComputerMove=="rock") {
            console.log ("You won! Paper beats rock!")
            playerScore++;
        } 
    }

    if(PlayerMove=="scissors") {
        if (ComputerMove=="rock") {
            console.log ("You lost! Rock beats scissors!")
            computerScore++
        } else if (ComputerMove =="paper") {
            console.log ("You won! Scissors beat paper!")
            playerScore++;
        }

    }
    console.log ("Scoreboard: Player -" + playerScore + "Computer -" + computerScore) 
}

function theGame () {
let ComputerMove=ComputerChoice();
let PlayerMove = prompt("Choose your move:");  
PlayerMove = PlayerMove.toLowerCase(); 
do {
    if (PlayerMove!=="rock"&& PlayerMove!=="paper"&& PlayerMove!=="scissors") {
    console.log("Stop messing around, put in valid choice.");
    PlayerMove = prompt("Choose your move:");   
    }
}while (PlayerMove!=="rock"&& PlayerMove!=="paper"&& PlayerMove!=="scissors");
 PlayRound(ComputerMove, PlayerMove); 
    }

let playerScore = 0;
let computerScore = 0;
for ( i=0; i < 5; i++) {
    theGame()
}
if (playerScore>computerScore) {
    console.log("You won the tournament!")
} else {
    console.log("You lost the tournament!")
}

*/
