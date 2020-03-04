import { Controller, Get, Res, Param } from '@nestjs/common';
import { join } from 'path'



@Controller('past-geese-imgs/')
export class PastGeeseImgsController {
  @Get('/:fileName')
  get(
    @Res() res,
    @Param() fileName
  ) {
    if (fileName == 'goose1' || fileName == 'goose2' || fileName == 'goosex'){
      res.sendFile(join(process.cwd(), `./public/${fileName}.png`));
    }
  }
}
