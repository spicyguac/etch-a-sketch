const container = document.querySelector("div");

let numberOfSquares = 0;

const userInput = document.querySelector("#getSquares");

userInput.addEventListener("click", () => {
    numberOfSquares = prompt("How Many Squares Do You Want In Your Grid");
    numberOfSquares = +numberOfSquares;
    container.textContent = '';
    createGrid(numberOfSquares);
})

function createGrid(userInput){
    console.log(userInput**2);
    for(i = 0; i < userInput**2; i++){
        let gridPiece = document.createElement("div");
        gridPiece.classList.add("gridPiece");
        let dimensions = 960/userInput;
        gridPiece.style.height = `${dimensions}px`;
        gridPiece.style.width = `${dimensions}px`;
        container.appendChild(gridPiece);
    }
    
    const grid = document.querySelectorAll('.gridPiece');
    
    grid.forEach((gridPiece) => {
        gridPiece.addEventListener('mouseover', (event) => {
            event.target.style.backgroundColor = "black";
        });
    })
}

