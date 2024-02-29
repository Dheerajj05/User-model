import { IsEmail, IsString, Length, Matches } from 'class-validator';

export class CreateUserDto {
  @IsEmail()
  email: string;

  @IsString()
  @Length(8, 32)
  @Matches(
    /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*()-]).{8,60}$/,
    {
      message: 'Password is too weak!!',
    },
  )
  password: string;

  @IsString()
  firstName: string;

  @IsString()
  lastName: string;
}
