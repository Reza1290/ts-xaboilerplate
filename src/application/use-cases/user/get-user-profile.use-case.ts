import type { IUserRepository } from "../../../domain/repositories/i-user.repository.js";
import type { IGetUserProfileRequestDTO, IGetUserProfileResponseDTO } from "../../dtos/get-user-profile.dto.js";
import { Result } from "../../Result.js";

export class GetUserProfileUseCase {
    constructor(private readonly userRepository: IUserRepository) { }
    async execute(data: IGetUserProfileRequestDTO): Promise<Result<IGetUserProfileResponseDTO>> {
        const user = await this.userRepository.findById(data.userId);

        if (!user) return Result.fail<IGetUserProfileResponseDTO>('User not found.');

        const response: IGetUserProfileResponseDTO = { id: user.id, name: user.props.name, email: user.props.email, createdAt: user.createdAt };

        return Result.ok<IGetUserProfileResponseDTO>(response);
    }
}