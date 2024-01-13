import { Request, Response, NextFunction } from "express";
import DroneServices from "../services/droneService";

class DroneController {
    constructor () {}
    protected services = new DroneServices();

    public registerDrone = async (req: Request, res: Response, next: NextFunction) => {
        const { 
            serialNum,
            droneModel,
            weight,
            battery,
            state,
        } = req.body;
        
        try {
            if (!serialNum || serialNum.length > 100) {
                return res.status(400).json({message: 'Invalid Serial number'});
            }

            if (!droneModel || !['Lightweight', 'Middleweight', 'Cruiserweight', 'Heavyweight'].includes(droneModel)) {
                return res.status(400).json({ message: 'Invalid model' });
            }
            if (!weight || weight > 500) {
                return res.status(400).json({message: 'Invalid device weight'})
            }

            if (!battery || battery < 0 || battery > 100) {
                return res.status(400).json({ message: 'Invalid battery capacity' });
            }
          
            if (!state || !['IDLE', 'LOADING', 'LOADED', 'DELIVERING', 'DELIVERED', 'RETURNING'].includes(state)) {
                return res.status(400).json({ message: 'Invalid state' });
            }

            const drone = {
                serialNum,
                droneModel,
                weight,
                battery,
                state,
            }

            await this.services.registerDrone(drone);

            res.status(201).json(drone);
        } catch (error: any) {
            console.error;
            res.status(400).json({ message: 'Error registering drone' });
        }
    }

    public loadMed = async (req: Request, res:Response) => {
        const { medications } = req.body;
        const { serialNum } = req.params;
        
        try {
            const drone = await this.services.getDrone(serialNum);
            if (!drone) {
                return res.status(404).json({ message: 'Drone not found' });
            }
          
            if (drone.state !== 'IDLE') {
                return res.status(400).json({ message: 'Drone not available for loading' });
            }

            medications.forEach((medication: any) => {
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
            drone.medications ? drone.medications.push(...medications as []) : drone.medications = medications;
            drone.save();
            res.status(200).json({ message: 'Medications loaded successfully' });

        } catch (error: any) {
            res.status(500).json({ message: 'Error loading medications' });
        }
    }

    public getLoadedMedsForDrone = async (req: Request, res: Response) => {
        const { serialNum } = req.params;

        try {
            const drone = await this.services.getDrone(serialNum);
            if (!drone) {
                return res.status(404).json({message: 'Drone not found!'})
            }
            res.status(200).json(drone.medications);
        } catch (error: any) {
            res.status(500).json({ message: 'Error retrieving medications' });
        }
    }

    public availableDrones = async (req: Request, res: Response) => {
        try {
            const drone = await this.services.getDronesForLoading();
            if (!drone) {
                return res.status(404).json({message: 'No drone available!'})
            }

            res.status(200).json(drone);
        } catch (error: any) {
            res.status(500).json({ message: 'Error retrieving drones' });
        }
    }

    public droneBattery = async (req: Request, res: Response) => {
        const { serialNum } = req.params;
        try {
            const drone = await this.services.getDrone(serialNum);
            if (!drone) {
                return res.status(404).json({message: 'Drone not found'});
            }
            const code = drone.serialNumber;
            res.status(200).json({ code, Battery: drone.battery + '%' });
        } catch (error: any) {
            res.status(500).json({ message: 'Error retrieving drones' });
        }
    }
}

export default DroneController;