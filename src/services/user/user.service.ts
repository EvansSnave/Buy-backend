import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { createWriteStream } from 'fs';
import { join } from 'path';
import { CreateUserInput } from 'src/dto/inputs';
import { User } from 'src/entity';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {

  constructor(@InjectRepository(User) private userRepository: Repository<User>) { }

  async create(userInput: CreateUserInput) {
    const { createReadStream, filename } = await userInput.profile;

    // Handle file upload (save the file to the filesystem)
    const filePath = `./src/upload/${filename}`;
    await new Promise((resolve, reject) => {
      createReadStream()
        .pipe(createWriteStream(join(process.cwd(), filePath)))
        .on('finish', resolve)
        .on('error', reject);
    });

    // Save user details in the database
    const newUser = this.userRepository.create({
      name: userInput.name,
      profile: filePath,  // Store the file path in the database
    });

    return this.userRepository.save(newUser);
  }
}
