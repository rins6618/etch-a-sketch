function createCanvas(canvasSize = 4) {
    const canvasElement = document.querySelector("#canvas");
    // wipe off every canvas node element first
    while (canvasElement.firstChild) canvasElement.removeChild(canvasElement.firstChild);
    const totalCanvasSize = canvasSize**2;
    const canvasScaleFac = 1 / canvasSize;

    for (let i = 0; i < totalCanvasSize; i++) {
        const divElement = document.createElement('div');
        divElement.classList.add("divElement");
        divElement.style.flex = `0 0 ${canvasScaleFac*100}%`;

        divElement.addEventListener("mouseenter", e => {
            e.target.classList.add("divHover");
            if (e.buttons === 1)
                e.target.classList.add("divPainted");
        });
        divElement.addEventListener("mouseleave", e => {
            e.target.classList.remove("divHover");
        })
        canvasElement.appendChild(divElement);
    }

}

createCanvas();
const resizeButton = document.querySelector("#resizeButton");
resizeButton.addEventListener("click", e => {
    let numberInput = parseInt(prompt("Insert a canvas size (0-100): ", "4"));
    while (isNaN(numberInput) || numberInput > 100 || 0 > numberInput) {
        numberInput = parseInt(prompt("Insert a valid canvas size (0-100): ", "4"));
    }
    createCanvas(numberInput);
})