import BaseRoutes from "./BaseRoutes";
import e = require("express");
import UserController from "../controllers/UserController";

export default class UserRoutes extends BaseRoutes {
    constructor() {
        let router: e.Router = e.Router();
        let controller: UserController = new UserController();
        super(router, controller);
        this.setupRouter();
    }
    setupRouter() {
        let controller = this.controller as UserController;
        this.router.post('/register', controller.registerUser);
    }
}