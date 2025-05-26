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
    const announcement = document.querySelector("#announcement");

    switch (score) {
        case 1:
            humanScore++;
            hScore.textContent = humanScore;
            announcement.textContent = "You win! :D"
            announcement.style.background = "green"
            break;

        case 2:
            computerScore++;
            cScore.textContent = computerScore;
            announcement.textContent = "CPU wins! :("
            announcement.style.background = "red"
            break;

        default:
            announcement.textContent = "Draw... :/"
            announcement.style.background = "yellow"
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



//====================== Tests ======================\\

function testCompareScores() {

    var allPassed = true;

    if (compareScores(0, 1, 3) != 2) {
        allPassed = false;
        console.log("test 1 failed")
        console.log(compareScores(0, 1, 3))
    }

    if (compareScores(2, 1, 3) != 1) {
        allPassed = false;
        console.log("test 2 failed")
        console.log(compareScores(2, 1, 3))
    }

    if (compareScores(0, 2, 3) != 1) {
        allPassed = false;
        console.log("test 3 failed")
        console.log(compareScores(0, 2, 3))
    }

    if (compareScores(2, 2, 3) != 0) {
        allPassed = false;
        console.log("test 4 failed")
        console.log(compareScores(2, 2, 3))
    }

    if (allPassed) {
        console.log("All tests passed")
    }
}