const container = document.querySelector("div");

for(i = 0; i < 15; i++){
    let gridPiece = document.createElement("div");
    gridPiece.classList.add("gridPiece");
    gridPiece.style.background = "gray";
    container.appendChild(gridPiece);
}