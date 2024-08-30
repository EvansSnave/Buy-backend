import { Module } from '@nestjs/common';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloServerPluginLandingPageLocalDefault } from '@apollo/server/plugin/landingPage/default';
import { join } from 'path';
import { CarsModule } from './cars/cars.module';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({ 
      driver: ApolloDriver, 
      autoSchemaFile: join(process.cwd(), "src/schema.gql"),
      playground: false,
      plugins: [
        ApolloServerPluginLandingPageLocalDefault()
      ],
    }),
    CarsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
