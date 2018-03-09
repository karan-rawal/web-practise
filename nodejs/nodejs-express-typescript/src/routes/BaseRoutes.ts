import { Router } from "express";
import BaseController from "../controllers/BaseController";

export default abstract class BaseRoutes {
    private _router: Router;
    private _controller: BaseController;

    constructor(router: Router, controller: BaseController) {
        this._router = router;
        this._controller = controller;
    }

    get router(): Router {
        return this._router;
    }

    get controller(): BaseController {
        return this._controller;
    }

    set controller(controller: BaseController) {
        this._controller = controller;
    }

    abstract setupRouter(): any;
}