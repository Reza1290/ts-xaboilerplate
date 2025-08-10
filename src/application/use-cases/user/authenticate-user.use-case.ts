import type { IUserRepository } from "../../../domain/repositories/i-user.repository.js";
import type { IAuthenticateUserRequestDTO, IAuthenticateUserResponseDTO } from "../../dtos/authenticate-user.dto.js";
import { Result } from "../../Result.js";
import type { IHasher } from "../../services/i-hasher.service.js";
import type { ITokenManager } from "../../services/i-token-manager.service.js";


export class AuthenticateUserUseCase {
    constructor(private readonly uRepo: IUserRepository, private readonly hasher: IHasher, private readonly tokenMan: ITokenManager) { }
    async execute(data: IAuthenticateUserRequestDTO): Promise<Result<IAuthenticateUserResponseDTO>> {

        const user = await this.uRepo.findByEmail(data.email);

        if (!user) return Result.fail<IAuthenticateUserResponseDTO>('Invalid email or password.');

        const passwordMatches = await this.hasher.compare(data.password_DoNotLog, user.props.passwordHash);

        if (!passwordMatches) return Result.fail<IAuthenticateUserResponseDTO>('Invalid email or password.');

        const token = await this.tokenMan.sign({ sub: user.id }, '1d');

        const response: IAuthenticateUserResponseDTO = {
            user: {
                id: user.id,
                name: user.props.name,
                email: user.props.email
            },
            token
        };

        return Result.ok<IAuthenticateUserResponseDTO>(response);
    }
}