import { Injectable } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { CreateCategoryDto } from 'src/dtos/categories';
import { Category } from 'src/interfaces';

@Injectable()
export class CategoriesService {

  constructor(private prisma: PrismaService) { }

  /**
   * Create the new category
   * @param data 
   * @returns 
   */
  async create(data: any): Promise<Category> {
    return await this.prisma.categories.create({ data })
  }

  /**
   * Search list of categories
   * @returns 
   */
  async findAll(): Promise<Category[]> {
    return await this.prisma.categories.findMany()
  }

}
