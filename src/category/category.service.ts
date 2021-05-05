import { PrismaService } from './../core/prisma/prisma.service';
import { Injectable } from '@nestjs/common';

@Injectable()
export class CategoryService {
  constructor(private readonly prismaService: PrismaService) {}
  async getMany() {
    return await this.prismaService.category.findMany();
  }
  async get() {}
  async create() {}
  async update() {}
  async delete() {}
}
