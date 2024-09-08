import { Field, InputType, Int } from "@nestjs/graphql";
import { IsInt, IsOptional, IsString, MaxLength, Min, MinLength } from "class-validator";

@InputType()
export class UpdateCarInput {
  @Field(() => String, { nullable: true })
  @IsString()
  @IsOptional()
  @MinLength(3)
  @MaxLength(100)
  name?: string;

  @Field(() => Int, { nullable: true })
  @IsOptional()
  @IsInt()
  @Min(1)
  price?: number;
}
