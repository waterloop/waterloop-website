
import { Injectable } from '@nestjs/common';

import { join } from 'path'
import {readdir} from 'fs'

import {pastGeeseData, PastGeeseData} from './past-geese.data';

@Injectable()
export class PImageService {
  private readonly imgs: string[] = [];

  constructor() {
    this.updateFiles()
  }

  /*
    Only returns the past geese that are currently known to be in public/pgimgs.

  */
  getImageNames(): PastGeeseData[] {
    return pastGeeseData.filter((value) => this.imgs.includes(value.filename));
  }


  /*
    updateFiles(): -- Will need to be called everytime that we need to change what is in the.
                      Updates the imgs[] array to contain a list of strings that corispond to the
                      images of the past geese that we will show.
  */
  updateFiles() {
    while ( this.imgs.length > 0) {
      this.imgs.pop()
    }
    const path = join(process.cwd(), `./public/pgimgs`)
    console.log(path)
    readdir(path, (err, files) => {
      files.forEach((file) => {
        this.imgs.push(file)
      })
    })
  }

  getImage(fileName: string) {
    return (join(process.cwd(), `./public/pgimgs/${fileName}`));
  }
}
