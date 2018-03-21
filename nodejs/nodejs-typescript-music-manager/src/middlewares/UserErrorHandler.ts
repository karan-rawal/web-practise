import { NextFunction, Request, Response } from 'express';
import expressValidation from 'express-validation';
import Logger from '../utils/Logger';

class UserErrorHandler {
  public preResponseHandler() {
    return (err: any, req: Request, res: Response, next: NextFunction) => {
      if (err instanceof expressValidation.ValidationError) {
        res.status(err.status).json(err);
      }
    };
  }
}

const userErrorHandler = new UserErrorHandler();
export default userErrorHandler;
