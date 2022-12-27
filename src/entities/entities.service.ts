import { HttpService } from '@nestjs/axios';
import { Injectable, Logger } from '@nestjs/common';
import { Observable, map } from 'rxjs';
import { EntitiesResponseDto } from './dto/entities-response.dto';
import { AxiosResponse } from 'axios';
import { Response } from 'src/commons/dto/ResponseDto';
import { EntitiesDto } from './dto/entities.dto';
import { RequestDto } from './dto/RequestDto';

@Injectable()
export class EntitiesService {
  private readonly logger = new Logger('EntitiesService');
  constructor(private httpService: HttpService) {}
  getEntities(
    request: RequestDto,
  ): Observable<AxiosResponse<Response<EntitiesDto>>> {
    try {
      console.log(request.inicio);
      const apiUrl =
        'https://awovcw7p76.execute-api.us-east-1.amazonaws.com/dev/entity/v2.1/entities/3';
      return this.httpService.get(apiUrl).pipe(
        map((response) => {
          console.log('response.data.data  ', response.data.data);
          return response.data.data;
        }),
      );
    } catch (error) {
      console.log(error);
      this.logger.error(error);
      return error.response;
    }
  }
}
