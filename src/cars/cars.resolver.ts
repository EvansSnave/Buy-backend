import { Query, Resolver } from '@nestjs/graphql';

@Resolver()
export class CarsResolver {

  @Query(() => String)
  getAllCars() {
    return "hello"
  }
}
