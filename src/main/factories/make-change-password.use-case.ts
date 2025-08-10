import { ChangePasswordUseCase } from "../../application/use-cases/user/change-password.use-case.js";
import { BcryptAdapter } from "../../infrastructure/cryptography/bcrypt.adapter.js";
import { MongoUserRepository } from "../../infrastructure/database/mongodb/repositories/mongo-user.repository.js";

export const makeChangePasswordUseCase = (): ChangePasswordUseCase => {
  return new ChangePasswordUseCase(
    new MongoUserRepository(),
    new BcryptAdapter()
  );
};