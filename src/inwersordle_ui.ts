import { Navigation } from "./Navigation.js"
import { GridText } from "./GridText.js"


function disableRow(selectedCell: HTMLElement) {
	let rowCells = selectedCell.parentElement.querySelectorAll("div");
	rowCells.forEach(function(cell: HTMLDivElement) {
		cell.classList.add("submitted");
	});
}

function composeWord(selectedCell: HTMLElement) {
	let s: string = "";
	let children: NodeListOf<HTMLDivElement> = selectedCell.parentElement.querySelectorAll("div");
	children.forEach(function(child: HTMLDivElement) {
		s += child.innerHTML;
	});

	return s.toUpperCase();
}

$(function() {
	let navigation = new Navigation()
	let firstCell: HTMLElement = $(".row.first .cell.first")[0];
	navigation.selectCell(firstCell);

	$(".cell").on("click", function(e) {
		navigation.selectCell(e.target);
	});

	document.addEventListener("keydown", function(event: KeyboardEvent) {
		navigation.addNavigationListener(event);
		GridText.addTextListener(event, navigation);
	});

});
