
const container = document.querySelector("#container");
let gridAmount = 256;



for (i = 0; i < gridAmount; i++) {
    const grid = document.createElement("div");
    grid.classList.add("grid");
    container.appendChild(grid);
}

const gridComponent = document.querySelectorAll(".grid");

gridComponent.forEach((div) => {
    div.addEventListener('mouseenter', () => {
    div.style.backgroundColor = 'black';
    });
});

