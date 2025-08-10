import { User } from '../../../domain/entities/user.entities.js'
import type { IUserRepository } from '../../../domain/repositories/i-user.repository.js'
import type { IRegisterUserRequestDTO, IRegisterUserResponseDTO } from '../../dtos/register-user.dto.js'
import { Result } from '../../Result.js'
import type { IHasher } from '../../services/i-hasher.service.js'
import { v4 as uuidv4 } from 'uuid'

export class RegisterUserUseCase {
    constructor(private readonly userRepository: IUserRepository, private readonly hasher: IHasher) { }
    async execute(data: IRegisterUserRequestDTO): Promise<Result<IRegisterUserResponseDTO>> {
        const userAlreadyExists = await this.userRepository.findByEmail(data.email)

        if (userAlreadyExists) return Result.fail<IRegisterUserResponseDTO>('User with this email already exists.')

        const passwordHash = await this.hasher.hash(data.password_DoNotLog)

        const user = User.create({
            name: data.name, email: data.email, passwordHash,
            id: uuidv4()
        })

        const insertedUser = await this.userRepository.save(user)

        if (!insertedUser) return Result.fail<IRegisterUserResponseDTO>('Error')

        const response: IRegisterUserResponseDTO = { id: user.id, name: user.props.name, email: user.props.email }

        return Result.ok<IRegisterUserResponseDTO>(response)
    }
}