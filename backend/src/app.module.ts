import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { PrismaModule } from './modules/prisma.module'
import { CategoriesModule } from './modules/categories.module'
import { ArticlesModule } from './modules/articles.module'
import { PhotosModule } from './modules/photos.module';
import { AuthModule } from './modules/auth.module';
import { AuthService } from './services/auth/auth.service';
import { SeedModule } from './seed/seed.module';

@Module({
  imports: [ConfigModule.forRoot(), PrismaModule, SeedModule, CategoriesModule, ArticlesModule, PhotosModule, AuthModule],
  controllers: [],
  providers: [AuthService],
})
export class AppModule { }
