import { Module } from '@nestjs/common';
import { CarsResolver } from 'src/resolvers';
import { CarsService } from 'src/services';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Car } from 'src/entities';

@Module({
  imports: [TypeOrmModule.forFeature([Car])],
  providers: [CarsResolver, CarsService]
})
export class CarsModule {}
