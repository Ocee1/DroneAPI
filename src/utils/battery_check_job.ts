import cron from 'node-cron';
import drone from '../models/droneModel';
import { checkDroneBattery } from '../helpers/drone.helpers';
import logger from '../helpers/logger';


export const batteryCheck = () => {    
    cron.schedule('0 * * * *', async () => {
        try {
            const drones = await drone.Drone.find();
            drones.forEach((drone) => {
                // implement battery checks and logging
                const currentBatteryLevel = checkDroneBattery(drone.serialNumber);

                logger.info(`Battery level for drone ${drone.serialNumber} updated to ${currentBatteryLevel}`);
            })
        } catch (error: any) {
            console.error('Error in battery check task:', error);
        }
    })
}