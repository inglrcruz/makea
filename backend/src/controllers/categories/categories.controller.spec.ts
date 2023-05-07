import { Test, TestingModule } from '@nestjs/testing';
import { CategoriesController } from './categories.controller';
import { CategoriesService } from '../../services/categories.service';
import { PrismaService } from '../../services/prisma.service';
import { CreateCategoryDto } from 'src/dtos/categories';
import { Category } from 'src/interfaces';

describe('Categories', () => {
  let controller: CategoriesController, service: CategoriesService;

  beforeEach(async () => {

    const module: TestingModule = await Test.createTestingModule({
      controllers: [CategoriesController],
      providers: [CategoriesService, PrismaService],
    }).overrideProvider(CategoriesService).useValue({
      findAll: jest.fn(() => Promise.resolve([{ cid: 1, name: 'Category 1' }, { cid: 2, name: 'Category 2' }])),
      create: jest.fn(),
    }).compile();

    controller = module.get<CategoriesController>(CategoriesController);
    service = module.get<CategoriesService>(CategoriesService);

  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  /**
   * Find all categories
   */
  describe('findAll', () => {
    it('should return an array of categories', async () => {
      const result: Category[] = await service.findAll();
      jest.spyOn(service, 'findAll').mockImplementation(async () => result);
      expect(await controller.findAll()).toBe(result);
    });
  });  

  /**
   * Create new category
   */
  describe('create', () => {
    it('should create an category', async () => {
      const createCategoryDto: CreateCategoryDto = {
        name: 'This is a new category'
      };
      const expectedCategory: Category = {
        cid: 1,
        name: 'This is a new category'
      };
      jest.spyOn(service, 'create').mockResolvedValue(expectedCategory);
      const result = await controller.create(createCategoryDto);
      expect(result).toEqual(expectedCategory);
    });
  });

});