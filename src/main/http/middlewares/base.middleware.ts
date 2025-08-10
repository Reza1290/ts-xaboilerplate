import type { HttpRequest, HttpResponse } from "../interfaces/http.js";

export interface BaseMiddleware<T = any> {
    handle(httpRequest: HttpRequest<T>): Promise<HttpResponse>;
}