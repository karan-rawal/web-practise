import { Router } from 'express';
import express = require('express');
import expressValidation = require('express-validation');
import UserController from '../controllers/UserController';
import UserErrorHandler from '../middlewares/UserErrorHandler';
import UserValidation from '../validations/UserValidation';

export default class UserRoute {
  private userRoute: Router;
  private userController: UserController;

  constructor() {
    this.userRoute = express.Router();
    this.userController = new UserController();
    this.setupRouter();
  }

  get _userRoute() {
    return this.userRoute;
  }

  private setupRouter() {
    this.userRoute.post(
      '/register',
      expressValidation(UserValidation.getRegistrationValidation()),
      this.userController.registerUser,
    );
    this.userRoute.use('/', UserErrorHandler.preResponseHandler());
  }
}
