import { Controller, Get, Post, Req, UseGuards } from '@nestjs/common';
import { AppService } from './app.service';
import { AuthGuard } from '@nestjs/passport';
import { Request } from 'express';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post('login')
  @UseGuards(AuthGuard('local'))
  async login(@Req() req: Request) {
    console.log(req.user);
    return req.user;
  }
}
