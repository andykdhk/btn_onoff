const btn = document.getElementById("btn");

let onoff = "red";

btn.addEventListener("click", function () {
  changeColor();
});

function changeColor() {
  if (onoff === "red") {
    document.body.style.backgroundColor = "red";
    document.querySelector("#btn").innerText = "BLUE";
    onoff = "blue";
  } else if (onoff === "blue") {
    document.body.style.backgroundColor = "blue";
    document.querySelector("#btn").innerText = "RED";
    onoff = "red";
  }
}
