import { Router } from "express";
import DroneController from "../controllers/droneController";

interface IRoutes {
    router: Router
}

class DroneRouter implements IRoutes {
    public router = Router();
    private droneController = new DroneController();

    constructor () {
        this.initializeRoutes();
    }

    protected initializeRoutes  () {
        this.router.post('/drones', this.droneController.registerDrone);
        this.router.put('/drones/:serialNumber/medications', this.droneController.loadMed);
        this.router.get('/drones/:serialNumber/medications', this.droneController.getLoadedMedsForDrone);
        this.router.get('/drones?state=IDLE', this.droneController.availableDrones);
        this.router.get('/drones/:serialNumber/battery', this.droneController.droneBattery);        
    };
};

export default DroneRouter;