//variables
    let PlayerMove
    let result = document.createElement ("p")
    let human_score = document.querySelector("#player_score")
    let computer_score = document.querySelector("#computer_score")
    let game_end = document.createElement ("p") 
    let result_div = document.querySelector ("#result")
    let final_victor = document.createElement ("h3")
    let comp_choice_div = document.querySelector ("#comp_choice")
    let comp_choice_text = document.createElement ("p")
    comp_choice_text.style.fontWeight = "900"
    result_div.appendChild(result)
    let computerScore = 0
    let playerScore = 0
    comp_choice_div.appendChild(comp_choice_text)
    let choice_btns = document.querySelectorAll(".choice_btn");
    let restart_button =document.querySelector("#reset_button")

//functions
function ComputerChoice () {
    const CompPossible = ["rock", "paper", "scissors"];
    let ComputerMove = Math.floor(Math.random() * 3);
    return CompPossible [ComputerMove];
}
function RestartGame() {
    playerScore = 0
    computerScore= 0
    human_score.textContent = playerScore;
    computer_score.textContent = computerScore;
    choice_btns.forEach((btn) => {
        btn.style.visibility = "visible";}
    )
    result.textContent = "";
    final_victor.textContent = "";
    restart_button.style.visibility = "hidden"
}
function EndGame () {
    choice_btns.forEach ((btn) => {
        btn.style.visibility = "hidden"
    }  
    )
    restart_button.style.visibility = "visible"
    restart_button.addEventListener("click", RestartGame);

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


function PlayRound (PlayerMove, ComputerMove) {
    comp_choice_text.textContent= ComputerMove
    if (PlayerMove === ComputerMove) {
        console.log ("It's a tie!")
        result.textContent = "You tied!"
    };

    if (PlayerMove=="rock") {
        if (ComputerMove=="paper") {
            result.textContent="You lost! Paper beats rock!"
            computerScore++
        } else if (ComputerMove=="scissors") {
            result.textContent="You won! Rock beats scissors!"
            playerScore++;
        }
    }
    
    if (PlayerMove=="paper") {
        if (ComputerMove=="scissors") {
            result.textContent="You lost! Scissors beat paper!"
            computerScore++
        } else if (ComputerMove=="rock") {
            result.textContent= "You won! Paper beats rock!"
            playerScore++;
        } 
    }

    if(PlayerMove=="scissors") {
        if (ComputerMove=="rock") {
            result.textContent="You lost! Rock beats scissors!"
            computerScore++
        } else if (ComputerMove =="paper") {
            result.textContent="You won! Scissors beat paper!"
            playerScore++;
        }

    }
    human_score.textContent = playerScore
    computer_score.textContent = computerScore
    if (playerScore == 5) {
        result_div.appendChild(final_victor)
        final_victor.textContent= "You have overcome your enemy! Play Again?"
        EndGame()
    }
    if (computerScore == 5 ) {
        result_div.appendChild(final_victor) 
        final_victor.textContent="A horrible fate has befallen you... Play again?"
        EndGame()
    }
}
