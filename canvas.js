function createCanvas() {
    const canvasElement = document.querySelector("#canvas");
    let canvasSize = 4;
    const totalCanvasSize = canvasSize**2;
    let canvasScaleFac = 1 / canvasSize;

    for (let i = 0; i < totalCanvasSize; i++) {
        const divElement = document.createElement('div');
        divElement.classList.add("divElement");
        divElement.style.flex = `0 0 ${canvasScaleFac*100}%`;

        divElement.addEventListener("mouseenter", e => {
            e.target.classList.add("divHover");
        });
        divElement.addEventListener("mouseleave", e => {
            e.target.classList.remove("divHover");
        })
        canvasElement.appendChild(divElement);
    }

}

createCanvas()