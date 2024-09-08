import { Field, Int, ObjectType } from "@nestjs/graphql";
import { IsInt, Min } from "class-validator";
import { Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
@ObjectType()
export class Article {
  @PrimaryGeneratedColumn()
  @Field(() => Int)
  @IsInt()
  @Min(1)
  id: number;

  image: string;

  labels: string[];

  date: Date;

  title: string;

  author: string;

  article: string;
}
