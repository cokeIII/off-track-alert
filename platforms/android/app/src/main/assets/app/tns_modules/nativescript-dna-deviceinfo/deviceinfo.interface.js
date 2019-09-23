"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function wirelessCellularGenerator(rat) {
    switch (rat) {
        case 1:
        case 7:
        case 5:
        case 13:
            return "2G";
        case 2:
        case 3:
        case 4:
        case 17:
        case 9:
        case 11:
        case 10:
        case 8:
        case 6:
        case 15:
            return "3G";
        case 14:
        case 16:
            return "4G";
        case 12:
            return "5G";
        default:
            return "UnKnown";
    }
}
exports.wirelessCellularGenerator = wirelessCellularGenerator;
//# sourceMappingURL=deviceinfo.interface.js.map