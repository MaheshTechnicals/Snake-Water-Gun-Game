let btns = document.querySelectorAll("img")
let restart = document.querySelector("button")



btns.forEach((btn) => {
  btn.addEventListener("click", (e) => {



    let a = ["S", "G", "W"]

    let computer = a[Math.floor(Math.random() * a.length)]

    let you = e.currentTarget.classList


    if (you.contains("S") && computer == "G") {
      console.log(`😔 YOU Lost Your Gane. COMPUTER IS ${computer}`)
    }

    else if (you.contains("S") && computer == "W") {
      console.log(`☺ YOU WIN. COMPUTER IS ${computer}`)
    }


    else if (you.contains("G") && computer == "S") {
      console.log(`☺️ YOU WIN. COMPUTER IS ${computer}`)
    }


    else if (you.contains("G") && computer == "W") {
      console.log(`😔 YOU Lost Your Game. COMPUTER IS ${computer}`)
    }


    else if (you.contains("W") && computer == "S") {
      console.log(`😔 YOU Lost Your Game. COMPUTER IS ${computer}`)
    }

    else if (you.contains("W") && computer == "G") {
      console.log(`☺ YOU WIN. COMPUTER IS ${computer}`)
    }

    else if (you.contains("S") == computer) {
      console.log(`😲 Game Draw. Because computer Is Also ${computer}`)
    }

    else if (you.contains("G") == computer) {
      console.log(`😲 Game Draw. Because computer Is Also ${computer}`)
    }

    else if (you.contains("W") == computer) {
      console.log(`😲 Game Draw. Because computer Is Also ${computer}`)
    }

    else {
      console.log(computer)
    }

  })
})




restart.addEventListener("click", ()=>{
 
})



