import { Schema, model, Document } from "mongoose";

export interface IDrone extends Document {
    serialNumber: string,
    droneModel: string, 
    weight: number,
    battery: string,
    state: string,
    medications?: []
}

export interface IMedication extends Document{
    name: string,
    weight: number,
    code: string,
    image?: string
}

const droneSchema = new Schema({
    serialNumber: {
        type: String,
        maxLength: 100,
        required: true
    },
    droneModel: {
        type: String,
        enum: [
            'Lightweight',
            'Middleweight',
            'Cruiserweight',
            'Heavyweight'
        ],
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
    medications: [
        {
            type: Schema.Types.ObjectId,
            ref: 'medications'
        }
    ]

});

const medSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    weight: {
        type: Number,
        required: true
    },
    code: {
        type: String,
        required: true
    },
    image: {
        type: String,
    },
});



export default {
    Drone: model<IDrone>('Drone', droneSchema),
    Medications: model<IMedication>('Medication', medSchema)
};
