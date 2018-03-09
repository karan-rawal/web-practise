import express = require('express');
import bodyParser = require('body-parser');
import UserRoutes from './routes/UserRoutes';

class App {
    private application: express.Application;

    constructor(private port: number, private host: string) {
        this.application = express();
        this.setupMiddleWares();
        this.setupRoutes();
    }

    setupMiddleWares() {
        let urlEncodedOption: bodyParser.OptionsUrlencoded = { extended: true };
        this.application.use(bodyParser.urlencoded(urlEncodedOption));
        let jsonOption: bodyParser.OptionsJson = {};
        this.application.use(bodyParser.json(jsonOption));
    }

    setupRoutes() {
        this.application.use('/users', new UserRoutes().router);
    }

    start() {
        this.application.listen(this.port, this.host, () => {
            console.log(`Application started at http://${this.host}:${this.port}`);
        });
    }
}

let app = new App(3001, 'localhost');
app.start();