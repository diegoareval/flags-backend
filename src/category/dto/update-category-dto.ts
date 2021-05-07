import { InputType, PartialType, Field } from '@nestjs/graphql';
import { IsNotEmpty } from 'class-validator';
import { CreateCategoryDto } from './create-category-dto';
@InputType()
export class UpdateCategoryDto extends PartialType(CreateCategoryDto) {

    @IsNotEmpty()
    @Field({nullable: true})
    id: string
}
