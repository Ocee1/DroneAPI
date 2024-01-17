"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const droneSchema = new mongoose_1.Schema({
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
            type: mongoose_1.Schema.Types.ObjectId,
            ref: 'medications'
        }
    ]
});
const medSchema = new mongoose_1.Schema({
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
exports.default = {
    Drone: (0, mongoose_1.model)('Drone', droneSchema),
    Medications: (0, mongoose_1.model)('Medication', medSchema)
};
//# sourceMappingURL=droneModel.js.map