let rock = document.getElementsByClassName("users-rock")[0];
let paper = document.getElementsByClassName("users-paper")[0];
let scissors = document.getElementsByClassName("users-scissors")[0];
let i = 1;
let j = 1;
let PCrock = document.getElementsByClassName("pc-rock")[0];
let PCpaper = document.getElementsByClassName("pc-paper")[0];
let PCscissors = document.getElementsByClassName("pc-scissors")[0];
let play2 = document.getElementsByClassName("play")[0];
let myScore = document.getElementsByClassName("me")[0];
let compScore = document.getElementsByClassName("comp")[0];
let pcwon = document.getElementsByClassName("pc-won")[0];
let userwon = document.getElementsByClassName("user-won")[0];
let rndInt = 0;
let userValue;
let pcValue;
let objective;
// let objective=prompt("Set Objective: ", "");
function randomIntFromInterval() {
    return Math.floor(Math.random() * 3 + 1);
}

let playAgain = () => {
    location.reload();
}
let play = () => {
    if (document.getElementById("Objective").value == '') {
        alert("Objective cannot be empty")
    }
    else {

        objective = document.getElementById("Objective").value;
        console.log(objective);
        play2.style.opacity = "0";
    }
}

let rockF = () => {
    rock.style.opacity = "1";
    rock.style.width = "200px";
    paper.style.width = "0px";
    scissors.style.width = "0px";
    paper.style.opacity = "0";
    scissors.style.opacity = "0";

    pcValue = randomIntFromInterval();
    userValue = 1;

    check();
}
let paperF = () => {
    paper.style.opacity = "1";
    paper.style.width = "200px";
    rock.style.width = "0px";
    scissors.style.width = "0px";
    rock.style.opacity = "0";
    scissors.style.opacity = "0";

    pcValue = randomIntFromInterval();
    userValue = 2;

    check();
}
let scissorsF = () => {
    scissors.style.opacity = "1";
    scissors.style.width = "200px"
    paper.style.width = "0px"
    rock.style.width = "0px"
    paper.style.opacity = "0";
    rock.style.opacity = "0";

    pcValue = randomIntFromInterval();
    userValue = 3;

    check();
}

let check = () => {
    if (pcValue == userValue) {
        // console.log("Draw");   
    }
    else if (userValue == 1) {
        if (pcValue == 2) {
            // console.log("pc won"); 
            compScore.innerHTML = "Computer Score: " + i++
        }
        else {
            // console.log("user won");
            myScore.innerHTML = "My Score: " + j++
        }
    }
    else if (userValue == 2) {
        if (pcValue == 1) {
            // console.log("user won");
            myScore.innerHTML = "My Score: " + j++
        }
        else {
            // console.log("pc won");
            compScore.innerHTML = "Computer Score: " + i++
        }
    }
    else {
        if (pcValue == 1) {
            // console.log("pc won");
            compScore.innerHTML = "Computer Score: " + i++
        }
        else {
            // console.log("user won");
            myScore.innerHTML = "My Score: " + j++
        }
    }
    if (i - 1 == objective) {
        setTimeout(() => {
            console.log("Computer wonnnn");
            pcwon.style.zIndex = "3"
            pcwon.style.opacity = "1"
        }, 400);

    }
    if (j - 1 == objective) {
        setTimeout(() => {
            console.log("user wonnnn");
            userwon.style.zIndex = "3"
            userwon.style.opacity = "1"
        }, 400);
    }
}


setInterval(() => {
    if (pcValue == 1) {
        PCrock.style.opacity = "1";
        PCrock.style.width = "230px";
        PCpaper.style.width = "0px"
        PCscissors.style.width = "0px";
        PCpaper.style.opacity = "0";
        PCscissors.style.opacity = "0";
    }
    if (pcValue == 2) {
        PCpaper.style.opacity = "1";
        PCpaper.style.width = "230px";
        PCrock.style.width = "0px"
        PCscissors.style.width = "0px"
        PCrock.style.opacity = "0";
        PCscissors.style.opacity = "0";
    }
    if (pcValue == 3) {
        PCscissors.style.opacity = "1";
        PCscissors.style.width = "230px";
        PCpaper.style.width = "0px"
        PCrock.style.width = "0px"
        PCrock.style.opacity = "0";
        PCpaper.style.opacity = "0";
    }
}, 10);

document.addEventListener('keydown', function (e) {
    if (e.key === 'Enter') {
        play();
    }
})
