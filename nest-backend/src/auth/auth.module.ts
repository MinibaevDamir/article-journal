import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LocalStrategy } from './local.strategy';
import { PassportModule } from '@nestjs/passport';
import { UserHttpModule } from '../models/User/user-http.module';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from './constants/constants';
import { JwtStrategy } from './jwt.strategy';

@Module({
  imports: [PassportModule, UserHttpModule, JwtModule.register({
    secret: jwtConstants.secret,
    signOptions: {expiresIn: '60s'}
  })],
  providers: [AuthService, LocalStrategy, JwtStrategy],
  exports: [AuthService]
})

export class AuthModule { }
