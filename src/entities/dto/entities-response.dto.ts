import { EntitiesDto } from './entities.dto';

export interface EntitiesResponseDto {
  code: string;
  message: string;
  type: string;
  data: EntitiesDto;
  traceId: string;
}
