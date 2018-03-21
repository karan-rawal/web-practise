import { Router } from 'express';
import express = require('express');
import UserRoutes from './UserRoutes';

export default class ApiRoutes {
  private apiRouter: Router;

  get _apiRouter() {
    return this.apiRouter;
  }

  constructor() {
    this.apiRouter = express.Router();
    this.setupRouter();
  }

  public setupRouter() {
    this.apiRouter.use('/user', new UserRoutes()._userRoute);
  }
}
