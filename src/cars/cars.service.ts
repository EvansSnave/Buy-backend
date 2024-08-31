import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Car } from './entity/car.entity';
import { Repository } from 'typeorm';
import { CreateCarInput } from './dto/inputs';

@Injectable()
export class CarsService {

  constructor(@InjectRepository(Car) private carRepository: Repository<Car>) {}

  allCars(): Promise<Car[]> {
    return this.carRepository.find();
  }

  async postCar(createCarInput: CreateCarInput): Promise<Car> {
    try {
      const newCar = new Car();
      newCar.name = createCarInput.name;
      newCar.price = createCarInput.price;
      const insertCar = await this.carRepository.insert(newCar);
      newCar.id = (insertCar.identifiers[0] as { id: number }).id;
      return newCar;
    }
    catch {
      throw new NotFoundException(`Something went wrong when creating a new car.`);
    }
  }
}
