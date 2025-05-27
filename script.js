// Globals
const assetsPath = "./assets/"

function getComputerChoice() {

    // Get random number between 1-3
    var choice = Math.floor(Math.random() * 3) + 1;

    return choice;

}

function getHumanChoice() {
    var choice = 0;
    while (choice == 0) {
        var input = prompt("Choose Rock, Paper, or Scissors:").toLowerCase();
        switch (input) {
            case "r":
            case "rock":
                choice = 1
                break;

            case "p":
            case "paper":
                choice = 2;
                break;

            case "s":
            case "scissors":
                choice = 3;
                break;

            default:
                console.warn("Invalid input...")
                break;
        }
    }

    return choice;

}

// Receive number between 1-3 and convert to R/P/S format.
function getFriendlyOutput(output) {
    var choice = "";
    switch (output) {
        case 1:
            choice = "Rock!";
            break;

        case 2:
            choice = "Paper!";
            break;

        case 3:
            choice = "Scissors!";
            break;

        default:
            break;
    }
    return choice;
}

// Return 0 for draw
// Return 1 for p1 win
// Return 2 for p2 win
// n is number of options for game (n=3 for RPS)
function compareScores(p1, p2, n) {
    var diff = p1 - p2;
    return diff - n * Math.floor(diff / n);

}

function playRound(humanChoiceStr = "") {

    const hHand = document.querySelector("#left-hand")
    const cHand = document.querySelector("#right-hand")

    // Get computer choice
    const computerChoice = getComputerChoice();
    if (humanChoiceStr == "") {
        humanChoice = getHumanChoice();
    }

    // Parse human choice
    switch (humanChoiceStr) {
        case "rock":
            humanChoice = 1;
            hHand.src = assetsPath + "rock-Lhand.png"
            break;
        case "paper":
            humanChoice = 2;
            hHand.src = assetsPath + "paper-Lhand.png"
            break;
        case "scissors":
            humanChoice = 3;
            hHand.src = assetsPath + "scissors-Lhand.png"
            break;
        default:
            break;
    }

    switch (computerChoice) {
        case 1:
            cHand.src = assetsPath + "rock-Rhand.png"
            break;
        case 2:
            cHand.src = assetsPath + "paper-Rhand.png"
            break;
        case 3:
            cHand.src = assetsPath + "scissors-Rhand.png"
            break;
        default:
            break;
    }

    var score = compareScores(humanChoice, computerChoice, 3)

    const hScore = document.querySelector("#score-human");
    const cScore = document.querySelector("#score-computer");
    const youWord = document.querySelector("#you");
    const cpuWord = document.querySelector("#cpu");

    switch (score) {
        case 1:
            humanScore++;
            hScore.textContent = humanScore;
            youWord.style.backgroundColor = "green";
            cpuWord.style.backgroundColor = "transparent";
            break;

        case 2:
            computerScore++;
            cScore.textContent = computerScore;
            youWord.style.backgroundColor = "transparent";
            cpuWord.style.backgroundColor = "green";
            break;

        default:
            youWord.style.backgroundColor = "yellow";
            cpuWord.style.backgroundColor = "yellow";
            break;
    }

}

const buttons = document.querySelectorAll("button")
buttons.forEach((button) => {
    // and for each one we add a 'click' listener
    button.addEventListener("click", () => {
        playRound(button.id);
    });
});

var humanScore = 0;
var computerScore = 0;


