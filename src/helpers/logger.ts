import { createLogger, format, transports } from "winston";

const logger = createLogger({
    format: format.combine(
      format.timestamp(),
      format.json()
    ),
    transports: [
      new transports.Console(), // Log to console
      new transports.File({ filename: 'app.log' }), // Log to file
    ],
  });
  
  export default logger;