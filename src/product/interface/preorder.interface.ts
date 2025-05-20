import { Days } from "../enum/time-unit.enum";

export interface IPreOrder {
    isPreOrder: boolean;
    duration: number;
    unit: Days;
}