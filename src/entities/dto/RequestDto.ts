import { IsNumber, IsPositive, Min } from 'class-validator';

/* eslint-disable prettier/prettier */
export class RequestDto {
  @IsNumber()
  @IsPositive()
  @Min(1)
  readonly inicio: number;
  @IsNumber()
  @IsPositive()
  @Min(1)
  readonly fin: number;
}
