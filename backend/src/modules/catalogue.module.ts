import { Module } from '@nestjs/common';
import { CatalogueService } from '../services/catalogue/catalogue.service';
import { CatalogueController } from '../controllers/catalogue/catalogue.controller';

@Module({
  controllers: [CatalogueController],
  providers: [CatalogueService]
})
export class CatalogueModule {}
