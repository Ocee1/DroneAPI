import * as dotenv from 'dotenv';

dotenv.config();

const { NODE_ENV } = process.env;
import { connect } from "mongoose";
import developmentConfig from './config';
import testConfig from './test';


let config: any;


switch (NODE_ENV) {
  case 'development':
    config = developmentConfig.MONGO_URI;
    break;
  case 'test':
    config = testConfig.MONGO_URI;
    break;
  default:
    throw new Error(`Unknown environment: ${NODE_ENV}`);
}



const connectDB = (): Promise<typeof import('mongoose')> => connect(config);


export default connectDB;