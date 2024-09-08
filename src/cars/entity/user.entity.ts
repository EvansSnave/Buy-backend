import { Field, Int, ObjectType } from "@nestjs/graphql";
import { IsInt, IsNotEmpty, IsString, MaxLength, Min, MinLength } from "class-validator";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
@ObjectType()
export class User {
  @PrimaryGeneratedColumn()
  @Field(() => Int)
  @IsInt()
  @Min(1)
  id: number;

  @Column()
  @Field(() => String)
  @IsString()
  @IsNotEmpty()
  @MaxLength(100)
  @MinLength(4)
  name: string;
  profile: string;
}
