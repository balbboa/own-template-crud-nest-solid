import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post
} from '@nestjs/common';
// DTO
import { ModelDTO } from './models.dto';
// Services
import { ModelsDeleteService } from './services/model.delete.service';
import { ModelsFindAllService } from './services/model.findAll.service';
import { ModelsFindOneService } from './services/model.findOne.service';
import { ModelsUpdateService } from './services/model.update.service';
import { ModelsCreateService } from './services/models.create.service';

@Controller({
  path: 'models',
  version: '1'
})
export class ModelController {
  constructor(
    private readonly createService: ModelsCreateService,
    private readonly updateService: ModelsUpdateService,
    private readonly deleteService: ModelsDeleteService,
    private readonly findOneService: ModelsFindOneService,
    private readonly findAllService: ModelsFindAllService
  ) {}

  @Post()
  async create(@Body() data: ModelDTO) {
    return this.createService.create(data);
  }

  @Get()
  async findAll() {
    return this.findAllService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: number) {
    return this.findOneService.findOne(Number(id));
  }

  @Patch(':id')
  async update(@Param('id') id: number, @Body() data: ModelDTO) {
    return this.updateService.update(Number(id), data);
  }

  @Delete(':id')
  async delete(@Param('id') id: number) {
    return this.deleteService.delete(Number(id));
  }
}
