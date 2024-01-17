"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.batteryCheck = void 0;
const node_cron_1 = __importDefault(require("node-cron"));
const droneModel_1 = __importDefault(require("../models/droneModel"));
const drone_helpers_1 = require("../helpers/drone.helpers");
const logger_1 = __importDefault(require("../helpers/logger"));
const batteryCheck = () => {
    node_cron_1.default.schedule('0 * * * *', async () => {
        try {
            const drones = await droneModel_1.default.Drone.find();
            drones.forEach((drone) => {
                // implement battery checks and logging
                const currentBatteryLevel = (0, drone_helpers_1.checkDroneBattery)(drone.serialNumber);
                logger_1.default.info(`Battery level for drone ${drone.serialNumber} updated to ${currentBatteryLevel}`);
            });
        }
        catch (error) {
            console.error('Error in battery check task:', error);
        }
    });
};
exports.batteryCheck = batteryCheck;
//# sourceMappingURL=battery_check_job.js.map