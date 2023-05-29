export class GetFlatTableDto {
  page: string;
  size: string;
  minRoom?: string;
  maxRoom?: string;
  minFloor?: string;
  maxFloor?: string;
  minPrice?: string;
  maxPrice?: string;
  maxAreaTotal?: string;
  minAreaTotal?: string;
  minAreaKitchen?: string;
  maxAreaKitchen?: string;
  minAreaLive?: string;
  maxAreaLive?: string;
  sortDir?: 'desc' | 'asc';
  sortColumn?: string;
}
