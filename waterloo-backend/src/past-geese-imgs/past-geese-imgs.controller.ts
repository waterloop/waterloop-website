import { Controller, Get, Res, Param, Post } from '@nestjs/common';

import {PImageService} from './past-geese-imgs.service';
import {PastGeeseData} from './past-geese.data';

interface Geese {
  geese: PastGeeseData[]
}
@Controller('pgimgs')
export class PastGeeseImgsController {

  constructor(private imgService: PImageService){}

  @Get(':filename')
  getImage(
    @Res() res,
    @Param() params
  ) {
    res.sendFile(this.imgService.getImage(params.filename));
  }

  @Get()
  async getImageList(): Promise<Geese> {
    return {geese: this.imgService.getImageNames()};
  }


  /*
    The front-end does not currently call this endpoint. It is currently only accessable
    using some other tool to send the post Request.

    This endpoint should be hit any time there is changes made to the 'public/pgimgs' directory
  */
  @Post()
  updateImages(): string {
    this.imgService.updateFiles();
    return 'Files Have been updated'
  }
}
