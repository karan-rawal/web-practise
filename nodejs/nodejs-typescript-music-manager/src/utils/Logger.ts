import winston = require('winston');

class Logger {
  public logger: winston.LoggerInstance;
  constructor() {
    this.logger = new (winston.Logger)({
      transports: [
        new (winston.transports.Console)(),
      ],
    });
  }
}

const logger = new Logger().logger;
export default logger;
