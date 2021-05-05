import { ControlType } from '../enums';

export interface BaseControlOptions<
  T extends string | string[] | number | boolean,
  K extends keyof typeof ControlType
> {
  key: string;
  value: T;
  order: number;
  label?: string;
  controlType?: K;
}
