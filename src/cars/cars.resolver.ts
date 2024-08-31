import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CarsService } from './cars.service';
import { Car } from './entity/car.entity';
import { CreateCarInput } from './dto/inputs';

@Resolver()
export class CarsResolver {

  constructor (private readonly carsService: CarsService) {}

  @Query(() => [Car], { description: "Obtain all cars in the database", name: "getAllCars" })
  async getAllCars(): Promise<Car[]> {
    return await this.carsService.allCars();
  }

  @Query(() => Car, { name: "findCar", description: "Find one car by id" })
  async getCar(@Args("carId", { type: () => Int }) id: number): Promise<Car> {
    return await this.carsService.getCar(id);
  }

  @Mutation(() => Car, { description: "Create a new car", name: "createCar" })
  async postCar(@Args("createCarInput", { type: () =>  CreateCarInput }) createCarInput: CreateCarInput): Promise<Car> {
    return await this.carsService.postCar(createCarInput);
  }
}
