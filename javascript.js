const container = document.querySelector("div");

let numberOfSquares = 0;

const userInput = document.querySelector("#getSquares");

userInput.addEventListener("click", () => {
    numberOfSquares = prompt("How Many Squares Do You Want In Your Grid");
    numberOfSquares = +numberOfSquares;
})

for(i = 0; i < userinput; i++){
    let gridPiece = document.createElement("div");
    gridPiece.classList.add("gridPiece");
    container.appendChild(gridPiece);
}

const grid = document.querySelectorAll('.gridPiece');

console.log(grid.length);

grid.forEach((gridPiece) => {
    gridPiece.addEventListener('mouseover', (event) => {
        event.target.style.backgroundColor = "black";
    });
})
