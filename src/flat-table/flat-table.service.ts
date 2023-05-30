import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { GetFlatTableDto } from './dto/get-flat-table.dto';

@Injectable()
export class FlatTableService {
  constructor(private prisma: PrismaService) {}

  async findAll({
    page,
    size,
    maxAreaKitchen,
    maxAreaLive,
    maxAreaTotal,
    maxFloor,
    maxPrice,
    maxRoom,
    minAreaKitchen,
    minAreaLive,
    minAreaTotal,
    minFloor,
    minPrice,
    minRoom,
    sortColumn,
    sortDir,
    floor,
  }: GetFlatTableDto) {
    const skip = size ? (+page - 1) * +size : undefined;
    const formatNumber = (value: string | undefined) =>
      value !== undefined ? +value : undefined;
    const query = {
      rooms: { gte: formatNumber(minRoom), lte: formatNumber(maxRoom) },
      floor:
        floor !== undefined
          ? +floor
          : { gte: formatNumber(minFloor), lte: formatNumber(maxFloor) },
      price: { gte: formatNumber(minPrice), lte: formatNumber(maxPrice) },
      area_total: {
        gte: formatNumber(minAreaTotal),
        lte: formatNumber(maxAreaTotal),
      },
      area_kitchen: {
        gte: formatNumber(minAreaKitchen),
        lte: formatNumber(maxAreaKitchen),
      },
      area_live: {
        gte: formatNumber(minAreaLive),
        lte: formatNumber(maxAreaLive),
      },
    };
    const orderBy =
      sortColumn && sortDir ? [{ [sortColumn]: sortDir }] : undefined;

    const [count, data] = await this.prisma.$transaction([
      this.prisma.flat.count({ where: query }),
      this.prisma.flat.findMany({
        skip: skip,
        take: size ? +size : undefined,
        orderBy: orderBy,
        where: query,
      }),
    ]);

    return {
      data: data,
      pagination: {
        total: count,
      },
    };
  }
}
