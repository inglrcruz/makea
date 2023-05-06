import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { PrismaModule } from './modules/prisma.module'
import { CatalogueModule } from './modules/catalogue.module';

@Module({
  imports: [ConfigModule.forRoot(), PrismaModule, CatalogueModule],
  controllers: [],
  providers: [],
})
export class AppModule { }
