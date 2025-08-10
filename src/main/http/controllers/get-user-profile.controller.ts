import type { GetUserProfileUseCase } from "../../../application/use-cases/user/get-user-profile.use-case.js";
import type { HttpRequest, HttpResponse } from "../interfaces/http.js";
import type { BaseController } from "./base.controller.js";

export class GetUserProfileController implements BaseController {
    constructor(private readonly useCase: GetUserProfileUseCase) { }

    async handle(request: HttpRequest): Promise<HttpResponse> {
        const { userId } = request.body;
        const result = await this.useCase.execute({ userId });
        if (result.isFailure) {
            return { statusCode: 404, body: { message: result.errorValue() } };
        }
        return { statusCode: 200, body: result.getValue() };
    }
}