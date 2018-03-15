import { Request, Response, NextFunction } from "express";

export default interface IController {
    get(req: Request, res: Response, next: NextFunction): any;
    post(req: Request, res: Response, next: NextFunction): any;
    update(req: Request, res: Response, next: NextFunction): any;
    delete(req: Request, res: Response, next: NextFunction): any;
    put(req: Request, res: Response, next: NextFunction): any;
    patch(req: Request, res: Response, next: NextFunction): any;
    head(req: Request, res: Response, next: NextFunction): any;
}