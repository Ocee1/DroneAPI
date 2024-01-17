"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const droneService_1 = __importDefault(require("../services/droneService"));
class DroneController {
    constructor() {
        this.services = new droneService_1.default();
        this.registerDrone = async (req, res, next) => {
            const { serialNumber, droneModel, weight, battery, state, } = req.body;
            try {
                const existingDrone = await this.services.getDrone(serialNumber);
                if (existingDrone) {
                    return res.status(400).json({ message: 'Drone already exists!' });
                }
                ;
                if (!serialNumber || serialNumber.length > 100) {
                    return res.status(400).json({ message: 'Invalid Serial number' });
                }
                if (!droneModel || !['Lightweight', 'Middleweight', 'Cruiserweight', 'Heavyweight'].includes(droneModel)) {
                    return res.status(400).json({ message: 'Invalid model' });
                }
                if (!weight || weight > 500) {
                    return res.status(400).json({ message: 'Invalid device weight' });
                }
                if (!battery || battery < 0 || battery > 100) {
                    return res.status(400).json({ message: 'Invalid battery capacity' });
                }
                if (!state || !['IDLE', 'LOADING', 'LOADED', 'DELIVERING', 'DELIVERED', 'RETURNING'].includes(state)) {
                    return res.status(400).json({ message: 'Invalid state' });
                }
                const drone = {
                    serialNumber,
                    droneModel,
                    weight,
                    battery,
                    state,
                };
                const result = await this.services.registerDrone(drone);
                res.status(201).json({ message: 'Drone added successfully', result });
            }
            catch (error) {
                console.log(error.message);
                res.status(400).json({ message: 'Error registering drone', });
            }
        };
        this.loadMed = async (req, res) => {
            const { medications } = req.body;
            const { serialNumber } = req.params;
            try {
                const drone = await this.services.getDrone(serialNumber);
                if (!drone) {
                    return res.status(404).json({ message: 'Drone not found' });
                }
                if (drone.state !== 'IDLE') {
                    return res.status(400).json({ message: 'Drone not available for loading' });
                }
                medications.forEach((medication) => {
                    if (!medication.name || !medication.weight || !medication.code) {
                        return res.status(400).json({ message: 'Invalid medication data' });
                    }
                    if (!/^[a-zA-Z0-9_-]+$/.test(medication.name)) {
                        return res.status(400).json({ message: 'Invalid medication name format' });
                    }
                    if (!/^[A-Z0-9_]+$/.test(medication.code)) {
                        return res.status(400).json({ message: 'Invalid medication code format' });
                    }
                });
                //@ts-ignore
                const totalWeight = medications.reduce((sum, med) => sum + med.weight, 0);
                if (+drone.battery < 25) {
                    return res.status(400).json({ message: 'Drone battery level is too low for loading' });
                }
                if (totalWeight > drone.weight) {
                    return res.status(400).json({ message: 'Load exceeds drone weight limit' });
                }
                drone.state = 'LOADING';
                drone.medications ? drone.medications.push(...medications) : drone.medications = medications;
                drone.save();
                res.status(200).json({ message: 'Medications loaded successfully' });
            }
            catch (error) {
                res.status(500).json({ message: 'Error loading medications' });
            }
        };
        this.getLoadedMedsForDrone = async (req, res) => {
            const { serialNumber } = req.params;
            try {
                const drone = await this.services.getDrone(serialNumber);
                if (!drone) {
                    return res.status(404).json({ message: 'Drone not found!' });
                }
                res.status(200).json(drone.medications);
            }
            catch (error) {
                res.status(500).json({ message: 'Error retrieving medications' });
            }
        };
        this.availableDrones = async (req, res) => {
            try {
                const drone = await this.services.getDronesForLoading();
                if (!drone) {
                    return res.status(404).json({ message: 'No drone available!' });
                }
                res.status(200).json(drone);
            }
            catch (error) {
                res.status(500).json({ message: 'Error retrieving drones' });
            }
        };
        this.droneBattery = async (req, res) => {
            const { serialNumber } = req.params;
            try {
                const drone = await this.services.getDrone(serialNumber);
                if (!drone) {
                    return res.status(404).json({ message: 'Drone not found' });
                }
                const code = drone.serialNumber;
                res.status(200).json({ code, Battery: drone.battery + '%' });
            }
            catch (error) {
                res.status(500).json({ message: 'Error retrieving drones' });
            }
        };
    }
}
exports.default = DroneController;
//# sourceMappingURL=droneController.js.map