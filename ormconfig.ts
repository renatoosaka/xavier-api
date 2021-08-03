import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export default {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'postgres',
  database: 'temos',
  entities: ['./src/**/*.entity{.ts, .js}'],
  migrations: ['./src/_migrations/*{.ts, .js}'],
  cli: {
    migrationsDir: './src/_migrations',
  },
} as TypeOrmModuleOptions;
