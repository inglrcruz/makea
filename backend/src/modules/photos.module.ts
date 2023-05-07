import { Module } from '@nestjs/common';
import { PhotosService } from '../services/photos.service';
import { PhotosController } from '../controllers/photos/photos.controller';

@Module({
  controllers: [PhotosController],
  providers: [PhotosService]
})
export class PhotosModule {}