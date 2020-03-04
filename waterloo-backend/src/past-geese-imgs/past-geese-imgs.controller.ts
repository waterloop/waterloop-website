import { Controller, Get, Res, Param } from '@nestjs/common';
import { join } from 'path'



@Controller('imgs')
export class PastGeeseImgsController {
  @Get(':filename')
  get(
    @Res() res,
    @Param() params
  ) {
    res.sendFile(join(process.cwd(), `./public/${params.filename}`));
  }
}
