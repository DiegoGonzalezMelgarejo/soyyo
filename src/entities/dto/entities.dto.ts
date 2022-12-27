import { ApiProperty } from '@nestjs/swagger';

export class EntitiesDto {
  @ApiProperty({ example: 1 })
  entityId: number;
  @ApiProperty({ example: 'aguila' })
  name: string;
  @ApiProperty({ example: '123' })
  identificationNumber: string;
  attributeValidator: null;
  @ApiProperty({ example: '2030-10-27' })
  expirationDate: Date;
  @ApiProperty({ example: 'Diego' })
  contactName: string;
  @ApiProperty({ example: 'diegoaliriogm@gmail.com' })
  contactMail: string;
  @ApiProperty({ example: '2030.1.1.1' })
  ipAddress: string;
  @ApiProperty({ example: 'logo' })
  logo: string;
  domain: object;
}
