function ComputerChoice () {
    const CompPossible = ["rock", "paper", "scissors"];
    let CompPick = Math.floor(Math.random() * 3);
    return CompPossible [CompPick];
    }
function PlayRound (ComputerMove, PlayerMove ) {
    if (PlayerMove === ComputerMove) {
        console.log ("It's a tie!")
    };

    if (PlayerChoice="rock") {
        if (ComputerMove="paper") {
            console.log ("You lost! Paper beats rock!")
        } else if (ComputerMove="scissors") {
            console.log("You won! Rock beats scissors!")
        }
    }
    
    if (PlayerChoice="paper") {
        if (ComputerMove="scissors") {
            console.log ("You lost! Scissors beat paper!")
        } else if (ComputerMove="rock") {
            console.log ("You won! Paper beats rock!")
        } 
    }

    if(PlayerChoice="scissors") {
        if (ComputerMove="rock") {
            console.log ("You lost! Rock beats scissors!")
        } else if (ComputerMove ="paper") {
            console.log ("You won! Scissors beat paper!")
        }

    }
}

let ComputerMove=ComputerChoice();
let PlayerMove = prompt("Choose your move:");   
PlayerMove = PlayerMove.toLowerCase();
if (PlayerMove!=="rock"&& PlayerMove!=="paper"&& PlayerMove!=="scissors") {
    console.log("Stop messing around, put in valid choice.");
    let PlayerChoice = prompt("Choose your move:");
PlayRound(ComputerChoice, PlayerMove)    
}