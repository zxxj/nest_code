import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
  private readonly users = [
    {
      userId: 1,
      username: 'xin',
      password: '123456',
    },
    {
      userId: 2,
      username: 'zxx',
      password: 'aaaaaa',
    },
  ];

  async findOne(username: string) {
    return this.users.find((user) => user.username === username);
  }
}
