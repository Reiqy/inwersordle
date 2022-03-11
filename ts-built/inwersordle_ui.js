function validate() {
    return true;
}
function selectCell(selectedCell) {
    let cells = document.getElementsByClassName("cell");
    for (let cell of cells) {
        cell.classList.remove("selected");
    }
    selectedCell.classList.add("selected");
    return selectedCell;
}
$(function () {
    let currentlySelected = $(".row.first .cell.first")[0];
    selectCell(currentlySelected);
    $(".cell").on("click", function (e) {
        currentlySelected = selectCell(e.target);
    });
    $(document).on("keydown", function (e) {
        if (e.key == "ArrowLeft") {
            let previousSibling = currentlySelected.previousElementSibling;
            if (previousSibling)
                currentlySelected = selectCell(previousSibling);
        }
        else if (e.key == "ArrowRight") {
            let nextSibling = currentlySelected.nextElementSibling;
            if (nextSibling)
                currentlySelected = selectCell(nextSibling);
        }
        else if (e.key.toString().length == 1 && (/[a-zA-Z]/.test(e.key))) {
            currentlySelected.innerHTML = e.key;
            if (currentlySelected.nextElementSibling) {
                currentlySelected = selectCell(currentlySelected.nextElementSibling);
                console.log(currentlySelected);
            }
            else {
                if (validate()) {
                    console.log("validated -> next row!");
                    currentlySelected = selectCell(currentlySelected.parentElement.nextElementSibling.firstElementChild);
                }
            }
        }
    });
    console.log(currentlySelected);
});
//# sourceMappingURL=inwersordle_ui.js.map