"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const Mongo_uri = 'mongodb://localhost:27017/droneDB';
const connectDB = () => (0, mongoose_1.connect)(Mongo_uri);
exports.default = connectDB;
//# sourceMappingURL=config.js.map