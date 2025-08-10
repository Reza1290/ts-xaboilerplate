import jwt from 'jsonwebtoken';
import type { ITokenManager } from '../../application/services/i-token-manager.service.js';
import { env } from '../../main/config/env.js';

export class JwtAdapter implements ITokenManager {
    sign(payload: object, expiresIn: any): Promise<string> {
        return new Promise((resolve, reject) => {
            jwt.sign(payload, env.jwtSecret, { expiresIn }, (err, token) => {
                if (err || !token) return reject(err);
                resolve(token);
            });
        });
    }

    verify(token: string): Promise<{ sub: string } | null> {
        return new Promise((resolve) => {
            jwt.verify(token, env.jwtSecret, (err, decoded) => {
                if (err || !decoded) return resolve(null);
                resolve(decoded as { sub: string });
            });
        });
    }
}