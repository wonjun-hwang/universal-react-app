import { Controller, Get, Res, Response } from "@nestjs/common";
import { AppService } from "./app.service";

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  root(@Res() res: any) {
    res.sendFile("index.html");
  }

  @Get("/posts")
  async getPosts(@Res() res: any) {
    res.json(await this.appService.getPosts());
  }
}
