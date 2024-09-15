import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/entity';
import { UserResolver } from 'src/resolvers/user/user.resolver';
import { UserService } from 'src/services/user/user.service';

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  providers: [UserResolver, UserService]
})
export class UserModule {}
