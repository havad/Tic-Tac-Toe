var player = "x";
var boardstate = ["0","0","0","0","0","0","0","0","0"];
var playing = true;

function play(img) {
    var check = checkPlayed(img);
    if(check == false && playing == true) {
        if (player == "x") {
            console.log("player is " + player);
            document.getElementById(img).src = "x.png";
            editBoardstate(img);
            checkWin(player);
            player = "o";
        }
        else if (player == "o") {
            console.log("player is " + player);
            document.getElementById(img).src = "o.png";
            editBoardstate(img);
            checkWin(player);
            player = "x";
        }
    }
}

function checkWin(letter) {
    if(boardstate[0] == letter && boardstate[1] == letter && boardstate[2] == letter) {
        console.log("player " + player + " wins!");
        playing = false;
    }
    else if(boardstate[0] == letter && boardstate[4] == letter && boardstate[8] == letter) {
        console.log("player " + player + " wins!");
        playing = false;
    }
    else if(boardstate[0] == letter && boardstate[3] == letter && boardstate[6] == letter) {
        console.log("player " + player + " wins!");
        playing = false;
    }
    else if(boardstate[1] == letter && boardstate[4] == letter && boardstate[7] == letter) {
        console.log("player " + player + " wins!");
        playing = false;
    }
    else if(boardstate[2] == letter && boardstate[4] == letter && boardstate[6] == letter) {
        console.log("player " + player + " wins!");
        playing = false;
    }
    else if(boardstate[2] == letter && boardstate[5] == letter && boardstate[8] == letter) {
        console.log("player " + player + " wins!");
        playing = false;
    }
    else if(boardstate[3] == letter && boardstate[4] == letter && boardstate[5] == letter) {
        console.log("player " + player + " wins!");
        playing = false;
    }
    else if(boardstate[6] == letter && boardstate[7] == letter && boardstate[8] == letter) {
        console.log("player " + player + " wins!");
        playing = false;
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
    playing = true;
}

function checkPlayed(img) {
    if(document.getElementById(img).src == "http://127.0.0.1:5500/Tic-Tac-Toe/blank.png") {
        return false;
    }
    else {
        return true;
    }
}