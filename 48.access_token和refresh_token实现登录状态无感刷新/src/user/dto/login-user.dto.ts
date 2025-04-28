import { IsNotEmpty, Length } from 'class-validator';

export class LoginUserDto {
  @IsNotEmpty()
  @Length(50)
  username: string;

  @IsNotEmpty()
  @Length(50)
  password: string;
}
