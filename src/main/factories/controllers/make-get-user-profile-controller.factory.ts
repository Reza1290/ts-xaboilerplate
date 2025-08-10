import { GetUserProfileController } from "../../http/controllers/get-user-profile.controller.js";
import { makeGetUserProfileUseCase } from "../make-get-user-profile.use-case.js";

export const makeGetUserProfileController = (): GetUserProfileController => {
  return new GetUserProfileController(makeGetUserProfileUseCase());
};