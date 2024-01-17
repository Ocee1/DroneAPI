import App from "./App";
import DroneRouter from "./routes/droneRouter";

const app = new App([
    new DroneRouter(),
]);

app.start();