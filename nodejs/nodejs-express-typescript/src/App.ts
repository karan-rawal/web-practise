import express = require('express');
import bodyParser = require('body-parser');
import mongoose = require('mongoose');
import UserRoutes from './routes/UserRoutes';
import Logger from './utils/Logger';

class App {
    private application: express.Application;

    constructor(private port: number, private host: string) {
        this.application = express();
        this.setupMiddleWares();
        this.setupRoutes();
    }

    private setupMiddleWares() {
        let urlEncodedOption: bodyParser.OptionsUrlencoded = { extended: true };
        this.application.use(bodyParser.urlencoded(urlEncodedOption));
        let jsonOption: bodyParser.OptionsJson = {};
        this.application.use(bodyParser.json(jsonOption));
    }

    private setupRoutes() {
        this.application.use('/users', new UserRoutes().router);
    }

    private connectDatabase() {
        mongoose.connect("mongodb://localhost:27017/ExpressTypescriptNode", (err) => {
            if(err) {
                Logger.error("Database connection failed.");
            } else {
                Logger.info("Database connection successful. Starting the application now!");
                this.startApplication();
            }
        });
    }

    private startApplication() {
        this.application.listen(this.port, this.host, () => {
            Logger.info(`Application started at http://${this.host}:${this.port}`);
        });
    }

    start() {
        this.connectDatabase();
    }
}

let app = new App(3001, 'localhost');
app.start();