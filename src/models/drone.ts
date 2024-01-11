import { Schema, model, Document } from "mongoose";

export interface IDrone extends Document {
    serialNumber: string,
    droneModel: string, 
    weight: number,
    battery: string,
    state: string 
}

const schema = new Schema({
    serialNumber: {
        type: String,
        maxLength: 100,
        enum: [
            'Lightweight',
            'Middleweight',
            'Cruiserweight',
            'Heavyweight'
        ],
        required: true
    },
    droneModel: {
        type: String,
        required: true
    },
    weight: {
        type: Number,
        required: true
    },
    battery: {
        type: String,
        required: true
    },
    state: {
        type: String,
        enum: [
            'IDLE',
            'LOADING',
            'LOADED',
            'DELIVERING',
            'DELIVERED',
            'RETURNING'
        ],
        default: 'IDLE'
    },
    medications: {
        type: Schema.Types.ObjectId,
        ref: 'medications'
    }

});

export default model<IDrone>('Drone', schema);