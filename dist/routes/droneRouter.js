"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const droneController_1 = __importDefault(require("../controllers/droneController"));
class DroneRouter {
    constructor() {
        this.router = (0, express_1.Router)();
        this.droneController = new droneController_1.default();
        this.initializeRoutes();
    }
    initializeRoutes() {
        this.router.post('/drones', this.droneController.registerDrone);
        this.router.put('/drones/:serialNumber/medications', this.droneController.loadMed);
        this.router.get('/drones/:serialNumber/medications', this.droneController.getLoadedMedsForDrone);
        this.router.get('/drones?state=IDLE', this.droneController.availableDrones);
        this.router.get('/drones/:serialNumber/battery', this.droneController.droneBattery);
    }
    ;
}
;
exports.default = DroneRouter;
//# sourceMappingURL=droneRouter.js.map