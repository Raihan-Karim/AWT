import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Test } from "./entities/test.entity";
import { CreateTestDto, UpdateTestDto } from "./dto/test.dto";

@Injectable()
export class TestService {
  constructor(
    @InjectRepository(Test)
    private readonly testRepository: Repository<Test>,
  ) {}

  async createTest(dto: CreateTestDto) {
    const test = this.testRepository.create(dto);
    return await this.testRepository.save(test);
  }

  async getTests() {
    return await this.testRepository.find();
  }

  async getTestById(id: string) {
    const test = await this.testRepository.findOne({ where: { id } });
    if (!test) {
      throw new NotFoundException("Test not found.");
    }
    return test;
  }

  async updateTest(id: string, dto: UpdateTestDto) {
    const test = await this.getTestById(id);
    Object.assign(test, dto);
    return await this.testRepository.save(test);
  }

  async deleteTest(id: string) {
    const test = await this.getTestById(id);
    await this.testRepository.remove(test);
    return { message: "Test deleted successfully." };
  }
}