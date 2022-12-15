let winnerNumber
let winner = false

function random() {
    winnerNumber = Math.floor(Math.random() * 3)
}



function button(number) {
    if (winnerNumber == number) {
        document.getElementById("guess-the-button").innerHTML = "Winner"
    } else{
        document.getElementById("guess-the-button").innerHTML = "Looser"
    }
}
