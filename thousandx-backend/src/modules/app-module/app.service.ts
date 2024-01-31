import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    // throw 'GRRRRRRRRRRRRRRRRRR';
    return 'Hello World!';
  }
}
