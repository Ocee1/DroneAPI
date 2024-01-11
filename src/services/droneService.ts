import drone from "../models/drone";


class droneServices {
    constructor () {}
    protected model = drone;

    public registerDrone = async (data: any) => {
        const result = await this.model.create(data);
        return result;
    }


    public getDrone = async (serialNum: string) => {
        const result = await this.model.findOne({ serialNum });
        return result;
    }
    public getDronesForLoading = async () => {
        const result = await this.model.find({ state: 'IDLE' });
        return result;
    }
}