import express = require('express');
import User , { IUser } from '../models/User';
import Logger from '../utils/Logger';
import IUserController from './IUserController';

export default class UserController implements IUserController {
  public registerUser(req: express.Request, res: express.Response, next: express.NextFunction) {
    const user = new User(req.body);
    user.save().then((usr: IUser) => {
      res.status(200).json({
        message: 'User Created Successfully',
      });
    }).catch((err) => {
      res.status(500).json({
        message: 'Error while registration',
      });
    });
  }
}
