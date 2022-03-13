"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GridText = void 0;
class GridText {
    static addTextListener(event, navigation) {
        switch (event.key) {
            case "Backspace":
                navigation.currentlySelected.innerHTML = "";
                // navigation.selectPreviousCell(true);
                break;
            case "Delete":
                navigation.currentlySelected.innerHTML = "";
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
exports.GridText = GridText;
//# sourceMappingURL=GridText.js.map