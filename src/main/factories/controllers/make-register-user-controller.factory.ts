import { RegisterUserController } from "../../http/controllers/register-user.controller.js";
import { makeRegisterUserUseCase } from "../make-register-user.use-case.js";

export const makeRegisterUserController = (): RegisterUserController => {
  return new RegisterUserController(makeRegisterUserUseCase());
};