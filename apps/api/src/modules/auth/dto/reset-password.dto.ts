import { createZodDto } from 'nestjs-zod';
import { ResetPasswordSchema } from '@livestate/types';

export class ResetPasswordDto extends createZodDto(ResetPasswordSchema) {}
