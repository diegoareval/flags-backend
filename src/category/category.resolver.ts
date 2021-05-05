import { CreateCategoryDto } from './dto/create-category-dto';
import { CategoryService } from './category.service';
import { Category } from './model/category';
import { Resolver, Query, Args, Mutation } from '@nestjs/graphql';

@Resolver(() => Category)
export class CategoryResolver {
  constructor(private readonly categoryService: CategoryService) {}

  @Query(() => [Category])
  async categories() {
    return await this.categoryService.getMany();
  }

  @Query(() => Category)
  async category(@Args('id') id: string) {
    return await this.categoryService.get(id);
  }

  @Mutation(() => Category)
  async createCategory(
    @Args({ name: 'input', type: () => CreateCategoryDto })
    data: CreateCategoryDto,
  ) {
    return await this.categoryService.create(data);
  }
}
