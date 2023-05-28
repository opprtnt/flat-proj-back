import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { GetFlatTableDto } from './dto/get-flat-table.dto';

@Injectable()
export class FlatTableService {
  constructor(private prisma: PrismaService) {}

  findAll({
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
    sort,
  }: GetFlatTableDto) {
    const skip = (+page - 1) * +size;
    const formatNumber = (value: string | undefined) =>
      value !== undefined ? +value : undefined;

    return this.prisma.flat.findMany({
      skip: skip,
      take: +size,
      orderBy: sort
        ? [
            {
              price: sort,
            },
          ]
        : undefined,
      where: {
        rooms: { gte: formatNumber(minRoom), lte: formatNumber(maxRoom) },
        floor: { gte: formatNumber(minFloor), lte: formatNumber(maxFloor) },
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
      },
    });
  }
}
