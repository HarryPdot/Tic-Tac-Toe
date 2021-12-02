//tag selector
var allSquares = document.querySelectorAll(".square")
var victoryText = document.querySelector(".victory-text")
var resetBtn = document.querySelector(".reset-Btn")

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
        // name: "" ,
        score: []
}
let playerTwo = {
        // name: "" ,
        score: []
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
        clickedOn.style.backgroundColor="red"
        playerOne.score.push(clickedOn.id)
        clickedOn.disabled = true
    } else {
        console.log("odd", counterTurn)
        console.log("clickedon", clickedOn)
        clickedOn.style.backgroundColor="blue"
        playerTwo.score.push(clickedOn.id)
        clickedOn.disabled = true

    }
    counterTurn = counterTurn + 1



    if (playerOne.score.includes("cell1") && playerOne.score.includes("cell2") && playerOne.score.includes("cell3")) {
        victoryText.textContent = "Player 1 wins !"
        console.log("Player 1 wins with cells: 1, 2, 3")
        disableAll()
    } else if (playerOne.score.includes("cell1") && playerOne.score.includes("cell4") && playerOne.score.includes("cell7")) {
        victoryText.textContent = "Player 1 wins !"
        console.log("Player 1 wins with cells: 1, 4, 7")
        disableAll()
    } else if (playerOne.score.includes("cell1") && playerOne.score.includes("cell5") && playerOne.score.includes("cell9")) {
        victoryText.textContent = "Player 1 wins !"
        console.log("Player 1 wins with cells: 1, 5, 9")
        disableAll()
    } else if (playerOne.score.includes("cell2") && playerOne.score.includes("cell5") && playerOne.score.includes("cell8")) {
        victoryText.textContent = "Player 1 wins !"
        console.log("Player 1 wins with cells: 2, 5, 8")
        disableAll()
    } else if (playerOne.score.includes("cell3") && playerOne.score.includes("cell5") && playerOne.score.includes("cell7")) {
        victoryText.textContent = "Player 1 wins !"
        console.log("Player 1 wins with cells: 3, 5, 7")
        disableAll()
    } else if (playerOne.score.includes("cell3") && playerOne.score.includes("cell6") && playerOne.score.includes("cell9")) {
        victoryText.textContent = "Player 1 wins !"
        console.log("Player 1 wins with cells: 3, 6, 9")
        disableAll() 
    } else if (playerOne.score.includes("cell4") && playerOne.score.includes("cell5") && playerOne.score.includes("cell6")) {
        victoryText.textContent = "Player 1 wins !"
        console.log("Player 1 wins with cells: 4, 5, 6")
        disableAll()
    } else if (playerOne.score.includes("cell7") && playerOne.score.includes("cell8") && playerOne.score.includes("cell9")) {
        victoryText.textContent = "Player 1 wins !"
        console.log("Player 1 wins with cells: 7, 8, 9")
        disableAll()
    } else if (playerTwo.score.includes("cell1") && playerTwo.score.includes("cell2") && playerTwo.score.includes("cell3")) {
        victoryText.textContent = "Player 2 wins !"
        console.log("Player 2 wins with cells: 1, 2, 3")
        disableAll()
    } else if (playerTwo.score.includes("cell1") && playerTwo.score.includes("cell4") && playerTwo.score.includes("cell7")) {
        victoryText.textContent = "Player 2 wins !"
        console.log("Player 2 wins with cells: 1, 4, 7")
        disableAll()
    } else if (playerTwo.score.includes("cell1") && playerTwo.score.includes("cell5") && playerTwo.score.includes("cell9")) {
        victoryText.textContent = "Player 2 wins !"
        console.log("Player 2 wins with cells: 1, 5, 9")
        disableAll()
    } else if (playerTwo.score.includes("cell2") && playerTwo.score.includes("cell5") && playerTwo.score.includes("cell8")) {
        victoryText.textContent = "Player 2 wins !"
        console.log("Player 2 wins with cells: 2, 5, 8")
        disableAll()
    } else if (playerTwo.score.includes("cell3") && playerTwo.score.includes("cell5") && playerTwo.score.includes("cell7")) {
        victoryText.textContent = "Player 2 wins !"
        console.log("Player 2 wins with cells: 3, 5, 7")
        disableAll()
    } else if (playerTwo.score.includes("cell3") && playerTwo.score.includes("cell6") && playerTwo.score.includes("cell9")) {
        victoryText.textContent = "Player 2 wins !"
        console.log("Player 2 wins with cells: 3, 6, 9")
        disableAll()
    } else if (playerTwo.score.includes("cell4") && playerTwo.score.includes("cell5") && playerTwo.score.includes("cell6")) {
        victoryText.textContent = "Player 2 wins !"
        console.log("Player 2 wins with cells: 4, 5, 6")
        disableAll()
    } else if (playerTwo.score.includes("cell7") && playerTwo.score.includes("cell8") && playerTwo.score.includes("cell9")) {
        victoryText.textContent = "Player 2 wins !"
        console.log("Player 2 wins with cells: 7, 8, 9")
        disableAll()
    } else if ((playerOne.score.length + playerTwo.score.length) == 9) {
        victoryText.textContent = "Draw"
    }
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
        allSquares[i].style.backgroundColor = "white";
        allSquares[i].disabled = false;
        playerOne.score.pop()
        playerTwo.score.pop()
        victoryText.textContent=""
        counterTurn = 0
    }
    console.log("resetting to factory")
}

//callbacks
allSquares.forEach(function(square){
    square.addEventListener("click", handleTurns)
})

resetBtn.addEventListener("click", handleReset)