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
      console.log(`😔 YOU Lost Your Gane. COMPUTER IS ${computer}`)
  
      left.src="charecters/s.png"
      right.src="charecters/g.png"
    }

    else if (you.contains("S") && computer == "W") {
      console.log(`☺ YOU WIN. COMPUTER IS ${computer}`)
      left.src="charecters/s.png"
      right.src="charecters/w.png"
    }


    else if (you.contains("G") && computer == "S") {
      console.log(`☺️ YOU WIN. COMPUTER IS ${computer}`)
      left.src="charecters/g.png"
      right.src="charecters/s.png"
    }


    else if (you.contains("G") && computer == "W") {
      console.log(`😔 YOU Lost Your Game. COMPUTER IS ${computer}`)
      left.src="charecters/g.png"
      right.src="charecters/w.png"
    }


    else if (you.contains("W") && computer == "S") {
      console.log(`😔 YOU Lost Your Game. COMPUTER IS ${computer}`)
      left.src="charecters/w.png"
      right.src="charecters/s.png"
    }

    else if (you.contains("W") && computer == "G") {
      console.log(`☺ YOU WIN. COMPUTER IS ${computer}`)
      left.src="charecters/w.png"
      right.src="charecters/g.png"
    } 

    else if (you.value== computer) {
      console.log(`😲 Game Draw. Because computer Is Also ${computer}`)
    }

    else {
      console.log(computer)
    }





  })
})




restart.addEventListener("click", () => {
location.reload()
})


