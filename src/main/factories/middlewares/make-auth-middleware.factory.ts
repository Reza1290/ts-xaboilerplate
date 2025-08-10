import { JwtAdapter } from "../../../infrastructure/token/jwt.adapter.js";
import { AuthMiddleware } from "../../http/middlewares/auth.middleware.js";

export const makeAuthMiddleware = (): AuthMiddleware => {
  const jwtAdapter = new JwtAdapter();
  return new AuthMiddleware(jwtAdapter);
};