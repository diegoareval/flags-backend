import { PrismaModule } from './../core/prisma/prisma.module';
import { Module } from '@nestjs/common';
import { CategoryService } from './category.service';
import { CategoryResolver } from './category.resolver';

@Module({
  imports: [PrismaModule],
  providers: [CategoryService, CategoryResolver]
})
export class CategoryModule {}
