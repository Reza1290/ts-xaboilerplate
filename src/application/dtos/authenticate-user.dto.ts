export interface IAuthenticateUserRequestDTO { email: string; password_DoNotLog: string; }
export interface IAuthenticateUserResponseDTO { user: { id: string; name: string; email: string; }; token: string; }
