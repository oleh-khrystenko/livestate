import { createZodDto } from 'nestjs-zod';
import { CheckEmailSchema } from '@livestate/types';

export class CheckEmailDto extends createZodDto(CheckEmailSchema) {}
