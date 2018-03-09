import { Request, Response, NextFunction } from "express";

export default abstract class BaseController {
    abstract get(req: Request, res: Response, next: NextFunction): any;
    abstract post(req: Request, res: Response, next: NextFunction): any;
    abstract update(req: Request, res: Response, next: NextFunction): any;
    abstract delete(req: Request, res: Response, next: NextFunction): any;
    abstract put(req: Request, res: Response, next: NextFunction): any;
    abstract patch(req: Request, res: Response, next: NextFunction): any;
    abstract head(req: Request, res: Response, next: NextFunction): any;
}