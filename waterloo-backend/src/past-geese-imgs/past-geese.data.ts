/*
  This data file contains all of the information required for the past geese.
  This includes a short description, and the name of the corisponding image.

  name: the name of the past goose.
  filename: the name of the file, as it is in public/pgimgs
  desc: A description to be displayed below the Image in the past geese Component
*/

export interface PastGeeseData {
  name: string;
  filename: string;
  desc: string;
}

export const pastGeeseData: PastGeeseData[] = [
  {
    name: 'goose 1',
    filename: 'goose1.png',
    desc: 'Lorem Ipsum De Corum Est'
  },
  {
    name: 'goose 2',
    filename: 'goose2.png',
    desc: 'Lorem Ipsum De Corum Est'
  },
  {
    name: 'goose x',
    filename: 'goosex.png',
    desc: 'Lorem Ipsum De Corum Est'
  }
]
