import { Router } from "express";
import IController from "../controllers/IController";

export default abstract class BaseRoutes {
    private _router: Router;
    private _controller: IController;

    constructor(router: Router, controller: IController) {
        this._router = router;
        this._controller = controller;
    }

    get router(): Router {
        return this._router;
    }

    get controller(): IController {
        return this._controller;
    }

    set controller(controller: IController) {
        this._controller = controller;
    }

    abstract setupRouter(): any;
}