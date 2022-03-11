var Color;
(function (Color) {
    Color[Color["Gray"] = 0] = "Gray";
    Color[Color["Yellow"] = 1] = "Yellow";
    Color[Color["Green"] = 2] = "Green";
})(Color || (Color = {}));
var Game = /** @class */ (function () {
    function Game() {
    }
    Game.prototype.getRow = function (row) {
        return new Array();
    };
    Game.prototype.validateRow = function (row, entry) {
        return true;
    };
    return Game;
}());
