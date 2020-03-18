import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PastGeeseImgsController } from './past-geese-imgs/past-geese-imgs.controller';
import { PImageService } from './past-geese-imgs/past-geese-imgs.service';

@Module({
  imports: [],
  controllers: [AppController, PastGeeseImgsController],
  providers: [AppService, PImageService],
})
export class AppModule {}
