import IController from "./IController";
import e  = require("express");

export default class UserController implements IController {
    get(req: e.Request, res: e.Response, next: e.NextFunction) {
        res.end("Response from UserController");
    }
    registerUser(req: e.Request, res: e.Response, next: e.NextFunction) {
        res.status(200).json({
            message: "User Registration Successful.",
        });
    }
    post(req: e.Request, res: e.Response, next: e.NextFunction) {
        throw new Error("Method not implemented.");
    }
    update(req: e.Request, res: e.Response, next: e.NextFunction) {
        throw new Error("Method not implemented.");
    }
    delete(req: e.Request, res: e.Response, next: e.NextFunction) {
        throw new Error("Method not implemented.");
    }
    put(req: e.Request, res: e.Response, next: e.NextFunction) {
        throw new Error("Method not implemented.");
    }
    patch(req: e.Request, res: e.Response, next: e.NextFunction) {
        throw new Error("Method not implemented.");
    }
    head(req: e.Request, res: e.Response, next: e.NextFunction) {
        throw new Error("Method not implemented.");
    }
}