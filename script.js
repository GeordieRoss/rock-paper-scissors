
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

function playRound() {

    const humanChoice = getHumanChoice();
    const computerChoice = getComputerChoice();
    var score = compareScores(humanChoice, computerChoice, 3)
    var winGraphic;
    console.log(score)
    switch (score) {
        case 1:
            humanScore++;
            winGraphic = ' !---- BEATS ----> '
            break;

        case 2:
            computerScore++;
            winGraphic = ' <---- BEATS ----! '
            break;

        default:
            winGraphic = ' ?---- DRAW ----? '
            break;
    }
    console.log("=======This Round=======");
    console.log("H: " + getFriendlyOutput(humanChoice) + winGraphic + "C: " + getFriendlyOutput(computerChoice));
    console.log("=====Current Scores=====");
    console.log("H: " + humanScore + " C: " + computerScore);

}

var humanScore = 0;
var computerScore = 0;

var rounds = 0

while (rounds < 5) {
    playRound();
    rounds++;
}




//====================== Tests ==================================

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