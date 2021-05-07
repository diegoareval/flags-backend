import { InputType, Field } from '@nestjs/graphql';
import { IsNotEmpty, MaxLength, MinLength } from 'class-validator';
@InputType()
export class CreateCategoryDto {
  @IsNotEmpty()
  @MaxLength(100)
  @MinLength(5)
  @Field({ nullable: true })
  name: string;
}
