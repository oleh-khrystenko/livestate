import { createZodDto } from 'nestjs-zod';
import { SetPasswordSchema } from '@livestate/types';

export class SetPasswordDto extends createZodDto(SetPasswordSchema) {}
