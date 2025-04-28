import { Body, Controller, Get, Inject, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { LoginUserDto } from './dto/login-user.dto';
import { JwtService } from '@nestjs/jwt';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Inject(JwtService)
  private jwtService: JwtService;

  @Get('init-data')
  async initData() {
    await this.userService.initData();
    return 'done';
  }

  @Post('login')
  async login(@Body() loginUser: LoginUserDto) {
    const foundUser = await this.userService.login(loginUser);
    // console.log(foundUser);

    const token = this.jwtService.sign({
      user: {
        username: foundUser.username,
        roles: foundUser.roles,
      },
    });

    return { token };
  }
}
