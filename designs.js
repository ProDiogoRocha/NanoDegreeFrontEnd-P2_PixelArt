// add event listener Quando o formulário é submetido e chama makeGrid ()
document.querySelector("#sizePicker").addEventListener("submit", function (e) {
    e.preventDefault();
    makeGrid();
}, false);

function makeGrid() {
    // Define a altura e largura de entrada do usuário.
    const pixelHeight = document.querySelector("#input_height").value;
    const pixelWidth = document.querySelector("#input_width").value;

    // Define o elemento da tabela.
    const pixelTable = document.querySelector("#pixel_canvas");

    // Limpe a tabela quando o usuário reenviar a altura e a largura.
    // https://stackoverflow.com/questions/7271490/delete-all-rows-in-an-html-table#answer-44971572
    while (pixelTable.hasChildNodes()) {
        pixelTable.removeChild(pixelTable.lastChild);
    }

    // Faz um loop dinamicamente para criar a tabela com base na entrada do usuário.
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

    
    // Cria novas instâncias de todo o document.querySelectorAll ("td").
    let tableCells = Array.from(document.querySelectorAll("td"));
    // Cada célula deve ter um ouvinte de eventos que defina a cor do plano de fundo da célula para a cor selecionada.
    tableCells.forEach(function (cell) {
        cell.addEventListener("click", function () {
            this.style.backgroundColor = document.querySelector("#colorPicker").value;
        }, false);
    });
}