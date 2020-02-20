"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function round(value, precision) {
    var multiplier = Math.pow(10, (precision || 0));
    return Math.round(value * multiplier) / multiplier;
}
exports.round = round;
//# sourceMappingURL=utility.js.map