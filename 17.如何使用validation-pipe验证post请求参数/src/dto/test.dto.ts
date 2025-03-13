import { IsInt } from 'class-validator';

export class TestDto {
  name: string;
  @IsInt()
  age: number;
  sex: boolean;
  hobbies: Array<string>;
}
