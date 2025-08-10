export interface ITokenManager {
  sign(payload: object, expiresIn: string): Promise<string>;
  verify(token: string): Promise<object & { sub: string } | null>;
}