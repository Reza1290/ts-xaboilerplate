import { ChangePasswordController } from "../../http/controllers/change-password.controller.js";
import { makeChangePasswordUseCase } from "../make-change-password.use-case.js";

export const makeChangePasswordController = (): ChangePasswordController => {
  return new ChangePasswordController(makeChangePasswordUseCase());
};