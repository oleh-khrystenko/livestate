import { createZodDto } from 'nestjs-zod';

import { UpdateLangSchema } from '@livestate/types';

export class UpdateLangDto extends createZodDto(UpdateLangSchema) {}
