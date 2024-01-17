"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const droneModel_1 = __importDefault(require("../models/droneModel"));
class DroneServices {
    constructor() {
        this.model = droneModel_1.default.Drone;
        this.registerDrone = async (data) => {
            const newDrone = new this.model(data);
            await newDrone.save();
        };
        this.getDrone = async (serialNumber) => {
            const result = await this.model.findOne({ serialNumber });
            return result;
        };
        this.getDronesForLoading = async () => {
            const result = await this.model.find({ state: 'IDLE' });
            return result;
        };
    }
}
exports.default = DroneServices;
//# sourceMappingURL=droneService.js.map