import { Field, InputType } from "@nestjs/graphql";
import { IsNotEmpty, IsString, MaxLength, MinLength } from "class-validator";
import { GraphQLUpload, FileUpload } from 'graphql-upload';

@InputType()
export class CreateUserInput {
  @Field(() => String)
  @IsString()
  @IsNotEmpty()
  @MinLength(3)
  @MaxLength(100)
  name: string;

  @Field(() => GraphQLUpload)
  profile: Promise<FileUpload>;
}
