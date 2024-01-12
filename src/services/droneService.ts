import drone from "../models/drone";


class DroneServices {
    constructor () {}
    protected model = drone.Drone;
    

    public registerDrone = async (data: any) => {
        const newDrone = new this.model(data);

        await newDrone.save();
        
    }

    public getDrone = async (serialNumber: string) => {
        const result = await this.model.findOne({ serialNumber });
        return result;
    }

    public getDronesForLoading = async () => {
        const result = await this.model.find({ state: 'IDLE' });
        return result;
    }
}

export default DroneServices;