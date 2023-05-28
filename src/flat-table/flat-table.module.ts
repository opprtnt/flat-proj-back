import { Module } from '@nestjs/common';
import { FlatTableService } from './flat-table.service';
import { FlatTableController } from './flat-table.controller';
import { PrismaService } from 'src/prisma.service';

@Module({
  controllers: [FlatTableController],
  providers: [FlatTableService, PrismaService],
})
export class FlatTableModule {}
