import { Body, Controller, Get, Post, UsePipes, ValidationPipe } from "@nestjs/common";
import { UserService } from "./interfaces/user.service";
import { CreateUserDTO } from "./interfaces/user.interface";

@Controller('/api/users')
export class UserController {
    constructor(private readonly userService: UserService) { }
    @Get()
    getUsers() {
        return this.userService.getUsers();
    }
    @Post('create')
    @UsePipes(ValidationPipe)
    createNewUser(@Body() createUserDto: CreateUserDTO) {
        return this.userService.createNewUser(createUserDto);
    }
}