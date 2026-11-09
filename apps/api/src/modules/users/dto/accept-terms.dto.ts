import { createZodDto } from 'nestjs-zod';

import { AcceptTermsSchema } from '@livestate/types';

export class AcceptTermsDto extends createZodDto(AcceptTermsSchema) {}
