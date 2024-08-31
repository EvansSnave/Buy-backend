import { Field, InputType, Int } from "@nestjs/graphql";
import { IsInt, IsNotEmpty, IsString, MaxLength, Min, MinLength } from "class-validator";

@InputType()
export class CreateCarInput {
  @Field(() => String)
  @IsString()
  @IsNotEmpty()
  @MinLength(3)
  @MaxLength(100)
  name: string;

  @Field(() => Int)
  @IsInt()
  @Min(1)
  price: number;
}
