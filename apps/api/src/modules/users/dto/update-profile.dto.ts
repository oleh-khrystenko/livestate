import { createZodDto } from 'nestjs-zod';
import { UpdateProfileSchema } from '@livestate/types';

export class UpdateProfileDto extends createZodDto(UpdateProfileSchema) {}
