import { Module } from '@nestjs/common';
import { CarsResolver } from 'src/resolvers/car/cars.resolver';
import { CarsService } from 'src/services/car/cars.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Car } from 'src/entity';

@Module({
  imports: [TypeOrmModule.forFeature([Car])],
  providers: [CarsResolver, CarsService]
})
export class CarsModule {}
