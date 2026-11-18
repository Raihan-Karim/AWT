import { Body, Controller, Delete, Get, Param, Patch, Post, ValidationPipe } from "@nestjs/common";
import { TestService } from "./test.service";
import { CreateTestDto, UpdateTestDto } from "./dto/test.dto";

@Controller("tests")
export class TestController {
  constructor(private readonly testService: TestService) {}

  @Post()
  async createTest(@Body(ValidationPipe) dto: CreateTestDto) {
    return await this.testService.createTest(dto);
  }

  @Get()
  async getTests() {
    return await this.testService.getTests();
  }

  @Get(":id")
  async getTestById(@Param("id") id: string) {
    return await this.testService.getTestById(id);
  }

  @Patch(":id")
  async updateTest(@Param("id") id: string, @Body() dto: UpdateTestDto) {
    return await this.testService.updateTest(id, dto);
  }

  @Delete(":id")
  async deleteTest(@Param("id") id: string) {
    return await this.testService.deleteTest(id);
  }
}