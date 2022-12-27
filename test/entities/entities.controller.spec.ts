import { Test, TestingModule } from '@nestjs/testing';
import { AppModule } from '../../src/app.module';
import { EntitiesService } from '../../src/entities/entities.service';
import { EntitiesDto } from '../../src/entities/dto/entities.dto';
import { EntitiesModule } from '../../src/entities/entities.module';
import { EntitiesController } from '../../src/entities/entities.controller';
import { HttpModule } from '@nestjs/axios';

describe('EntitiesController', () => {
  let controller: EntitiesController;
  let entityService: EntitiesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EntitiesController],
      imports: [AppModule, EntitiesModule, HttpModule],
      providers: [EntitiesService],
    }).compile();

    controller = module.get<EntitiesController>(EntitiesController);
    entityService = module.get<EntitiesService>(EntitiesService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should success', async () => {
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    const rta = Promise.resolve([
      {
        entityId: 20,
        name: 'Tiwala Rent SAS',
        identificationNumber: '9016041601',
        attributeValidator: null,
        expirationDate: '2030-12-31',
        contactName: 'Maria Alejandra Saldarriaga Gomez',
        contactMail: 'masaldar@gmail.com',
        ipAddress: '',
        logo: null,
        domain: null,
      },
    ]);

    jest.spyOn(entityService, 'getEntities').mockImplementation(() => rta);

    let obj: any = {
      status: '',
      json: '',
    };
    const result = await controller.getAll({
      inicio: 1,
      fin: 2,
    });

    expect(result).toHaveLength(1)
  });
});
