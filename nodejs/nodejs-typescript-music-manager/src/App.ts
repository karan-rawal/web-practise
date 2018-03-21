import { Application } from 'express';
import express = require('express');
import Logger from './utils/Logger';

class App {
  private application: Application;

  constructor() {
    this.application = express();
  }

  public start(port: number, host: string, callback: any) {
    this.application.get('/', (req: express.Request, res: express.Response) => {
      res.end('Application is running!');
    });
    this.application.listen(port, host, callback);
  }
}

const PORT = 3001;
const HOST = 'localhost';
const APP = new App();
APP.start(PORT, HOST, () => {
  Logger.info(`Application is running at http://${HOST}:${PORT}`);
});
