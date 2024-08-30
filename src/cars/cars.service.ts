import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Car } from './entity/car.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CarsService {

  constructor(@InjectRepository(Car) private carRepository: Repository<Car>) {}

  allCars(): Promise<Car[]> {
    return this.carRepository.find();
  }
}
