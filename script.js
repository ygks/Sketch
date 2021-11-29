const container = document.querySelector("#container");
for (let j = 0; j < 16; j++) {
  for (let i = 0; i < 16; i++) {
    const square = document.createElement("div");
    square.classList.add("square");
    container.appendChild(square);

    
  }
}

document.querySelector(".square").addEventListener("mouseover", function () {
  document.querySelector(".square").style.backgroundColor = "pink";
});
