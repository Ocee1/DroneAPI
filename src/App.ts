import express, { Application, json, urlencoded } from 'express';
import connectDB from './config';

class App {
    public app: Application;
    public env: string;
    public port: string | number;

    constructor () {
        this.app = express();
        this.env = 'development';
        this.port = 4000;   

        this.initializeDB();
    }

    public start() {
        this.app.listen(this.port, () => {
            console.log(`Server is listening on port ${this.port}`)
        })
    }

    private initializeDB(): void {
        connectDB().then(result => {
            console.log('Successfully Connected to DB');
            
        })
        .catch(err => {
            console.log("Failure to connect to Database: ", err.message);
        });
    }
}

export default App;