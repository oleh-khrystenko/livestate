import { createZodDto } from 'nestjs-zod';
import { SubmitBriefSchema } from '@livestate/types';

export class SubmitBriefDto extends createZodDto(SubmitBriefSchema) {}
