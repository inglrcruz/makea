import { Injectable } from '@nestjs/common';
import { CreateCatalogueDto, UpdateCatalogueDto } from '../../dtos/catalogue';
import { PrismaService } from '../prisma.service';

@Injectable()
export class CatalogueService {
  
  constructor(private prisma: PrismaService) {}

  async create(createCatalogueDto: CreateCatalogueDto) {
    await this.prisma.user.create({
      data: {
        device: "a0001",
        movil: "8098765951",
        fullName: "Luis Cruz",
        email: "lrcruz@test.com"
      }
    });
    

    return { message: 'User created succefully' };
  }

  findAll() {
    return `This action returns all catalogue`;
  }

  findOne(id: number) {
    return `This action returns a #${id} catalogue`;
  }

  update(id: number, updateCatalogueDto: UpdateCatalogueDto) {
    return `This action updates a #${id} catalogue`;
  }

  remove(id: number) {
    return `This action removes a #${id} catalogue`;
  }
}
