import type { JwtAdapter } from "../../../infrastructure/token/jwt.adapter.js";
import type { HttpRequest, HttpResponse } from "../interfaces/http.js";
import type { BaseMiddleware } from "./base.middleware.js";


interface AuthRequest extends HttpRequest {
    headers: { authorization?: string };
}

export class AuthMiddleware implements BaseMiddleware {
    constructor(private readonly tokenManager: JwtAdapter) { }

    async handle(httpRequest: AuthRequest): Promise<HttpResponse> {
        const authHeader = httpRequest.headers.authorization;
        if (!authHeader) {
            return { statusCode: 401, body: { message: 'No token provided.' } };
        }

        const [, token] = authHeader.split(' ');
        const decoded = await this.tokenManager.verify(token ?? "");

        if (!decoded || !decoded.sub) {
            return { statusCode: 401, body: { message: 'Invalid token.' } };
        }

        return { statusCode: 200, body: { userId: decoded.sub as string } };
    }
}