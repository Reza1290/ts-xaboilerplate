import { AuthenticateUserUseCase } from "../../application/use-cases/user/authenticate-user.use-case.js";
import { BcryptAdapter } from "../../infrastructure/cryptography/bcrypt.adapter.js";
import { MongoUserRepository } from "../../infrastructure/database/mongodb/repositories/mongo-user.repository.js";
import { JwtAdapter } from "../../infrastructure/token/jwt.adapter.js";


export const makeAuthenticateUserUseCase = (): AuthenticateUserUseCase => {
  return new AuthenticateUserUseCase(
    new MongoUserRepository(),
    new BcryptAdapter(),
    new JwtAdapter()
  );
};