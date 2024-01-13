import cron from 'node-cron';
import drone from '../models/drone';
import { checkDroneBattery } from '../helpers/drone.helpers';



cron.schedule('0 * * * *', async () => {
    try {
        const drones = await drone.Drone.find();
        drones.forEach((drone) => {
            // implement battery checks and logging
            const currentBatteryLevel = checkDroneBattery(drone.serialNumber);
        })
    } catch (error: any) {
        console.error('Error in battery check task:', error);
    }
})