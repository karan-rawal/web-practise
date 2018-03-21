import { Router } from 'express';
import express = require('express');
import UserController from '../controllers/UserController';

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
    this.userRoute.post('/register', this.userController.registerUser);
  }
}
