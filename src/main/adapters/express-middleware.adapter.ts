import type { NextFunction, Request, Response } from "express";
import type { HttpRequest } from "../http/interfaces/http.js";
import type { BaseMiddleware } from "../http/middlewares/base.middleware.js";

export const adaptMiddleware = (middleware: BaseMiddleware) => {
    return async (req: Request, res: Response, next: NextFunction) => {
        const httpRequest: HttpRequest = { headers: req.headers };
        const httpResponse = await middleware.handle(httpRequest);
        if (httpResponse.statusCode === 200) {
            Object.assign(req.body!, httpResponse.body);
            next();
        } else {
            res.status(httpResponse.statusCode).json({ error: httpResponse.body.message });
        }
    };
};