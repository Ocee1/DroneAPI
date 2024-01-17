"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkDroneBattery = void 0;
const droneModel_1 = __importDefault(require("../models/droneModel"));
async function checkDroneBattery(serialNumber) {
    const checkDrone = await droneModel_1.default.Drone.findOne({ serialNumber });
    if (!checkDrone) {
        return 'No drone Found';
    }
    ;
    return checkDrone.battery;
}
exports.checkDroneBattery = checkDroneBattery;
;
//# sourceMappingURL=drone.helpers.js.map