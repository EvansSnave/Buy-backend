import { Field, Int, ObjectType } from "@nestjs/graphql";
import { IsInt, IsNotEmpty, IsString, MaxLength, Min, MinLength } from "class-validator";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
@ObjectType()
export class Car {
  @PrimaryGeneratedColumn()
  @Field(() => Int, { description: "Car unique identifier" })
  @IsInt()
  @Min(1)
  id: number;

  @Column()
  @Field(() => String, { description: "Car's name" })
  @IsNotEmpty()
  @IsString()
  @MaxLength(100)
  @MinLength(3)
  name: string;
};
