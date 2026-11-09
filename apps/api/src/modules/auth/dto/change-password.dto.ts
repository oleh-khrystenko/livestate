import { createZodDto } from 'nestjs-zod';
import { ChangePasswordSchema } from '@livestate/types';

export class ChangePasswordDto extends createZodDto(ChangePasswordSchema) {}
