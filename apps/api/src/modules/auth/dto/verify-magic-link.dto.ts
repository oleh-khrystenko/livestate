import { createZodDto } from 'nestjs-zod';

import { VerifyMagicLinkSchema } from '@livestate/types';

export class VerifyMagicLinkDto extends createZodDto(VerifyMagicLinkSchema) {}
