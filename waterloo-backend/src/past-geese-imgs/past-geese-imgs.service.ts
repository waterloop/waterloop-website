
import { Injectable } from '@nestjs/common';

import { join } from 'path'
import {readdir} from 'fs'

@Injectable()
export class PImageService {
  private readonly imgs: string[] = [];

  constructor() {
    const path = join(process.cwd(), `./public`)
    console.log(path)
    readdir(path, (err, files) => {
      files.forEach((file) => {
        this.imgs.push(file)
      })
    })
  }

  getImageNames(): string[] {
    return this.imgs;
  }

  getImage(fileName: string) {
    return (join(process.cwd(), `./public/${fileName}`));
  }
}
