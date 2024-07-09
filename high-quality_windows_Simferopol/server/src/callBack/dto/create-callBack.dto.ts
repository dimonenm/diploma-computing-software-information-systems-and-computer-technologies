import { IsString, MinLength, IsPhoneNumber } from 'class-validator'

export class CreateCallBackDto {
  @IsString()
  name: string;

  @IsString()
  @MinLength(10, { message: 'Phone must be at least 10 characters long' })
  @IsPhoneNumber('RU')
  phoneNumber: string;
}
