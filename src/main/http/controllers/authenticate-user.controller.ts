import type { AuthenticateUserUseCase } from "../../../application/use-cases/user/authenticate-user.use-case.js";
import { makeAuthenticateUserUseCase } from "../../factories/make-authenticate-user.use-case.js";
import type { HttpRequest, HttpResponse } from "../interfaces/http.js";
import type { BaseController } from "./base.controller.js";

export class AuthenticateUserController implements BaseController {
    constructor(private readonly useCase: AuthenticateUserUseCase) { }

    async handle(request: HttpRequest): Promise<HttpResponse> {
        const { email, password } = request.body;
        const result = await this.useCase.execute({
            email,
            password_DoNotLog: password,
        });
        if (result.isFailure) {
            return { statusCode: 401, body: { message: result.errorValue() } };
        }
        return { statusCode: 200, body: result.getValue() };
    }
}