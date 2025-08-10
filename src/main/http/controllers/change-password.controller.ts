import type { ChangePasswordUseCase } from "../../../application/use-cases/user/change-password.use-case.js";
import type { HttpRequest, HttpResponse } from "../interfaces/http.js";
import type { BaseController } from "./base.controller.js";

export class ChangePasswordController implements BaseController {
    constructor(private readonly useCase: ChangePasswordUseCase) { }

    async handle(request: HttpRequest): Promise<HttpResponse> {
        const { userId, oldPassword, newPassword } = request.body;
        const result = await this.useCase.execute({
            userId,
            oldPassword_DoNotLog: oldPassword,
            newPassword_DoNotLog: newPassword,
        });
        if (result.isFailure) {
            return { statusCode: 400, body: { message: result.errorValue() } };
        }
        return { statusCode: 204, body: null };
    }
}