import { Module } from '@nestjs/common';
import { CoreModule } from './core/core.module';
import { CategoryModule } from './category/category.module';
import { QuestionModule } from './question/question.module';

@Module({
  imports: [CoreModule, CategoryModule, QuestionModule],
})
export class AppModule {}
