import { Injectable } from '@nestjs/common';
import { PrismaService } from '../services/prisma.service';

@Injectable()
export class SeedService {

  constructor(private prisma: PrismaService) { }

  async countCategories(): Promise<number> {
    return await this.prisma.categories.count();
  }

  async executeCategories() {
    const categories = [
      { "name": "Salas" }, { "name": "Comedores" }, { "name": "Dormitorios" },
      { "name": "Estanterías" }, { "name": "Muebles" }, { "name": "Decoración" }
    ]
    for (const data of categories) {
      await this.prisma.categories.create({ data })
    }
  }

  async executeArticles() {
    const articles = [
      {
        "name": "Muebles P450",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pulvinar massa orci, quis lobortis neque molestie porta. Nulla aliquet, urna ac placerat tempus, ante erat lacinia elit, eget commodo ligula sapien a turpis. Cras vitae convallis magna, ac tincidunt ex. In eu lectus sem. Proin rutrum vestibulum viverra. Aenean egestas leo sit amet mauris maximus dignissim. Cras iaculis semper imperdiet. Phasellus id eros eget massa ultrices fermentum. Ut ut mollis nibh.",
        "price": 134098,
        "categoryId": 1,
      }, {
        "name": "Muebles AW34",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pulvinar massa orci, quis lobortis neque molestie porta. Nulla aliquet, urna ac placerat tempus, ante erat lacinia elit, eget commodo ligula sapien a turpis. Cras vitae convallis magna, ac tincidunt ex. In eu lectus sem. Proin rutrum vestibulum viverra. Aenean egestas leo sit amet mauris maximus dignissim. Cras iaculis semper imperdiet. Phasellus id eros eget massa ultrices fermentum. Ut ut mollis nibh.",
        "price": 298567,
        "categoryId": 1,
      }, {
        "name": "Muebles H349",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pulvinar massa orci, quis lobortis neque molestie porta. Nulla aliquet, urna ac placerat tempus, ante erat lacinia elit, eget commodo ligula sapien a turpis. Cras vitae convallis magna, ac tincidunt ex. In eu lectus sem. Proin rutrum vestibulum viverra. Aenean egestas leo sit amet mauris maximus dignissim. Cras iaculis semper imperdiet. Phasellus id eros eget massa ultrices fermentum. Ut ut mollis nibh.",
        "price": 178654,
        "categoryId": 1,
      }, {
        "name": "Juego de habitación T450",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pulvinar massa orci, quis lobortis neque molestie porta. Nulla aliquet, urna ac placerat tempus, ante erat lacinia elit, eget commodo ligula sapien a turpis. Cras vitae convallis magna, ac tincidunt ex. In eu lectus sem. Proin rutrum vestibulum viverra. Aenean egestas leo sit amet mauris maximus dignissim. Cras iaculis semper imperdiet. Phasellus id eros eget massa ultrices fermentum. Ut ut mollis nibh.",
        "price": 490234,
        "categoryId": 3,
      }, {
        "name": "Juego de habitación P239",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pulvinar massa orci, quis lobortis neque molestie porta. Nulla aliquet, urna ac placerat tempus, ante erat lacinia elit, eget commodo ligula sapien a turpis. Cras vitae convallis magna, ac tincidunt ex. In eu lectus sem. Proin rutrum vestibulum viverra. Aenean egestas leo sit amet mauris maximus dignissim. Cras iaculis semper imperdiet. Phasellus id eros eget massa ultrices fermentum. Ut ut mollis nibh.",
        "price": 230984,
        "categoryId": 3,
      }, {
        "name": "Juego de habitación G875",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pulvinar massa orci, quis lobortis neque molestie porta. Nulla aliquet, urna ac placerat tempus, ante erat lacinia elit, eget commodo ligula sapien a turpis. Cras vitae convallis magna, ac tincidunt ex. In eu lectus sem. Proin rutrum vestibulum viverra. Aenean egestas leo sit amet mauris maximus dignissim. Cras iaculis semper imperdiet. Phasellus id eros eget massa ultrices fermentum. Ut ut mollis nibh.",
        "price": 156316,
        "categoryId": 3,
      }
    ]
    for (const data of articles) {
      await this.prisma.articles.create({ data })
    }
  }

  async executePhotos() {
    const photos = [
      { url: "https://mofetapos.com/makea/muebles/1/1.webp", articleId: 1 },
      { url: "https://mofetapos.com/makea/muebles/1/2.jpg", articleId: 1 },
      { url: "https://mofetapos.com/makea/muebles/1/3.jpg", articleId: 1 },
      { url: "https://mofetapos.com/makea/muebles/1/4.jpg", articleId: 1 },
      { url: "https://mofetapos.com/makea/muebles/2/1.webp", articleId: 2 },
      { url: "https://mofetapos.com/makea/muebles/2/2.webp", articleId: 2 },
      { url: "https://mofetapos.com/makea/muebles/2/3.webp", articleId: 2 },
      { url: "https://mofetapos.com/makea/muebles/2/4.webp", articleId: 2 },
      { url: "https://mofetapos.com/makea/muebles/3/1.webp", articleId: 3 },
      { url: "https://mofetapos.com/makea/muebles/3/2.webp", articleId: 3 },
      { url: "https://mofetapos.com/makea/muebles/3/3.webp", articleId: 3 },
      { url: "https://mofetapos.com/makea/muebles/3/4.webp", articleId: 3 },
      { url: "https://mofetapos.com/makea/room/1/1.webp", articleId: 4 },
      { url: "https://mofetapos.com/makea/room/1/2.webp", articleId: 4 },
      { url: "https://mofetapos.com/makea/room/1/3.jpg", articleId: 4 },
      { url: "https://mofetapos.com/makea/room/2/1.webp", articleId: 5 },
      { url: "https://mofetapos.com/makea/room/2/2.webp", articleId: 5 },
      { url: "https://mofetapos.com/makea/room/2/3.jpg", articleId: 5 }
    ]
    for (const data of photos) {
      await this.prisma.photos.create({ data })
    }
  }

}