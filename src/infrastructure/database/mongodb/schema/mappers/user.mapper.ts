import { User } from "../../../../../domain/entities/user.entities.js";
import type { UserDocument } from "../user.schema.js";


export class UserMapper {
  static toDomain(raw: UserDocument): User {
    return User.create({
      id: raw._id,
      name: raw.name,
      email: raw.email,
      passwordHash: raw.passwordHash,
      createdAt: raw.createdAt,
    });
  }

  static toPersistence(user: User): UserDocument {
    return {
      _id: user.id,
      name: user.props.name,
      email: user.props.email,
      passwordHash: user.props.passwordHash,
      createdAt: user.createdAt,
    } as UserDocument;
  }
}