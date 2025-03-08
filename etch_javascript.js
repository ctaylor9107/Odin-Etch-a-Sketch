
const container = document.querySelector("#container");
let gridAmount = 256;

//const grid = document.createElement("div");
//grid.classList.add("grid");

//container.appendChild(grid);

for (i = 0; i <= gridAmount; i++) {
    const grid = document.createElement("div");
    grid.classList.add("grid");
    container.appendChild(grid);
}

