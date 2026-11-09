import { createZodDto } from 'nestjs-zod';
import { VerifyPasswordSchema } from '@livestate/types';

export class VerifyPasswordDto extends createZodDto(VerifyPasswordSchema) {}
