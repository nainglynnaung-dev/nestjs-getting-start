import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatControllerController } from './cat-controller/cat-controller.controller';
import { CatsService } from './cats/cats.service';

@Module({
  imports: [],
  controllers: [AppController, CatControllerController],
  providers: [AppService, CatsService],
})
export class AppModule {}
