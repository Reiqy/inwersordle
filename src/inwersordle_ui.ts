import { NavigationManager } from "./NavigationManager.js"
import { GridManager } from "./GridManager.js"


function composeWord(selectedCell: HTMLElement) {
	let s: string = "";
	let children: NodeListOf<HTMLDivElement> = selectedCell.parentElement.querySelectorAll("div");
	children.forEach(function(child: HTMLDivElement) {
		s += child.innerHTML;
	});
  
	return s.toUpperCase();
}

$(function() {
  GridManager.fillTargetWord();

	let navigation = new NavigationManager()

	$(".cell").on("click", function(e) {
		navigation.selectCell(e.target);
	});

	document.addEventListener("keydown", function(event: KeyboardEvent) {
		navigation.addNavigationListener(event);
		GridManager.addTextListener(event, navigation);
	});



});
