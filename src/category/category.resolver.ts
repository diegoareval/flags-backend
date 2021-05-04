import { CategoryService } from './category.service';
import { Category } from './model/category';
import { Resolver, Query } from '@nestjs/graphql';

@Resolver(() => Category)
export class CategoryResolver {
  constructor(private readonly categoryService: CategoryService) {}
  @Query(() => [Category])
  async categories() {
    return await this.categoryService.getMany();
  }
}
