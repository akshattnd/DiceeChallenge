let p1 = Math.floor(Math.random() * 6 + 1);
let p2 = Math.floor(Math.random() * 6 + 1);
let img1 = document.querySelector(".img1");
let img2 = document.querySelector(".img2");
img1.setAttribute("src", `./images/dice${p1}.png`);
img2.setAttribute("src", `./images/dice${p2}.png`);
let h1 = document.querySelector("h1");
if (p1 > p2) {
  h1.innerText = "player 1 wins , refresh again ";
} else if (p1 < p2) {
  h1.innerText = "player 2 wins ,refresh again";
} else {
  h1.innerText = "its a tie ,refresh again";
}
