import { createZodDto } from 'nestjs-zod';
import { RefreshSchema } from '@livestate/types';

export class RefreshDto extends createZodDto(RefreshSchema) {}
