import { Module } from '@nestjs/common';
import { CarsResolver } from 'src/resolvers/cars.resolver';
import { CarsService } from 'src/services/cars.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Car } from 'src/entities';

@Module({
  imports: [TypeOrmModule.forFeature([Car])],
  providers: [CarsResolver, CarsService]
})
export class CarsModule {}
