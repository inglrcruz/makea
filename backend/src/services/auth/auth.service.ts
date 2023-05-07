import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';

@Injectable()
export class AuthService {

  constructor(private prisma: PrismaService) { }

  /**
   * Create the new authentication
   * @param data 
   * @returns 
   */
  async create(data: any) {
    return await this.prisma.auth.create({ data })
  }

  /**
   * Get authentication by id
   * @returns 
   */
  async findOne(id: any) {
    return await this.prisma.auth.findFirst({ where: { aid: id } })
  }

}
