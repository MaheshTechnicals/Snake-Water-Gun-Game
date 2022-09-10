let a = ["S", "G", "W"]

let you = prompt("Enter S, W or G....").toUpperCase()

let computer = a[Math.floor(Math.random() * a.length)]



if (you == "S" && computer == "G") {
  console.log(`😔 YOU Lost Your Gane. COMPUTER IS ${computer}`)
}

else if (you == "S" && computer == "W") {
  console.log(`☺ YOU WIN. COMPUTER IS ${computer}`)
}


else if (you == "G" && computer == "S") {
  console.log(`☺️ YOU WIN. COMPUTER IS ${computer}`)
}


else if (you == "G" && computer == "W") {
  console.log(`😔 YOU Lost Your Game. COMPUTER IS ${computer}`)
}


else if (you == "W" && computer == "S") {
  console.log(`😔 YOU Lost Your Game. COMPUTER IS ${computer}`)
}

else if (you == "W" && computer == "G") {
  console.log(`☺ YOU WIN. COMPUTER IS ${computer}`)
}

else if (you == computer) {
  console.log(`😲 Game Draw. Because computer Is Also ${computer}`)
}

else {
  console.log(computer)
}