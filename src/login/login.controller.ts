import { Controller } from '@nestjs/common';
import { Get, Param, Post, Req } from '@nestjs/common/decorators';
import { LoginRequest, LoginResponse } from 'src/model/loginRequest';
import { LoginService } from './login.service';

@Controller('/login')
export class LoginController {
    constructor(private loginService : LoginService) {}
    
    @Get('/:userId')
    getLogin(@Param() userId:number){
        return this.loginService.get();
    }

    @Post('/userPost')
    userPost(@Req() body:LoginRequest){
        console.log(req);
        return new LoginResponse();
    }
}