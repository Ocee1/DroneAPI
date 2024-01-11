import { connect } from "mongoose";

const Mongo_uri = 'mongodb://localhost:27017/droneDB'

const connectDB = (): Promise<typeof import('mongoose')> => connect(Mongo_uri);

export default connectDB;

