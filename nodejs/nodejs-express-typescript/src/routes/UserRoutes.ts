import BaseRoutes from "./BaseRoutes";
import e = require("express");
import UserController from "../controllers/UserController";

export default class UserRoutes extends BaseRoutes {
    setupRouter() {
        this.router.get('/', this.controller.get);
        this.router.post('/', this.controller.post);
    }
    constructor() {
        let router: e.Router = e.Router();
        let controller: UserController = new UserController();
        super(router, controller); 
    }
}