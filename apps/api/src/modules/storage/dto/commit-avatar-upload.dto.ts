import { createZodDto } from 'nestjs-zod';
import { CommitAvatarUploadSchema } from '@livestate/types';

export class CommitAvatarUploadDto extends createZodDto(
    CommitAvatarUploadSchema
) {}
