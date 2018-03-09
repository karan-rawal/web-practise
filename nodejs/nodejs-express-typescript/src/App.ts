import express = require('express');
import UserRoutes from './routes/UserRoutes';

class App {
    private application: express.Application;

    constructor(private port: number,private host: string) {
        this.application = express();
        this.setupRoutes();
    }

    setupRoutes() {
        this.application.use('/users', new UserRoutes().router);
    }

    start() {
        this.application.listen(this.port, this.host, () => {
            console.log(`Application started at 2 http://${this.host}:${this.port}`);
        });
    }
}

let app = new App(3000, 'localhost');
app.start();