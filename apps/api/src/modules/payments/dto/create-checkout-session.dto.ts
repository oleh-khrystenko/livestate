import { createZodDto } from 'nestjs-zod';
import { CreateCheckoutSessionSchema } from '@livestate/types';

export class CreateCheckoutSessionDto extends createZodDto(
    CreateCheckoutSessionSchema
) {}
