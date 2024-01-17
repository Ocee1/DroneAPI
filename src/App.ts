import express, { Application, Router, json, urlencoded } from 'express';
import config from './config';
import { batteryCheck } from './utils/battery_check_job';


interface IRoutes {
    router: Router
}

class App {
    public app: Application;
    public env: string;
    public port: string | number;

    constructor (routes: IRoutes[]) {
        this.app = express();
        this.env = 'development';
        this.port = 4000;   


        this.initializeMiddlewares();
        
        this.initializeRoutes(routes);
        this.initializeDB();
    }

    public start() {
        this.app.listen(this.port, () => {
            console.log(`Server is listening on port ${this.port}`)
        })
    } 

    public batteryCheckTask() {
        batteryCheck();
    }

    public getServer() {
        return this.app;
    }

    public initializeMiddlewares() {
        // this.app.use(cors({ origin: '*' }));
        // this.app.use(helmet());
        // this.app.use(hpp());
        this.app.use(json());
        this.app.use(urlencoded({ extended: true }));
        
    }

    private initializeRoutes(routes: IRoutes[]) {
        routes.forEach(route => {
            this.app.use('/', route.router);
        })
    }
    
    private initializeDB(): void {
        
        config().then(result => {
            console.log('Successfully Connected to DB');
            
        })
        .catch(err => {
            console.log("Failure to connect to Database: ", err.message);
        });
    }
}

export default App;