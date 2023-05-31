import { Controller, Get, Query } from '@nestjs/common';
import { FlatTableService } from './flat-table.service';
import { GetFlatTableDto } from './dto/get-flat-table.dto';

@Controller('flat-table')
export class FlatTableController {
  constructor(private readonly flatTableService: FlatTableService) {}

  @Get()
  findAll(@Query() query: GetFlatTableDto) {
    return this.flatTableService.findAll(query);
  }

}
