import { IsBoolean, IsNumber, IsString } from 'class-validator';

export class StockDto {
  @IsBoolean()
  useStock: boolean;

  @IsNumber()
  value: number;

  @IsString()
  stockWording: string;
}
