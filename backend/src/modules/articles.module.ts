import { Module } from '@nestjs/common';
import { ArticlesService } from '../services/articles.service';
import { ArticlesController } from '../controllers/articles/articles.controller';
import { AuthModule } from './auth.module';

@Module({
  controllers: [ArticlesController],
  providers: [ArticlesService],
  imports: [AuthModule]
})
export class ArticlesModule {}
