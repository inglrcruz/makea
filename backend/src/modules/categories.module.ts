import { Module } from '@nestjs/common';
import { CategoriesService } from '../services/categories.service';
import { CategoriesController } from '../controllers/categories/categories.controller';

@Module({
  controllers: [CategoriesController],
  providers: [CategoriesService]
})
export class CategoriesModule { }
