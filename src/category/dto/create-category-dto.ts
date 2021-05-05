import {InputType, Field } from "@nestjs/graphql";

@InputType()
export class CreateCategoryDto {
@Field()
name: string

}