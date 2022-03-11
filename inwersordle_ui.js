function validate() {
    return true;
}
function selectCell(selectedCell) {
    var cells = document.getElementsByClassName("cell");
    for (var _i = 0, _a = cells; _i < _a.length; _i++) {
        var cell = _a[_i];
        cell.classList.remove("selected");
    }
    selectedCell.classList.add("selected");
    return selectedCell;
}
$(function () {
    var currentlySelected = $(".row.first .cell.first")[0];
    selectCell(currentlySelected);
    $(".cell").on("click", function (e) {
        currentlySelected = selectCell(e.target);
    });
    $(document).on("keydown", function (e) {
        if (e.key == "ArrowLeft") {
            var previousSibling = currentlySelected.previousElementSibling;
            if (previousSibling)
                currentlySelected = selectCell(previousSibling);
        }
        else if (e.key == "ArrowRight") {
            var nextSibling = currentlySelected.nextElementSibling;
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
