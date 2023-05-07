import { Controller, Get, Post, Body, Param, UseGuards } from '@nestjs/common';
import { ArticlesService } from '../../services/articles.service';
import { CreateArticleDto } from '../../dtos/articles';
import { AuthGuard } from '@nestjs/passport';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';

@Controller()
@UseGuards(AuthGuard('jwt'))
@ApiTags('Articles')
@ApiBearerAuth()
export class ArticlesController {

  constructor(private readonly articlesService: ArticlesService) { }

  /**
   * Create new article
   * @param createArticleDto 
   * @returns 
   */
  @Post('article')
  @ApiOperation({ summary: "Create new article" })
  async create(@Body() createArticleDto: CreateArticleDto) {
    return await this.articlesService.create(createArticleDto);
  }

  /**
   * Returns the list of articles
   * @returns 
   */
  @Get('articles')
  @ApiOperation({ summary: "Returns the list of articles" })
  async findAll() {
    return await this.articlesService.findAll();
  }

  /**
   * Return article by id
   * @param id 
   * @returns 
   */
  @Get('article/:id')
  @ApiOperation({ summary: "Return article by id" })
  async findOne(@Param('id') id: number) {
    return await this.articlesService.findOne(id);
  }

  /**
  * Returns list of articles by category
  * @param id 
  * @returns 
  */
  @Get('articles-by-category/:id')
  @ApiOperation({ summary: "Returns list of articles by category" })
  async findByCategory(@Param('id') id: number) {
    return await this.articlesService.findByCategory(id)
  }

  /**
   * Search articles by name
   * @param search 
   * @returns 
   */
  @Get('search-articles/:search')
  @ApiOperation({ summary: "Search articles by name" })
  async searchArticlesByName(@Param('search') search: string) {
    return await this.articlesService.searchArticlesByName(search)
  }

}