document.querySelector("#sizePicker").addEventListener("submit", function (e) {
    e.preventDefault();
    makeGrid();
}, false);

function makeGrid() {
    const pixelHeight = document.querySelector("#input_height").value;
    const pixelWidth = document.querySelector("#input_width").value;

    const pixelTable = document.querySelector("#pixel_canvas");

    while (pixelTable.hasChildNodes()) {
        pixelTable.removeChild(pixelTable.lastChild);
    }

    for (let row = 0; row < pixelHeight; row++) {
        let tr = document.createElement('tr');
        tr.id = 'row-' + row;
        pixelTable.appendChild(tr);
        for (let col = 0; col < pixelWidth; col++) {
            let td = document.createElement('td');
            td.id = 'row-' + row + '_cell-' + col;
            pixelTable.lastChild.appendChild(td);
        }
    }

    let tableCells = Array.from(document.querySelectorAll("td"));
    tableCells.forEach(function (cell) {
        cell.addEventListener("click", function () {
            this.style.backgroundColor = document.querySelector("#colorPicker").value;
        }, false);
    });
}