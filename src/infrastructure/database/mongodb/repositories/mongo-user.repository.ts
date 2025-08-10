import { User } from "../../../../domain/entities/user.entities.js";
import type { IUserRepository } from "../../../../domain/repositories/i-user.repository.js";
import { UserMapper } from "../schema/mappers/user.mapper.js";
import { UserModel } from "../schema/user.schema.js";


export class MongoUserRepository implements IUserRepository {
    async findByEmail(email: string): Promise<User | null> {
        const rawUser = await UserModel.findOne({ email }).exec();
        return rawUser ? UserMapper.toDomain(rawUser) : null;
    }

    async findById(id: string): Promise<User | null> {
        const rawUser = await UserModel.findById(id).exec();
        return rawUser ? UserMapper.toDomain(rawUser) : null;
    }

    async save(user: User): Promise<User | null> {
        const rawUser = UserMapper.toPersistence(user);

        const updatedRawUser = await UserModel.findOneAndUpdate(
            { _id: user.id },
            rawUser,
            {
                upsert: true,
                new: true
            }
        ).exec();

        return UserMapper.toDomain(updatedRawUser);
    }
}