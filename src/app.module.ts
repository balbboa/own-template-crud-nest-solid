import { Module } from '@nestjs/common';
import { ModelsModule } from './api/v1/models/models.module';

@Module({
  imports: [ModelsModule],
  controllers: [],
  providers: []
})
export class AppModule {}
