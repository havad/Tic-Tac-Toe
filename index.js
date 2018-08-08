var player = "x"

function play(img) {
    var check = checkPlayed(img);
    if(check == false) {
        if (player == "x") {
            console.log("player is " + player);
            document.getElementById(img).src = "x.png";
            player = "o";
        }
        else if (player == "o") {
            console.log("player is " + player);
            document.getElementById(img).src = "o.png";
            player = "x";
        }
    }
}

function reset() {
    document.getElementById("topLeftImage").src = "blank.png";
    document.getElementById("topMiddleImage").src = "blank.png";
    document.getElementById("topRightImage").src = "blank.png";
    document.getElementById("middleLeftImage").src = "blank.png";
    document.getElementById("middleMiddleImage").src = "blank.png";
    document.getElementById("middleRightImage").src = "blank.png";
    document.getElementById("bottomLeftImage").src = "blank.png";
    document.getElementById("bottomMiddleImage").src = "blank.png";
    document.getElementById("bottomRightImage").src = "blank.png";
    player = "x";
}

function checkPlayed(img) {
    if(document.getElementById(img).src == "http://127.0.0.1:5500/Tic-Tac-Toe/blank.png") {
        return false;
    }
    else {
        return true;
    }
}