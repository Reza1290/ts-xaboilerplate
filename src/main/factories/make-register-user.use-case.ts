import { RegisterUserUseCase } from "../../application/use-cases/user/register-user.use-case.js";
import { BcryptAdapter } from "../../infrastructure/cryptography/bcrypt.adapter.js";
import { MongoUserRepository } from "../../infrastructure/database/mongodb/repositories/mongo-user.repository.js";


export const makeRegisterUserUseCase = (): RegisterUserUseCase => {
  return new RegisterUserUseCase(new MongoUserRepository(), new BcryptAdapter());
};