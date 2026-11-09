import { createZodDto } from 'nestjs-zod';
import { LoginPasswordSchema } from '@livestate/types';

export class LoginPasswordDto extends createZodDto(LoginPasswordSchema) {}
