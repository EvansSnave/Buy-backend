import { Query, Resolver } from '@nestjs/graphql';
import { CarsService } from './cars.service';
import { Car } from './entity/car.entity';

@Resolver()
export class CarsResolver {

  constructor (private readonly carsService: CarsService) {}

  @Query(() => [Car])
  async getAllCars(): Promise<Car[]> {
    const cars = await this.carsService.allCars();
    console.log(cars);
    return cars;
  }
}
