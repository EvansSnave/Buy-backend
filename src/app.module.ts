import { Module } from '@nestjs/common';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';
import { join } from 'path';
import { CarsModule } from './modules/cars.module';
import { UserModule } from './modules/user.module';
import { GraphQLUpload } from 'graphql-upload';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({ 
      driver: ApolloDriver, 
      introspection: true,
      autoSchemaFile: join(process.cwd(), "src/schema.gql"),
      playground: false,
      csrfPrevention: false,
    }),
    TypeOrmModule.forRoot({
      type: "sqlite",
      database: "database.sqlite",
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
    CarsModule,
    UserModule
  ],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: 'UPLOAD_SCALAR',
      useValue: GraphQLUpload, 
    }
  ],
})
export class AppModule {}
