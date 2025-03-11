
const container = document.querySelector("#container");
const button = document.querySelector("button");
let gridAmount = 16;




function createGrid() {


    for (let i = 0; i < gridAmount * gridAmount; i++) {
        const grid = document.createElement("div");
        grid.classList.add("grid");
        grid.style.width = (720/gridAmount) + 'px';
        grid.style.height = (720/gridAmount) + 'px';
        container.appendChild(grid);
    }

    const gridComponent = document.querySelectorAll(".grid");

    gridComponent.forEach((div) => {
        div.addEventListener('mouseenter', () => {
        div.style.backgroundColor = 'black';
        });
    });
};

createGrid();




button.addEventListener('click', () => {
    gridAmount = prompt("Input how many squares you would like the grid to be across and down.");
    if (gridAmount > 100) {
        gridAmount = prompt("Please input a value of 100 or less")
    }
    else if (gridAmount <= 100) {
        let deleteGrid = document.querySelectorAll(".grid");
        deleteGrid.forEach((div) => {
            div.remove();
        });
        createGrid();
    };
});






