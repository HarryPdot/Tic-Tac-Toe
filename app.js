//tag selector
var allSquares = document.querySelectorAll(".grid > button")
var victoryText = document.querySelector(".victory-text")
var resetBtn = document.querySelector(".reset-Btn")
var marioVic = document.querySelector(".left-grid")
var bowserVic = document.querySelector(".right-grid")
var moveMario = document.querySelector(".marioStand")
var moveBowser = document.querySelector(".bowserStand")


//another method, shorter/efficient
// var winningConditions = [
//     [1,2,3],
//     [4,5,6],
//     [7,8,9],
//     [1,4,7],
//     [2,5,8],
//     [3,6,9],
//     [1,5,9],
//     [3,5,7]
// ]

//player info
let playerOne = {
        score: [],
        scoreboard: 0
}
let playerTwo = {
        score: [],
        scoreboard: 0

}


let counterTurn = 0
//functions
//taking turns/choosing their cells
function handleTurns(event) {
    clickedOn = event.target
    console.log("counterTurn", counterTurn)
    if(counterTurn % 2 ==0){
        console.log("even", counterTurn)
        console.log("clickedon", clickedOn)
        clickedOn.className = "marioImg"
        playerOne.score.push(clickedOn.id)
        clickedOn.disabled = true
    } else {
        console.log("odd", counterTurn)
        console.log("clickedon", clickedOn)
        clickedOn.className = "bowserImg"
        playerTwo.score.push(clickedOn.id)
        clickedOn.disabled = true

    }
    counterTurn = counterTurn + 1

    if(playerOne.scoreboard === 5) {

    }
    if(playerTwo.scoreboard === 5) {

    }




    //win conditions
    if (playerOne.score.includes("cell1") && playerOne.score.includes("cell2") && playerOne.score.includes("cell3")) {
        console.log("Player 1 wins with cells: 1, 2, 3")
        marioVic.style.visibility = "visible"
        playerOne.scoreboard = playerOne.scoreboard + 1
        moveMario1()
        disableAll()
    } else if (playerOne.score.includes("cell1") && playerOne.score.includes("cell4") && playerOne.score.includes("cell7")) {
        console.log("Player 1 wins with cells: 1, 4, 7")
        marioVic.style.visibility = "visible"
        playerOne.scoreboard = playerOne.scoreboard + 1
        moveMario1()
        disableAll()
    } else if (playerOne.score.includes("cell1") && playerOne.score.includes("cell5") && playerOne.score.includes("cell9")) {
        console.log("Player 1 wins with cells: 1, 5, 9")
        marioVic.style.visibility = "visible"
        playerOne.scoreboard = playerOne.scoreboard + 1
        moveMario1()
        disableAll()
    } else if (playerOne.score.includes("cell2") && playerOne.score.includes("cell5") && playerOne.score.includes("cell8")) {
        console.log("Player 1 wins with cells: 2, 5, 8")
        marioVic.style.visibility = "visible"
        playerOne.scoreboard = playerOne.scoreboard + 1
        moveMario1()
        moveMario1()
        disableAll()
    } else if (playerOne.score.includes("cell3") && playerOne.score.includes("cell5") && playerOne.score.includes("cell7")) {
        console.log("Player 1 wins with cells: 3, 5, 7")
        marioVic.style.visibility = "visible"
        playerOne.scoreboard = playerOne.scoreboard + 1
        moveMario1()
        disableAll()
    } else if (playerOne.score.includes("cell3") && playerOne.score.includes("cell6") && playerOne.score.includes("cell9")) {
        console.log("Player 1 wins with cells: 3, 6, 9")
        marioVic.style.visibility = "visible"
        playerOne.scoreboard = playerOne.scoreboard + 1
        moveMario1()
        disableAll() 
    } else if (playerOne.score.includes("cell4") && playerOne.score.includes("cell5") && playerOne.score.includes("cell6")) {
        console.log("Player 1 wins with cells: 4, 5, 6")
        marioVic.style.visibility = "visible"
        playerOne.scoreboard = playerOne.scoreboard + 1
        moveMario1()
        disableAll()
    } else if (playerOne.score.includes("cell7") && playerOne.score.includes("cell8") && playerOne.score.includes("cell9")) {
        console.log("Player 1 wins with cells: 7, 8, 9")
        marioVic.style.visibility = "visible"
        playerOne.scoreboard = playerOne.scoreboard + 1
        moveMario1()
        disableAll()
    } else if (playerTwo.score.includes("cell1") && playerTwo.score.includes("cell2") && playerTwo.score.includes("cell3")) {
        console.log("Player 2 wins with cells: 1, 2, 3")
        bowserVic.style.visibility = "visible"
        playerTwo.scoreboard = playerTwo.scoreboard + 1
        moveBowser1()
        disableAll()
    } else if (playerTwo.score.includes("cell1") && playerTwo.score.includes("cell4") && playerTwo.score.includes("cell7")) {
        console.log("Player 2 wins with cells: 1, 4, 7")
        bowserVic.style.visibility = "visible"
        playerTwo.scoreboard = playerTwo.scoreboard + 1
        moveBowser1()
        disableAll()
    } else if (playerTwo.score.includes("cell1") && playerTwo.score.includes("cell5") && playerTwo.score.includes("cell9")) {
        console.log("Player 2 wins with cells: 1, 5, 9")
        bowserVic.style.visibility = "visible"
        playerTwo.scoreboard = playerTwo.scoreboard + 1
        moveBowser1()
        disableAll()
    } else if (playerTwo.score.includes("cell2") && playerTwo.score.includes("cell5") && playerTwo.score.includes("cell8")) {
        console.log("Player 2 wins with cells: 2, 5, 8")
        bowserVic.style.visibility = "visible"
        playerTwo.scoreboard = playerTwo.scoreboard + 1
        moveBowser1()
        disableAll()
    } else if (playerTwo.score.includes("cell3") && playerTwo.score.includes("cell5") && playerTwo.score.includes("cell7")) {
        console.log("Player 2 wins with cells: 3, 5, 7")
        bowserVic.style.visibility = "visible"
        playerTwo.scoreboard = playerTwo.scoreboard + 1
        moveBowser1()
        disableAll()
    } else if (playerTwo.score.includes("cell3") && playerTwo.score.includes("cell6") && playerTwo.score.includes("cell9")) {
        console.log("Player 2 wins with cells: 3, 6, 9")
        bowserVic.style.visibility = "visible"
        playerTwo.scoreboard = playerTwo.scoreboard + 1
        moveBowser1()
        disableAll()
    } else if (playerTwo.score.includes("cell4") && playerTwo.score.includes("cell5") && playerTwo.score.includes("cell6")) {
        console.log("Player 2 wins with cells: 4, 5, 6")
        bowserVic.style.visibility = "visible"
        playerTwo.scoreboard = playerTwo.scoreboard + 1
        moveBowser1()
        disableAll()
    } else if (playerTwo.score.includes("cell7") && playerTwo.score.includes("cell8") && playerTwo.score.includes("cell9")) {
        console.log("Player 2 wins with cells: 7, 8, 9")
        bowserVic.style.visibility = "visible"
        playerTwo.scoreboard = playerTwo.scoreboard + 1
        moveBowser1()
        disableAll()
    } else if ((playerOne.score.length + playerTwo.score.length) == 9) {
        victoryText.textContent="Draw"
    }

    console.log("scoreboard",playerOne.scoreboard * 160)

}
//moving the characters
function moveMario1() {
    let test1 = playerOne.scoreboard * 172
    console.log("test", test1)
    let marginAdd = test1
    console.log("marginAdd", marginAdd)
    moveMario.style.marginLeft = marginAdd+"px"
    moveMario.style.transition ="2s"
}

function moveBowser1() {
    let test1 = 800 - (playerTwo.scoreboard * 160)
    console.log("test", test1)
    let marginAdd = test1
    console.log("marginAdd", marginAdd)
    moveBowser.style.marginLeft = marginAdd+"px"
    moveBowser.style.transition ="2s"
}




function disableAll(){
    let i = 0
    while(i < allSquares.length) {
        allSquares[i].disabled = true;
        i++;
    }

}

//reset to factory
function handleReset() {
    for(let i=0; i < allSquares.length; i++) {
        allSquares[i].style.backgroundColor = "";
        allSquares[i].disabled = false;
        allSquares[i].className=""
        playerOne.score.pop()
        playerTwo.score.pop()
        
        counterTurn = 0
        marioVic.style.visibility = "hidden"
        bowserVic.style.visibility = "hidden"
    }
    console.log("resetting to factory")
}

//callbacks
allSquares.forEach(function(square){
    square.addEventListener("click", handleTurns)
})

resetBtn.addEventListener("click", handleReset)