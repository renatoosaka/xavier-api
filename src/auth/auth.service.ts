import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { HashService } from 'src/hash/hash.service';
import { User } from 'src/users/interfaces/user.interface';
import { UsersService } from 'src/users/users.service';
import { ValidateUserDTO } from './dtos/validate-user.dto';

export interface SignInResponse {
  access_token: string;
}

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private hashService: HashService,
    private jwtService: JwtService,
  ) {}

  async validateUser({
    email,
    password,
  }: ValidateUserDTO): Promise<User | null> {
    const user = await this.usersService.findByEmail(email);

    if (user) {
      if (this.hashService.compare(password, user.password)) {
        const { password, ...userWithoutPassword } = user;
        return userWithoutPassword;
      }
    }
    return null;
  }

  async signin(user: User): Promise<SignInResponse> {
    const payload = { sub: user.id };

    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
