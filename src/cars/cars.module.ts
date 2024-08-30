import { Module } from '@nestjs/common';
import { CarsResolver } from './cars.resolver';

@Module({
  providers: [CarsResolver]
})
export class CarsModule {}
