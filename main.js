let btns = document.querySelectorAll("img")
let restart = document.querySelector("button")
let left = document.getElementById("left")
let right = document.getElementById("right")


let a = ["S", "G", "W"]

let computer = a[Math.floor(Math.random() * a.length)]



btns.forEach((btn) => {
  btn.addEventListener("click", (e) => {


    let you = e.currentTarget.classList


    if (you.contains("S") && computer == "G") {
      left.src = "charecters/s.png"
      right.src = "charecters/g.png"
    }

    else if (you.contains("S") && computer == "W") {
      left.src = "charecters/s.png"
      right.src = "charecters/w.png"
    }


    else if (you.contains("G") && computer == "S") {
      left.src = "charecters/g.png"
      right.src = "charecters/s.png"
    }


    else if (you.contains("G") && computer == "W") {
      left.src = "charecters/g.png"
      right.src = "charecters/w.png"
    }


    else if (you.contains("W") && computer == "S") {
      left.src = "charecters/w.png"
      right.src = "charecters/s.png"
    }

    else if (you.contains("W") && computer == "G") {
      left.src = "charecters/w.png"
      right.src = "charecters/g.png"
    }

    else if (you.value = ("S") == computer) {
      left.src = "charecters/s.png"
      right.src = "charecters/s.png"
    }

    else if (you.value = ("G") == computer) {
      left.src = "charecters/g.png"
      right.src = "charecters/g.png"
    }

    else if (you.value = ("W") == computer) {
      left.src = "charecters/w.png"
      right.src = "charecters/w.png"
    }





  })
})




restart.addEventListener("click", () => {
  location.reload()
})