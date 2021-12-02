//tag selector
var allSquares = document.querySelectorAll(".square")
var victoryText = document.querySelector(".victory-text")

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
let playerOneArr = []
//functions
//taking turns/choosing their cells
function test(event){
    clickedOn = event.target
    console.log(counterTurn)
    if(counterTurn % 2 ==0){
        console.log("even")
        console.log(clickedOn)
        clickedOn.style.backgroundColor="red"
        playerOne.score.push(clickedOn.id)
        clickedOn.disabled = true
    } else {
        console.log("odd")
        console.log(clickedOn)
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
    } else if (playerTwo.score.includes("cell4") && playerTwo.score.includes("cell5") && playerTwo.score.includes("cell6")) {
        victoryText.textContent = "Player 2 wins !"
        console.log("Player 2 wins with cells: 4, 5, 6")
        disableAll()
    } else if (playerTwo.score.includes("cell7") && playerTwo.score.includes("cell8") && playerTwo.score.includes("cell9")) {
        victoryText.textContent = "Player 2 wins !"
        console.log("Player 2 wins with cells: 7, 8, 9")
        disableAll()
    }
}

function disableAll(){
    let i = 0
    while(i < allSquares.length) {
        allSquares[i].disabled = true;
        i++;
    }

}

//callbacks
allSquares.forEach(function(square){
    square.addEventListener("click", test)
})

