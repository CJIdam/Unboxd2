let i = 0;
let span = ["graduation", "anniversary", "wedding", "birthday"];

function changespan() {
  document.getElementById("obj").innerHTML = span[i];

  if (i < span.length - 1) {
    i++;
  } else {
    i = 0;
  }
  // console.log(span[i]);
}
setInterval(changespan, 5000);

const Right = document.getElementById("next");
console.log(Right);
Right.addEventListener("click", moveRight);

function moveRight() {
  console.log("[moveRight] pressed");
  document.getElementById("scroll").scrollLeft += 300;
}
const Left = document.getElementById("prev");
Left.addEventListener("click", moveleft);

function moveleft() {
  console.log("[moveRight] pressed");
  document.getElementById("scroll").scrollLeft += -200;
}
