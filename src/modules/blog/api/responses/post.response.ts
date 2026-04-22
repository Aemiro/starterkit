import { PostEntity } from '@blog/domain/post.entity';
import { ApiProperty } from '@nestjs/swagger';
export class PostResponse {
  @ApiProperty()
  id!: string;
  @ApiProperty()
  title!: string;
  @ApiProperty()
  description!: string;
  @ApiProperty()
  createdBy?: string;
  @ApiProperty()
  updatedBy?: string;
  @ApiProperty()
  createdAt!: Date;
  @ApiProperty()
  updatedAt!: Date;
  @ApiProperty()
  deletedAt?: Date;
  @ApiProperty()
  deletedBy?: string;
  static toResponse(entity: PostEntity): PostResponse {
    const response = new PostResponse();
    response.id = entity.id;
    response.title = entity.title;
    response.description = entity.description;
    response.createdBy = entity.createdBy;
    response.updatedBy = entity.updatedBy;
    response.createdAt = entity.createdAt;
    response.updatedAt = entity.updatedAt;
    response.deletedAt = entity.deletedAt;
    response.deletedBy = entity.deletedBy;
    return response;
  }
}
