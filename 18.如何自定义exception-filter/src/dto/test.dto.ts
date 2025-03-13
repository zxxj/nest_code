import { IsNotEmpty, IsEmail, IsNumber } from 'class-validator';

export class TestDto {
  @IsNotEmpty({ message: 'username不能为空!' })
  username: string;

  @IsNotEmpty({ message: 'email不能为空!' })
  @IsEmail({}, { message: 'email必须符合正确的邮箱格式!' })
  email: string;

  @IsNumber({}, { message: 'age必须是数字!' })
  age: number;
}
