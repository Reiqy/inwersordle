function selectCell(selectedCell: HTMLElement) {
	if (selectedCell.classList.contains("submitted")) {
		return null;
	}

	let cells = document.getElementsByClassName("cell");
	for (let cell of cells as any) {
		cell.classList.remove("selected");
	}

	selectedCell.classList.add("selected");
	return selectedCell;
}

function disableRow(selectedCell: HTMLElement) {
	let rowCells = selectedCell.parentElement.querySelectorAll("div");
	rowCells.forEach(function(cell: HTMLDivElement) {
		cell.classList.add("submitted");
	});
}

function selectNextCell(selectedCell: HTMLElement) {
	// TODO
}

function selectPreviousCell(selectedCell: HTMLElement) {
	// TODO
}

function checkCompleted() {
	// TODO
}

function composeWord(selectedCell: HTMLElement) {
	let s: string = "";
	let children: NodeListOf<HTMLDivElement> = selectedCell.parentElement.querySelectorAll("div");
	children.forEach(function(child: HTMLDivElement) {
		s += child.innerHTML;
	});

	return s
}

$(function() {
	let currentlySelected: HTMLElement = $(".row.first .cell.first")[0];
	selectCell(currentlySelected);

	$(".cell").on("click", function(e) {
		currentlySelected = selectCell(e.target) || currentlySelected;
	});

	$(document).on("keydown", function(e) {
		if (currentlySelected == null) return;

		switch (e.key) {
			case "ArrowLeft":
				selectPreviousCell(currentlySelected);
				// TODO: refactor
				let previousSibling: HTMLElement = currentlySelected.previousElementSibling as HTMLElement;
				if (previousSibling) currentlySelected = selectCell(previousSibling) || currentlySelected;
				break;
			case "ArrowRight":
				// TODO: refactor
				selectNextCell(currentlySelected);
				let nextSibling: HTMLElement = currentlySelected.nextElementSibling as HTMLElement;
				if (nextSibling) currentlySelected = selectCell(nextSibling) || currentlySelected;
				break;
			case "Backspace":
				currentlySelected.innerHTML = "";
				selectPreviousCell(currentlySelected);
				break;
			case "Delete":
				currentlySelected.innerHTML = "";
				selectNextCell(currentlySelected);
				break;
		}

		if (e.key.toString().length == 1 && (/[a-zA-Z]/.test(e.key))) {
			currentlySelected.innerHTML = e.key;

			checkCompleted();

			// selectNextCell(currentlySelected);
			if (currentlySelected.nextElementSibling)  {
				currentlySelected = selectCell(currentlySelected.nextElementSibling as HTMLElement) || currentlySelected;
			} else {
				disableRow(currentlySelected);

				// TODO: Submit row
				if (currentlySelected.parentElement.nextElementSibling != null) {
					currentlySelected = selectCell(currentlySelected.parentElement.nextElementSibling.firstElementChild as HTMLElement) || currentlySelected;
				} else {
					currentlySelected = null;
				}
			}
		}
	});
});
