import { Injectable } from '@nestjs/common';
import { UserService } from '../models/User/user.service';
import { User } from 'src/models/User/entities/user.entity';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
    constructor(private userService: UserService, private jwtService: JwtService) { }

    async validateUser(email: string, pass: string) {
        const user = await this.userService.findOne(email);
        if (user && user.password === pass) {
            const { password, ...result } = user;
            return result;
        }
        return null;
    }

    async login(user: User) {
        const payload = {email: user.email, sub: user.id};
        return {
            access_token: this.jwtService.sign(payload)
        }
    }
}
