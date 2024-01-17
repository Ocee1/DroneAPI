"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const winston_1 = require("winston");
const logger = (0, winston_1.createLogger)({
    format: winston_1.format.combine(winston_1.format.timestamp(), winston_1.format.json()),
    transports: [
        new winston_1.transports.Console(), // Log to console
        new winston_1.transports.File({ filename: 'app.log' }), // Log to file
    ],
});
exports.default = logger;
//# sourceMappingURL=logger.js.map