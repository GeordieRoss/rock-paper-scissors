
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