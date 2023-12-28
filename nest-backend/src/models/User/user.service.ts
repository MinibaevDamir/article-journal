import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { User } from "./entities/user.entity";
import { Repository } from "typeorm";
import { CreateUserDTO } from "./interfaces/user.interface";

@Injectable()
export class UserService {
    constructor(@InjectRepository(User) private readonly userRepository: Repository<User>) { }
    createNewUser(createUserDTO: CreateUserDTO) {
        const newUser = this.userRepository.create(createUserDTO);
        return this.userRepository.save(newUser);
    }
    findAll(): Promise<User[]> {
        return this.userRepository.find();
    }
    findOne(value): Promise<User | null> {
        return this.userRepository.findOne({ where: { email: value } })
    }
}