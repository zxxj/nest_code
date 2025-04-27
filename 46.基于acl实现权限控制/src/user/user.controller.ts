import { Body, Controller, Get, Post, Session } from '@nestjs/common';
import { UserService } from './user.service';
import { LoginUserDto } from './dto/loginUser.dto';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('init-data')
  async init() {
    await this.userService.initData();

    return 'done';
  }

  @Post('login')
  async login(@Body() user: LoginUserDto, @Session() session) {
    console.log(user);

    const foundUser = await this.userService.login(user);

    session.user = {
      username: foundUser.username,
    };

    return '登录成功';
  }
}
