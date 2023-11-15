import { Controller, Get } from '@nestjs/common';
// import { AppService } from './app.service';
import { DynamoDBService } from './app.service';

export class AppController {
  constructor(private readonly appService: DynamoDBService) {}

  // @Get()
  // getHello(): string {
  //   return this.appService.getHello();
  // }

  // @Get('goodBye')
  // getGoodBye(): string {
  //   return this.appService.getGoodBye();
  // }
}
