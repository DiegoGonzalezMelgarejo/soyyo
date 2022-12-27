import { Test, TestingModule } from '@nestjs/testing';
import { EntitiesService } from '../../src/entities/entities.service';
import { HttpModule, HttpService } from '@nestjs/axios';
import { EntitiesModule } from '../../src/entities/entities.module';
import { AppModule } from '../../src/app.module';
import { AxiosResponse } from 'axios';
import { of } from 'rxjs/internal/observable/of';

describe('EntitiesService', () => {
  let service: EntitiesService;
  let http: HttpService;
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EntitiesService],
      imports: [AppModule, EntitiesModule, HttpModule],
    }).compile();

    service = module.get<EntitiesService>(EntitiesService);
    http = module.get<HttpService>(HttpService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should be success', () => {
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
    const response: AxiosResponse<any> = {
      data: {
        data: rta
      },
      headers: {},
      config: { url: 'http://localhost:3000/mockUrl' },
      status: 200,
      statusText: 'OK',
    };
   
    jest.spyOn(http, 'get').mockImplementationOnce(() => of(response));

    const res=service.getEntities({
      inicio: 1,
      fin: 2,
    });
    expect(res).not.toBeNull()
  });
});
