"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const droneRouter_1 = __importDefault(require("../routes/droneRouter"));
const App_1 = __importDefault(require("../App"));
const supertest_1 = __importDefault(require("supertest"));
const mongodb_memory_server_1 = require("mongodb-memory-server");
const mongoose_1 = __importDefault(require("mongoose"));
const myApp = new App_1.default([new droneRouter_1.default()]);
myApp.start();
describe('Drone API', () => {
    beforeAll(async () => {
        const mongoServer = await mongodb_memory_server_1.MongoMemoryServer.create();
        await mongoose_1.default.connect(mongoServer.getUri());
    });
    afterAll(async () => {
        await mongoose_1.default.disconnect();
        await mongoose_1.default.connection.close();
    });
    describe('Register Drone route', () => {
        it('should return the registered drone and status 201', async () => {
            const drone = {
                serialNumber: '12_456',
                droneModel: 'Lightweight',
                weight: 300,
                battery: '80',
                state: 'IDLE',
            };
            await (0, supertest_1.default)(myApp.app).post('/drones').send(drone).expect(201);
        });
    });
});
// const route = new DroneRouter();
// jest.mock('./DroneService');
// describe('Drone Management API', () => {
//   let mockDroneService: any;
//   beforeAll(() => {
//     mockDroneService = new MockDroneService();
//     const droneController = new DroneController(mockDroneService);
//   })
//   const app = new App([new DroneRouter()]);
//   describe('POST /drones', () => {
//     it('should return status 201 and create a drone with valid data', async () => {
//       const droneData = {
//         serialNumber: '123456',
//         droneModel: 'Lightweight',
//         weight: 300,
//         battery: '80',
//         state: 'IDLE',
//       };
//       const response = await request(app.app)
//       .post('/drones')
//       .send(droneData)
//       .expect(201);
//       expect(response.body).toEqual(droneData);
//       expect(mockDroneService.getRegisteredDrones()).toContainEqual(droneData);
//     })
//   })
// })
// Helper functions
// async function createDrone(serialNumber: string): Promise<IDrone> {
//   const drone = new droneModel.Drone({
//     serere: 'Tjsdk53b3nf8n23',
//     model: 'TestModel',
//     weight: 500,
//     battery: 100,
//     state: 'IDLE',
//   });
//   await drone.save();
//   return drone;
// }
// async function createMedication(name: string, weight: number, code: string): Promise<IMedication> {
//   const medication = new droneModel.Medications({ name, weight, code });
//   await medication.save();
//   return medication; 
// }
// describe('Drone Management API', () => {
//   // **Drone Registration Tests**
//   describe('POST /drones', () => {
//     it('should create a drone with valid data', async () => {
//       const response = await request(app.app).post('/drones').send({
//         serialNumber: 'ABC123',
//         model: 'Lightweight',
//         weightLimit: 500,
//         batteryCapacity: 100,
//         state: 'IDLE',
//       });
//       expect(response.status).toBe(201);
//       expect(response.body).toHaveProperty('serialNumber', 'ABC123');
//     });
//     it('should return validation errors for invalid data', async () => {
//       const response = await request(app.app).post('/drones').send({
//         serialNumber: '123', // Too short
//         weightLimit: 600, // Exceeds limit
//       });
//       expect(response.status).toBe(400);
//       expect(response.body).toHaveProperty('errors');
//     });
//   });
//   // **Medication Loading Tests**
//   describe('PUT /drones/:serialNumber/medications', () => {
//     let drone: IDrone;
//     let medications: IMedication[];
//     beforeEach(async () => {
//       drone = await createDrone('XYZ456');
//       medications = await Promise.all([
//         createMedication('Ibuprofen', 0.1, 'IBU200'),
//         createMedication('Paracetamol', 0.2, 'PAR500'),
//       ]);
//     });
//     it('should load medications to a drone within weight limit', async () => {
//       const requestBody = { medications };
//       const response = await request(app.app).put(`/drones/<span class="math-inline">\{drone\.serialNumber\}/medications\`\)\.send\(requestBody\);
//       expect\(response\.status\)\.toBe\(200\);
//       expect\(drone\.medications\)\.toEqual\(medications\);
//       expect\(drone\.state\)\.toBe\('LOADING'\);
//       \}\);
//       it\('should prevent loading if total weight exceeds drone limit', async \(\) \=\> \{
//       const overWeightMedication \= await createMedication\('Heavy Drug', 501, 'HVYDRUG'\);
//       const requestBody \= \{ medications\: \[\.\.\.medications, overWeightMedication\] \};
//       const response \= await request\(app\)\.put\(\`/drones/</span>{drone.serialNumber}/medications`).send(requestBody);
//       expect(response.status).toBe(400);
//       expect(response.body).toHaveProperty('message', 'Load exceeds drone weight limit');
//     });
//   it('should prevent loading if battery level is too low', async () => {
//     checkDroneBattery.mockResolvedValue(20); // Mock low battery
//     const requestBody = { medications };
//     const response = await request(app).put(`/drones/${drone.serialNumber}/medications`).send(requestBody);
//     expect(response.status).toBe(400);
//     expect(response.body).toHaveProperty('message', 'Drone battery level is too low for loading');
//   });
// });
// // **Medication Retrieval Tests**
// describe('GET /drones/:serialNumber/medications', () => {
//   let drone: Drone;
//   let medications: Medication[];
//   beforeEach(async () => {
//     drone = await createDrone('ABC789');
//     medications = await Promise.all([
//       createMedication('Insulin', 0.05, 'INS750'),
//       createMedication('Bandages', 0.3, 'BND100'),
//     ]);
//     drone.medications = medications;
//     await drone.save();
//   });
//   })
// })
//# sourceMappingURL=drone.test.js.map