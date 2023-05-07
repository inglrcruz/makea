import { Injectable } from '@nestjs/common';
import { PrismaService } from './prisma.service';

@Injectable()
export class PhotosService {

  constructor(private prisma: PrismaService) { }

  /**
   * Create the new category
   * @param data 
   * @returns 
   */
  async create(list: any) {
    for (const data of list) {
      await this.prisma.photos.create({ data })
    }
    return { message: 'Photos created succefully' };
  }

}