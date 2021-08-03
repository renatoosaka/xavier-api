import { User } from './interfaces/user.interface';
import { User as UserEntity } from './user.entity';

type UserMapperInput = UserEntity | UserEntity[];
type UserMapperResponse = User | User[];

export class UserMapper {
  toJSON(user: UserMapperInput): UserMapperResponse {
    if (Array.isArray(user)) {
      return user.map((u) => this.formatUser(u));
    }

    return this.formatUser(user);
  }

  private formatUser(user: UserEntity): User {
    return {
      id: user.id,
      name: user.name,
      email: user.email,
      role: user.role,
      created_at: user.created_at,
      updated_at: user.updated_at,
    };
  }
}
