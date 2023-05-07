import { Controller, Get, Post, Body, BadRequestException, UseGuards } from '@nestjs/common';
import { PhotosService } from '../../services/photos.service';
import { CreatePhotoDto } from '../../dtos/photos/create-photo.dto';
import { AuthGuard } from '@nestjs/passport';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';

@Controller('photos')
@UseGuards(AuthGuard('jwt'))
@ApiTags('Photos')
@ApiBearerAuth()
export class PhotosController {

  constructor(private readonly photosService: PhotosService) { }

  /**
   * Create the new photo
   * @param createPhotoDto 
   * @returns 
   */
  @Post()
  @ApiOperation({ summary: "Create new photo" })
  async create(@Body() createPhotoDto: CreatePhotoDto) {
    const list = []
    for (const itm of createPhotoDto.photos) {
      if (!["webp", "png", "jpg", "jpeg"].includes(String(itm).split(".").pop())) throw new BadRequestException(`This url ${itm} is not an image`)
      list.push({ url: itm, articleId: createPhotoDto.aid })
    }
    return this.photosService.create(list);
  }

}