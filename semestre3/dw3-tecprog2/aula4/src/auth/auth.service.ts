import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt'
import { UsersService } from 'src/users/users.service';

@Injectable()
export class AuthService {
    constructor(
      private jwtService: JwtService,
        private userService: UsersService
    ){}

    async validateUser(email: string, password: string){
        const user = await this.userService.findOneByEmail(email) //Faz a busca do usuário "Um usuário com esse email já existe?"
        
        if(!user) return null

        const passSalted =  user.email+'-'+password;
        if (user && bcrypt.compareSync(passSalted, user.password)){
            return user
        }

        return null
    }
}
