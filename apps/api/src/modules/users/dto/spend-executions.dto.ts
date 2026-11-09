import { createZodDto } from 'nestjs-zod';

import { SpendExecutionsSchema } from '@livestate/types';

export class SpendExecutionsDto extends createZodDto(SpendExecutionsSchema) {}
