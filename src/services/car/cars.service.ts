import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Car } from '../../entity';
import { Repository } from 'typeorm';
import { CreateCarInput, UpdateCarInput } from "../../dto/inputs";

@Injectable()
export class CarsService {

  constructor(@InjectRepository(Car) private carRepository: Repository<Car>) {}

  allCars(): Promise<Car[]> {
    return this.carRepository.find();
  }

  getCar(id: number): Promise<Car> {
    try {
      return this.carRepository.findOne({ where: { id } });
    }
    catch {
      throw new NotFoundException(`Car with id = ${id} was not found`);
    }
  }

  async postCar({ name, price }: CreateCarInput): Promise<Car> {
    try {
      const newCar = new Car();
      newCar.name = name;
      newCar.price = price;
      const insertCar = await this.carRepository.insert(newCar);
      newCar.id = (insertCar.identifiers[0] as { id: number }).id;
      return newCar;
    }
    catch {
      throw new NotFoundException(`Something went wrong when creating a new car.`);
    }
  }

  async updateCar({ name, price }: UpdateCarInput, carId: number): Promise<Car> {
    try {
      const carToUpdate: Car = await this.getCar(carId);
      if (name) carToUpdate.name = name;
      if (price) carToUpdate.price = price;
      return await this.carRepository.save(carToUpdate);
    }
    catch {
      throw new BadRequestException("Something went wrong when updating.");
    }
  }

  removeCar(carId: number): Boolean {
    try {
      this.carRepository.delete({ id: carId });
      return true;
    }
    catch {
      throw new NotFoundException(`Car with id = ${carId} was not found.`);
    }
  }
}
