import { Injectable } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { Article } from 'src/interfaces';

@Injectable()
export class ArticlesService {

  constructor(private prisma: PrismaService) { }

  /**
   * Create the new article
   * @param data 
   * @returns 
   */
  async create(data: any): Promise<Article> {
    return await this.prisma.articles.create({ data })
  }

  /**
   * Search list of articles
   * @returns 
   */
  async findAll(): Promise<Article[]> {
    return await this.prisma.articles.findMany({
      include: {
        category: {
          select: {
            name: true
          },
        },
        pictures: {
          select: {
            url: true
          }
        }
      }
    })
  }

  /**
   * Search list of articles by category
   * @returns 
   */
  async findByCategory(id: number): Promise<Article[]> {
    return await this.prisma.articles.findMany({
      include: {
        pictures: {
          select: {
            url: true
          }
        }
      }, where: { categoryId: id }
    })
  }

  /**
   * Search articles by name 
   * @param name 
   * @returns 
   */
  async searchArticlesByName(name: string): Promise<Article[]> {
    return await this.prisma.articles.findMany({
      include: {
        pictures: {
          select: {
            url: true
          }
        }
      },
      where: {
        name: {
          contains: name,
          mode: 'insensitive',
        }
      },
    })
  }

  /**
   * Search article by id
   * @param id 
   * @returns 
   */
  async findOne(id: number): Promise<Article> {
    return await this.prisma.articles.findFirst({
      where: { aid: id },
      include: {
        category: {
          select: {
            name: true
          },
        },
        pictures: {
          select: {
            url: true
          }
        }
      }
    })
  }

}