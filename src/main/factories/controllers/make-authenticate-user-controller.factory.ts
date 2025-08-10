import { AuthenticateUserController } from "../../http/controllers/authenticate-user.controller.js";
import { makeAuthenticateUserUseCase } from "../make-authenticate-user.use-case.js";

export const makeAuthenticateUserController = (): AuthenticateUserController => {
  return new AuthenticateUserController(makeAuthenticateUserUseCase());
};