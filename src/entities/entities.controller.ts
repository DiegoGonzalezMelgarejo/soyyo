import { Controller, Post } from '@nestjs/common';
import { Logger } from '@nestjs/common/services';
import { EntitiesService } from './entities.service';
import { Body } from '@nestjs/common/decorators';

import { RequestDto } from '../commons/dto/request.dto';
import { EntitiesDto } from './dto/entities.dto';
import { ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('Entities')
@Controller('entities')
export class EntitiesController {
  private readonly logger = new Logger('EntitiesController');
  constructor(private entitiesService: EntitiesService) {}

  @ApiResponse({ status: 201, description: 'get entities', type: EntitiesDto ,isArray: true }) 
  @ApiResponse({ status: 400, description: 'bad Request' })
  @Post()
  async getAll(@Body() request: RequestDto) {
    return await this.entitiesService.getEntities(request);
  }
}
