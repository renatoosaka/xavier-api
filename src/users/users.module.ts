import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { HashModule } from 'src/hash/hash.module';
import { User } from './user.entity';
import { UserMapper } from './user.mapper';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';

@Module({
  imports: [TypeOrmModule.forFeature([User]), HashModule],
  exports: [UsersService],
  controllers: [UsersController],
  providers: [UsersService, UserMapper],
})
export class UsersModule {}
