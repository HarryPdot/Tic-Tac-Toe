//tag selector
allSquares = document.querySelectorAll(".square")


//functions
function test(event){
    clickedOn = event.target
    clickedOn.style.backgroundColor="red"
}





//callbacks
allSquares.forEach(function(square){
    square.addEventListener("click", test)
})