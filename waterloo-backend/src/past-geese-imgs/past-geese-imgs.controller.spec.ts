import { Test, TestingModule } from '@nestjs/testing';
import { PastGeeseImgsController } from './past-geese-imgs.controller';

describe('PastGeeseImgs Controller', () => {
  let controller: PastGeeseImgsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PastGeeseImgsController],
    }).compile();

    controller = module.get<PastGeeseImgsController>(PastGeeseImgsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
