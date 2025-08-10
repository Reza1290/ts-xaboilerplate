import { Router } from "express";
import { adaptMiddleware } from "../../adapters/express-middleware.adapter.js";
import { adaptRoute } from "../../adapters/express-route.adapter.js";
import { makeAuthenticateUserController } from "../../factories/controllers/make-authenticate-user-controller.factory.js";
import { makeChangePasswordController } from "../../factories/controllers/make-change-password-controller.factory.js";
import { makeGetUserProfileController } from "../../factories/controllers/make-get-user-profile-controller.factory.js";
import { makeRegisterUserController } from "../../factories/controllers/make-register-user-controller.factory.js";
import { makeAuthMiddleware } from "../../factories/middlewares/make-auth-middleware.factory.js";

const router = Router();

router.post('/users', adaptRoute(makeRegisterUserController()));
router.post('/sessions', adaptRoute(makeAuthenticateUserController()));
router.get('/me', adaptMiddleware(makeAuthMiddleware()), adaptRoute(makeGetUserProfileController()));
router.patch(
    '/users/password',
    adaptMiddleware(makeAuthMiddleware()),
    adaptRoute(makeChangePasswordController())
);

export { router };
