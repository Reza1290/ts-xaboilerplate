import type { IUserRepository } from "../../../domain/repositories/i-user.repository.js";
import type { IChangePasswordRequestDTO } from "../../dtos/change-password.dto.js";
import { Result } from "../../Result.js";
import type { IHasher } from "../../services/i-hasher.service.js";

export class ChangePasswordUseCase {
    constructor(private readonly userRepository: IUserRepository, private readonly hasher: IHasher) { }

    async execute(data: IChangePasswordRequestDTO): Promise<Result<void>> {
        const user = await this.userRepository.findById(data.userId);
        if (!user) return Result.fail<void>('User not found.');

        const oldPasswordMatches = await this.hasher.compare(data.oldPassword_DoNotLog, user.props.passwordHash);
        if (!oldPasswordMatches) return Result.fail<void>('Old password does not match.');

        const newPasswordHash = await this.hasher.hash(data.newPassword_DoNotLog);

        try {
            const updatedUser = user.changePassword(newPasswordHash);

            await this.userRepository.save(updatedUser);

            return Result.ok<void>();
        } catch (error: any) {
            return Result.fail<void>(error.message);
        }
    }
}