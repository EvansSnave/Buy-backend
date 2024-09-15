import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { CreateUserInput } from 'src/dto/inputs';
import { User } from 'src/entity';
import { UserService } from 'src/services/user/user.service';

@Resolver(() => User)
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  @Mutation(() => User)
  async createUser(@Args("createUserInput", { type: () => CreateUserInput }) createUserInput: CreateUserInput): Promise<User> {
    return await this.userService.create(createUserInput);
  }
}
