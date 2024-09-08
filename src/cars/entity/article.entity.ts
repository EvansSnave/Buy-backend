import { Field, Int, ObjectType } from "@nestjs/graphql";
import { IsInt, Min } from "class-validator";
import { Entity, PrimaryGeneratedColumn } from "typeorm";
import { Label } from "./label.entity";
import { User } from "./user.entity";

@Entity()
@ObjectType()
export class Article {
  @PrimaryGeneratedColumn()
  @Field(() => Int)
  @IsInt()
  @Min(1)
  id: number;

  thumbnail: string;

  labels: Label[];

  date: Date;

  title: string;

  author: User;

  article: string;
}
