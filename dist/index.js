"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const App_1 = __importDefault(require("./App"));
const droneRouter_1 = __importDefault(require("./routes/droneRouter"));
const app = new App_1.default([
    new droneRouter_1.default(),
]);
app.start();
//# sourceMappingURL=index.js.map