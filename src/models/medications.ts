import { Schema, model, Document } from "mongoose";

export interface IMedication extends Document{
    name: string,
    weight: number,
    code: string,
    image: string
}

const schema = new Schema({
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
        required: true
    },
});

export default model<IMedication>('Medication', schema);