import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDTO } from './dtos/create-user.dto';
import { User } from './user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  async findAll(): Promise<User[]> {
    return this.usersRepository.find();
  }

  async findByEmail(email: string): Promise<User | undefined> {
    return this.usersRepository.findOne({ email });
  }

  async create({ name, email, password, role }: CreateUserDTO): Promise<User> {
    const user = this.usersRepository.create({
      name,
      email,
      password,
      role,
    });

    await this.usersRepository.save(user);

    return user;
  }
}
