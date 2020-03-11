import { Controller, Get, Res, Param } from '@nestjs/common';
import { join } from 'path'
import {readdir} from 'fs'



@Controller('pgimgs')
export class PastGeeseImgsController {
  @Get(':filename')
  getImage(
    @Res() res,
    @Param() params
  ) {
    res.sendFile(join(process.cwd(), `./public/${params.filename}`));
  }

  @Get()
  async getImageList() {
    const path = join(process.cwd(), `./public`)
    console.log(path)
    const response = {imgs: []}
    readdir(path, (erro, files) => {
      console.log(files)
      files.forEach((file) => {
        response.imgs.push(file)
        console.log(file)
      })
    })
    console.log(response)
    return response
  }
}
