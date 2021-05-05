import { Module } from '@nestjs/common';
import { GraphqlModule } from './graphql/graphql.module';
import { PrismaModule } from './prisma/prisma.module';
 
@Module({
  imports: [GraphqlModule, PrismaModule, PrismaModule]
})
export class CoreModule {}
