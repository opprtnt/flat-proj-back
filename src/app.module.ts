import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FlatTableModule } from './flat-table/flat-table.module';

@Module({
  imports: [FlatTableModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
