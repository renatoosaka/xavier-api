import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-local';
import { User } from 'src/users/interfaces/user.interface';
import { AuthService } from './auth.service';
import { ValidateUserDTO } from './dtos/validate-user.dto';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private authService: AuthService) {
    super({ usernameField: 'email' });
  }

  async validate(email: string, password: string): Promise<User> {
    const user = await this.authService.validateUser({
      email,
      password,
    });

    if (!user) {
      throw new UnauthorizedException();
    }

    return user;
  }
}
