import express = require('express');
import IUserController from './IUserController';

export default class UserController implements IUserController {
  public registerUser(req: express.Request, res: express.Response, next: express.NextFunction) {
    res.end('Register User is working fine now.');
  }
}
