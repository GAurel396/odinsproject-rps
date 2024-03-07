console.log ("Choose rock, paper, or scissor");
function ComputerChoice () {
    const CompPossible = ["rock", "paper", "scissor"];
    let CompPick = Math.floor(Math.random() * 3);
    return CompPossible [CompPick];
    }

    let ComputerMove=ComputerChoice();
    console.log(ComputerMove);