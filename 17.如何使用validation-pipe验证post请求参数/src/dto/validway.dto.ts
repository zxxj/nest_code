import {
  Length,
  Contains,
  IsInt,
  Max,
  Min,
  IsEmail,
  IsFQDN,
} from 'class-validator';

export class ValidwayDto {
  @Length(10, 20) // 最小长度为10,最大长度为20
  title: string;

  @Contains('xin', {
    message(validationArguments) {
      console.log(validationArguments);
      return `${validationArguments.targetName}类的${validationArguments.property}属性值的值:${validationArguments.value}不满足约束:${validationArguments.constraints}`;
    },
  }) // 传入的值必须包含xin
  text: string;

  @IsInt() // 整数类型
  @Min(0) // 最小
  @Max(10) // 最大
  count: number;

  // 是否是邮箱
  @IsEmail()
  email: string;

  // 是否是域名
  @IsFQDN()
  site: string;
}
