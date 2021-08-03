import { Body, Controller, Get, Post, Request, HttpCode } from '@nestjs/common';
import { HashService } from 'src/hash/hash.service';
import { CreateUserDTO } from './dtos/create-user.dto';
import { UserMapper } from './user.mapper';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(
    private usersService: UsersService,
    private hashService: HashService,
    private userMapper: UserMapper,
  ) {}

  @Get()
  async index() {
    const users = await this.usersService.findAll();
    return this.userMapper.toJSON(users);
  }

  @Post()
  @HttpCode(201)
  async store(@Body() user: CreateUserDTO) {
    const createdUser = await this.usersService.create({
      ...user,
      password: this.hashService.generate('123456'),
    });

    return this.userMapper.toJSON(createdUser);
  }

  @Get('profile')
  getProfile(@Request() req) {
    return req.user;
  }
}
