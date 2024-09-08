import { Mutation, Resolver } from '@nestjs/graphql';
import { User } from 'src/entity';

@Resolver(() => User)
export class UserResolver {
  constructor() {}

  @Mutation(() => User)
  async uploadUserProfile() {

  }
}
