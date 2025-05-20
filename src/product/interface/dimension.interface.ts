import { UnitMeasurement, UnitWeight } from "../enum/time-unit.enum";

export interface IDimension{
    weightValue:number;
    weightUnit: UnitWeight;
    dimensionValue:number;
    dimensionUnit: UnitMeasurement;
}