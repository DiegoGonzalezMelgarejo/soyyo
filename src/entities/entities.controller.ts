import { Controller, Post } from '@nestjs/common';
import { Logger } from '@nestjs/common/services';
import { EntitiesService } from './entities.service';
import { Res, Body } from '@nestjs/common/decorators';
import { HttpStatus } from '@nestjs/common/enums';
import { RequestDto } from './dto/RequestDto';

@Controller('entities')
export class EntitiesController {
  private readonly logger = new Logger('EntitiesController');
  constructor(private entitiesService: EntitiesService) {}

  @Post()
  getAll(@Body() request: RequestDto, @Res() res) {
    console.log(request.inicio);
    this.entitiesService.getEntities(request).subscribe({
      next: (response) => res.status(HttpStatus.OK).json(response),
      error: (e) => res.status(HttpStatus.BAD_REQUEST).json(...e.response),
    });
  }
}
