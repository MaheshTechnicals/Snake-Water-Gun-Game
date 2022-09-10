let btns = document.querySelectorAll("img")
let restart = document.querySelector("button")
let left = document.getElementById("left")
let right = document.getElementById("right")
let ans = document.querySelector(".ans")
let post = document.createElement("h3")



let a = ["S", "G", "W"]

let computer = a[Math.floor(Math.random() * a.length)]


btns.forEach((btn) => {
  btn.addEventListener("click", (e) => {


    let you = e.currentTarget.classList


    if (you.contains("S") && computer == "G") {
      left.src = "charecters/s.png"
      right.src = "charecters/g.png"
      post.innerHTML = `<h3 class="red" >😔 YOU LOSS</h3>`
      play("sounds/L.mp3")
    }

    else if (you.contains("S") && computer == "W") {
      left.src = "charecters/s.png"
      right.src = "charecters/w.png"
      post.innerText = "☺ YOU WIN"
      play("sounds/win.mp3")
    }

    else if (you.contains("G") && computer == "S") {
      left.src = "charecters/g.png"
      right.src = "charecters/s.png"
      post.innerHTML = `😔 YOU WIN`
      play("sounds/win.mp3")
    }

    else if (you.contains("G") && computer == "W") {
      left.src = "charecters/g.png"
      right.src = "charecters/w.png"
      post.innerHTML = `😔 YOU LOS`
      play("sounds/L.mp3")
    }


    else if (you.contains("W") && computer == "S") {
      left.src = "charecters/w.png"
      right.src = "charecters/s.png"
      post.innerText="😔 YOU LOSS"
      play("sounds/L.mp3")
    }

    else if (you.contains("W") && computer == "G") {
      left.src = "charecters/w.png"
      right.src = "charecters/g.png"
      post.innerText = "☺ YOU WIN"
      play("sounds/win.mp3")
    }



    else if (you.value = ("S") == computer) {
      left.src = "charecters/s.png"
      right.src = "charecters/s.png"
      post.innerText = "😲 NOBODY WINS"
      play("sounds/L.mp3")
    }

    else if (you.value = ("G") == computer) {
      left.src = "charecters/g.png"
      right.src = "charecters/g.png"
      post.innerText = "😲 NOBODY WINS"
      play("sounds/L.mp3")
    }

    else if (you.value = ("W") == computer) {
      left.src = "charecters/w.png"
      right.src = "charecters/w.png"
      post.innerText = "😲 NOBODY WINS"
      play("sounds/L.mp3")
    }

    ans.className = "out"
    ans.style.color = "yellow"
    ans.appendChild(post)


  })
})




restart.addEventListener("click", () => {
  location.reload()
})



let play = (file) => {
  let audio = new Audio(file)
  audio.play()
}