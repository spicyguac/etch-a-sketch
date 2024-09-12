const container = document.querySelector("div");

for(i = 0; i < 16; i++){
    let gridPiece = document.createElement("div");
    gridPiece.classList.add("gridPiece");
    container.appendChild(gridPiece);
}