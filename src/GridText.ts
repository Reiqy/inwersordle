import { Navigation } from "./Navigation.js"

export class GridText {
	static addTextListener(event: KeyboardEvent, navigation: Navigation): void {
		switch (event.key) {
			case "Backspace":
				navigation.currentlySelected.innerHTML = ""
				// navigation.selectPreviousCell(true);
				break;
			case "Delete":
				navigation.currentlySelected.innerHTML = ""
				// navigation.selectNextCell(true);
				break;
		}
		if (/^[a-zA-Z]$/.test(event.key)) {
			navigation.currentlySelected.innerHTML = event.key;

			// if (checkCompleted()) {
			// 	disableRow(currentlySelected);
			// }

			navigation.selectNextCell(true);

		}
	}
}
