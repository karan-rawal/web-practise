import bodyParser = require('body-parser');
import { Application } from 'express';
import express = require('express');
import ApiRoutes from './routes/ApiRoutes';
import Logger from './utils/Logger';

class App {
  private application: Application;

  constructor() {
    this.application = express();
    this.setupRoutes();
    this.setupMiddleWares();
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
   * Sets up middlewares.
   *
   * @private
   * @memberof App
   */
  private setupMiddleWares() {
    this.application.use(bodyParser.json());
    this.application.use(bodyParser.urlencoded({
      extended: true,
    }));
  }

  /**
   * Sets up the routes.
   *
   * @private
   * @memberof App
   */
  private setupRoutes() {
    this.application.use('/api', new ApiRoutes()._apiRouter);
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
