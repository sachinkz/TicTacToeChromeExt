var playerOne = true
var gameOver=false
var gameArr = []
var gameArr2 = []
var winningSets = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [1, 4, 7],
  [3, 6, 9],
  [1, 5, 9],
  [3, 5, 7],
  [2, 5, 8],
]

document.addEventListener("DOMContentLoaded", function () {
  var boxes = document.querySelectorAll(".box")
  for (var i = 0; i < boxes.length; i++) {
    boxes[i].addEventListener("click", function (event) {
      var id = event.target.id
      game(id)
    })
  }
})

function game(box) {
  box = parseInt(box)

  document.getElementById(box).innerHTML = "x"
  playerOne = false
  gameArr.push(box)

  winningSets.forEach((arrays) => {
    const numbersPresent = arrays.every((number) => gameArr.includes(number))
    if (numbersPresent) {
      document.getElementById("congrats").innerHTML = "congrats Cross wins !!!"
      gameOver=true
    }
  })

  if(!gameOver){
  box = parseInt(box)

    let randomNumber

      

  do {
    randomNumber = Math.floor(Math.random() * 9) + 1
  } while (gameArr2.includes(randomNumber) || gameArr.includes(randomNumber))

  gameArr2.push(randomNumber)

  document.getElementById(randomNumber).innerHTML = "o"
  playerOne = true

    winningSets.forEach((arrays) => {
      const numbersPresent = arrays.every((number) => gameArr2.includes(number))
      if (numbersPresent)
      {
        document.getElementById("congrats").innerHTML = "You Lost !!!"
      }
    })
  }
}
