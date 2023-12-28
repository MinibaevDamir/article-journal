import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './models/User/entities/user.entity';
import { UserHttpModule } from './models/User/user-http.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [ConfigModule.forRoot({ isGlobal: true }),
  TypeOrmModule.forRootAsync({
    imports: [ConfigModule],
    useFactory: (configService: ConfigService) => ({
      type: 'postgres',
      host: configService.get('DB_HOST'),
      port: +configService.get<number>('DB_PORT'),
      username: configService.get('DB_USERNAME'),
      password: configService.get('DB_PASSWORD'),
      database: configService.get('DB_NAME'),
      // host: 'localhost',
      // username: 'admin',
      // password: 'admin',
      // database: 'blog_DB',
      synchronize: false,
      entities: [User],
      logging: true,
      migrations: ['dist/database/migrations/*.js'],
      migrationsTableName: "migrations_typeorm",
      migrationsRun: true
    }),
    inject: [ConfigService],
  }), UserHttpModule, AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
