import { Module } from '@nestjs/common';
import { EntitiesModule } from './entities/entities.module';
import { HttpModule } from '@nestjs/axios';

// eslint-disable-next-line prettier/prettier

@Module({
  imports: [HttpModule, EntitiesModule],
  controllers: [],
  providers: [],
  exports: [],
})
export class AppModule {}
