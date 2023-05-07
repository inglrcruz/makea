import { Test, TestingModule } from '@nestjs/testing';
import { ArticlesController } from './articles.controller';
import { ArticlesService } from '../../services/articles.service';
import { PrismaService } from '../../services/prisma.service';
import { CreateArticleDto } from 'src/dtos/articles';
import { Article } from 'src/interfaces';

describe('Categories', () => {
  let controller: ArticlesController, service: ArticlesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ArticlesController],
      providers: [ArticlesService, PrismaService],
    }).overrideProvider(ArticlesService).useValue({
      findAll: jest.fn(() => Promise.resolve([{
        aid: 1,
        name: "Article 1",
        category: { name: "Category" },
        pictures: [{ url: "url_picture.png" }],
        description: "This is aa test",
        price: 20000
      }, {
        aid: 2,
        name: "Article 2",
        category: { name: "Category" },
        pictures: [{ url: "url_picture.png" }],
        description: "This is aa test",
        price: 234987
      }])),
      findOne: jest.fn(() => Promise.resolve({
        aid: 2,
        name: "Article 2",
        category: { name: "Category" },
        pictures: [{ url: "url_picture.png" }],
        description: "This is aa test",
        price: 234987
      })),
      create: jest.fn(),
    }).compile();

    controller = module.get<ArticlesController>(ArticlesController);
    service = module.get<ArticlesService>(ArticlesService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  /**
   * Find all articles
   */
  describe('findAll', () => {
    it('should return an array of articles', async () => {
      const result: any = await service.findAll();
      jest.spyOn(service, 'findAll').mockImplementation(async () => result);
      expect(await controller.findAll()).toBe(result);
    });
  });

  /**
   * Find one article
   */
  describe('findOne', () => {
    it('should return an array of articles', async () => {
      const result: any = await service.findOne(2);
      jest.spyOn(service, 'findOne').mockImplementation(() => result);
      expect(await controller.findOne(2)).toBe(result);
    });
  });

  /**
   * Create new article
   */
  describe('create', () => {
    it('should create an article', async () => {

      const createArticleDto: CreateArticleDto = {
        name: 'This is a new article',
        categoryId: 1,
        description: "",
        price: 234098
      };

      const expectedArticle: Article = {
        aid: 1,
        name: 'This is a new article',
        categoryId: 1,
        description: "",
        price: 234098
      };

      jest.spyOn(service, 'create').mockResolvedValue(expectedArticle);
      const result = await controller.create(createArticleDto);
      expect(result).toEqual(expectedArticle);
    });
  });

});