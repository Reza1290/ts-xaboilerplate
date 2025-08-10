import type { HttpRequest, HttpResponse } from "../interfaces/http.js";

export interface BaseController {
    handle(request: HttpRequest): Promise<HttpResponse>;
}