import { ApiProperty } from '@nestjs/swagger';
import { Permission } from './Permission.dto';
import { Product, Context } from './ContextSchema.dto';
//Enum for tag types - it will only 
export enum TagType {
  subTopic = 'subTopic',
}
//DTO for a tag
export class Tag {
  @ApiProperty({ type: String })
  id: string;

  @ApiProperty({ enum: TagType })
  type: TagType;

  @ApiProperty({ type: String })
  senderId: string;

  @ApiProperty({ type: String })
  content: string;

  @ApiProperty({ type: [Tag], required: false })
  tags?: Tag[];
}

//DTO for creating a chat conversation
export class CreateChatConversationDto {
  @ApiProperty()
  product: Product;

  @ApiProperty({ type: [Context] })
  context: Context[];

  @ApiProperty({ type: [Permission], required: false, default: [] })
  permissions?: Permission[];

  @ApiProperty({ type: [Tag], required: false })
  tags?: Tag[];

  @ApiProperty({ type: [String], required: false })
  memberIds?: string[];

  @ApiProperty({ type: [String], required: false })
  blockedMemberIds?: string[];
}

// DTO for adding/updating tags on a message
export class UpdateMessageTagsDto {
  @ApiProperty({ type: String })
  messageId: string;

  @ApiProperty({ type: [Tag] })
  tags: Tag[];
}

// DTO for searching messages by tags
export class SearchMessagesByTagsDto {
  @ApiProperty({ type: [String] })
  tagIds: string[];
}

