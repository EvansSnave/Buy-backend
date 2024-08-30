import { Field, Int, ObjectType } from "@nestjs/graphql";
import { IsInt, IsNotEmpty, IsString, MaxLength, Min, MinLength } from "class-validator";
import { Column, PrimaryGeneratedColumn } from "typeorm";

@ObjectType()
export class Car {
  @Field(() => Int, { description: "Car unique identifier" })
  @PrimaryGeneratedColumn()
  @IsInt()
  @Min(1)
  id: number;

  @Field(() => String, { description: "Car's name" })
  @Column()
  @IsNotEmpty()
  @IsString()
  @MaxLength(100)
  @MinLength(3)
  name: string;
};
