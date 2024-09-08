import { Module } from '@nestjs/common';
import { CarsResolver } from '../resolvers/car/cars.resolver';
import { CarsService } from '../services/car/cars.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Car } from '../entity';

@Module({
  imports: [TypeOrmModule.forFeature([Car])],
  providers: [CarsResolver, CarsService]
})
export class CarsModule {}
