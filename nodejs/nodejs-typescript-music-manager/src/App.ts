import { Application } from 'express';
import express = require('express');
import Logger from './utils/Logger';

class App {
  private application: Application;

  constructor() {
    this.application = express();
  }

  /**
   * Starts the express application.
   *
   * @param {number} port
   * @param {string} host
   * @param {*} callback
   * @memberof App
   */
  public start(port: number, host: string, callback: any) {
    this.setTestRequest();
    this.application.listen(port, host, callback);
  }

  /**
   * Sets a test url, so that we know that the application is running on our browser.
   *
   * @private
   * @memberof App
   */
  private setTestRequest() {
    this.application.get('/', (req: express.Request, res: express.Response) => {
      res.end('Application is running!');
    });
  }
}

const PORT = 3001;
const HOST = 'localhost';

const APP = new App();
APP.start(PORT, HOST, () => {
  Logger.info(`Application is running at http://${HOST}:${PORT}`);
});
