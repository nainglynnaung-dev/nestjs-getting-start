import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'How are you ,I\'hope you are well and happy';
  }
}
