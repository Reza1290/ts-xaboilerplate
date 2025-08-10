import { GetUserProfileUseCase } from "../../application/use-cases/user/get-user-profile.use-case.js";
import { MongoUserRepository } from "../../infrastructure/database/mongodb/repositories/mongo-user.repository.js";

export const makeGetUserProfileUseCase = (): GetUserProfileUseCase => {
  return new GetUserProfileUseCase(new MongoUserRepository());
};
