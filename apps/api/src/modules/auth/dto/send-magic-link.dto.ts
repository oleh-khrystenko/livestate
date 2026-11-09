import { createZodDto } from 'nestjs-zod';

import { SendMagicLinkSchema } from '@livestate/types';

export class SendMagicLinkDto extends createZodDto(SendMagicLinkSchema) {}
