import drone from "../models/droneModel";



export async function checkDroneBattery(serialNumber: string): Promise<string>{
    const checkDrone = await drone.Drone.findOne({ serialNumber });
    if (!checkDrone) {
        return 'No drone Found'
    };
    return checkDrone.battery;
};

