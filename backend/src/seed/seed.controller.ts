import { Controller, Get } from '@nestjs/common';
import { SeedService } from './seed.service';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@Controller('seed')
@ApiTags('Seed')
export class SeedController {
  constructor(private readonly seedService: SeedService) { }

  @Get()
  @ApiOperation({ summary: "Run seed if database is not empty" })
  async executeSeed() {
    const total = await this.seedService.countCategories();
    if (total <= 0) {
      await this.seedService.executeCategories();
      await this.seedService.executeArticles();
      await this.seedService.executePhotos();
      return { message: "Seed loaded successfully" }
    } else {
      return { message: "Cannot run the seed if the database is not empty" }
    }
  }

}
