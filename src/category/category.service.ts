import { CreateCategoryDto } from './dto/create-category-dto';
import { PrismaService } from './../core/prisma/prisma.service';
import { Injectable } from '@nestjs/common';

@Injectable()
export class CategoryService {
  constructor(private readonly prismaService: PrismaService) {}
  async getMany() {
    return await this.prismaService.category.findMany({
      include: { questions: { include: { answers: true } } },
    });
  }
  async get(id: string) {
    return await this.prismaService.category.findUnique({
      where: { id },
      include: { questions: { include: { answers: true } } },
    });
  }
  async create(data: CreateCategoryDto) {
    return await this.prismaService.category.create({
      data,
      include: { questions: { include: { answers: true } } },
    });
  }
  async update() {}

  async delete(id: string) {
    return await this.prismaService.category.delete({ where: { id } });
  }
}
