import { Controller, Get, Post, Body, UseGuards } from '@nestjs/common';
import { CategoriesService } from '../../services/categories.service';
import { CreateCategoryDto } from '../../dtos/categories/index';
import { AuthGuard } from '@nestjs/passport';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';

@Controller()
@UseGuards(AuthGuard('jwt'))
@ApiTags('Categories')
@ApiBearerAuth()
export class CategoriesController {

  constructor(private readonly categoriesService: CategoriesService) { }

  /**
   * Create new category
   * @param createCategoryDto 
   * @returns 
   */
  @Post('category')
  @ApiOperation({ summary: "Create new category" })
  create(@Body() createCategoryDto: CreateCategoryDto) {
    return this.categoriesService.create(createCategoryDto);
  }

  /**
   * Returns the list of categories
   * @returns 
   */
  @Get('categories')
  @ApiOperation({ summary: "Returns the list of categories" })
  async findAll() {
    return await this.categoriesService.findAll();
  }

}
