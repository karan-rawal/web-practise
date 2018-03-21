import { Request, Response } from 'express';
import { NextFunction } from 'express-serve-static-core';

export default interface IUserController {
  registerUser(req: Request, res: Response, next: NextFunction): any;
}
