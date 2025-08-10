import type { HttpRequest } from '../http/interfaces/http.js';
import type { BaseController } from '../http/controllers/base.controller.js';
import type { Request, Response } from 'express';

export const adaptRoute = (controller: BaseController) => {
    return async (req: Request, res: Response) => {
        const httpRequest: HttpRequest = {
            body: req.body,
            params: req.params,
            query: req.query,
            headers: req.headers,
        };

        const httpResponse = await controller.handle(httpRequest);

        if (httpResponse.statusCode >= 200 && httpResponse.statusCode <= 299) {
            res.statusCode = httpResponse.statusCode;
            return res.json(httpResponse.body);
        } else {
            res.statusCode = httpResponse.statusCode;
            return res.json({
                error: httpResponse.body.message,
            });
        }
    };
};