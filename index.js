var player = "x";
var boardstate = ["0","0","0","0","0","0","0","0","0"];

function play(img) {
    var check = checkPlayed(img);
    if(check == false) {
        if (player == "x") {
            console.log("player is " + player);
            document.getElementById(img).src = "x.png";
            editBoardstate(img);
            player = "o";
        }
        else if (player == "o") {
            console.log("player is " + player);
            document.getElementById(img).src = "o.png";
            editBoardstate(img);
            player = "x";
        }
    }
}

function editBoardstate(img) {
    if(img == "topLeftImage") {
        boardstate[0] = player;
    }
    else if(img == "topMiddleImage") {
        boardstate[1] = player;
    }
    else if(img == "topRightImage") {
        boardstate[2] = player;
    }
    else if(img == "middleLeftImage") {
        boardstate[3] = player;
    }
    else if(img == "middleMiddleImage") {
        boardstate[4] = player;
    }
    else if(img == "middleRightImage") {
        boardstate[5] = player;
    }
    else if(img == "bottomLeftImage") {
        boardstate[6] = player;
    }
    else if(img == "bottomMiddleImage") {
        boardstate[7] = player;
    }
    else if(img == "bottomRightImage") {
        boardstate[8] = player;
    }
    console.log(boardstate);
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
    for(var i = 0; i < 9; i++) {
        boardstate[i] = "0";
    }
}

function checkPlayed(img) {
    if(document.getElementById(img).src == "http://127.0.0.1:5500/Tic-Tac-Toe/blank.png") {
        return false;
    }
    else {
        return true;
    }
}