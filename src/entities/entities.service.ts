/* eslint-disable prettier/prettier */
import { HttpService } from '@nestjs/axios';
import { BadRequestException, Injectable, Logger, NotFoundException } from '@nestjs/common';
import {  lastValueFrom, map } from 'rxjs';

import { EntitiesDto } from './dto/entities.dto';
import { RequestDto } from '../commons/dto/request.dto';

@Injectable()
export class EntitiesService {
  private readonly logger = new Logger('EntitiesService');
  constructor(private httpService: HttpService) {}
  async getEntities(
    request: RequestDto,
  ) {
    try {

      
      let index:number= request.inicio;
      if(index>request.fin)
      throw new BadRequestException("El codigo de inicio no debe ser mayor al codigo fin");
      const array:EntitiesDto[]=[]
      while(index<=request.fin){
        const apiUrl =
        process.env.URL_REST+index;
      
        const rta=  this.httpService.get(apiUrl).pipe(
          map((response) => {
            return response.data;
          }),
       
        );  
        const a=await lastValueFrom(rta)
        console.log(a)
        if(a.code==="F133"){
          throw new NotFoundException("La propiedad con el codigo " + index + " no existe")
        }
        array.push(a.data)
        index++;
      }
    
      console.log("aa ", array)
       return {
        data:{
          array
        }
       };
    } catch (error) {
      console.log(error);
      this.logger.error(error);
      return error.response;
    }
  }
}
