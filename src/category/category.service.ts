import { Category } from './model/category';
import { UpdateCategoryDto } from './dto/update-category-dto';
import { CreateCategoryDto } from './dto/create-category-dto';
import { PrismaService } from './../core/prisma/prisma.service';
import { Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class CategoryService {
  constructor(private readonly prismaService: PrismaService) {}
  async getMany() {
    return await this.prismaService.category.findMany({
      include: { questions: { include: { answers: true } } },
    });
  }
  async get(id: string) {
    const category = await this.prismaService.category.findUnique({
      where: { id },
      include: { questions: { include: { answers: true } } },
    });
    if (!category) {
      throw new NotFoundException('La categoria no existe');
    }
    return category;
  }
  async create(data: CreateCategoryDto) {
    return await this.prismaService.category.create({
      data,
      include: { questions: { include: { answers: true } } },
    });
  }
  async update(data: UpdateCategoryDto) {
    return await this.prismaService.category.update({
      where: { id: data.id },
      data,
    });
  }

  async delete(id: string) {
     return this.get(id).then( async (category: Category) =>  await this.prismaService.category.delete({where: { id: category.id }})
     )
  }
}
