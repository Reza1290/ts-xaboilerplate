import type { RegisterUserUseCase } from "../../../application/use-cases/user/register-user.use-case.js";
import { makeRegisterUserUseCase } from "../../factories/make-register-user.use-case.js";
import type { HttpRequest, HttpResponse } from "../interfaces/http.js";
import type { BaseController } from "./base.controller.js";

export class RegisterUserController implements BaseController {
    constructor(private readonly useCase: RegisterUserUseCase) { }

    async handle(request: HttpRequest): Promise<HttpResponse> {
        const { name, email, password } = request.body;
        const result = await this.useCase.execute({
            name,
            email,
            password_DoNotLog: password,
        });
        if (result.isFailure) {
            return { statusCode: 400, body: { message: result.errorValue() } };
        }
        return { statusCode: 201, body: result.getValue() };
    }
}