import { ControlType } from '../enums';
import { BaseControlOptions } from '../interfaces/base-control-options.interface';

export class BaseControl<
  T extends string | string[] | number | boolean,
  K extends keyof typeof ControlType
> implements BaseControlOptions<T, K> {
  key: string;
  value: T;
  order: number;
  label?: string;
  controlType: K;

  constructor(options: BaseControlOptions<T, K>) {
    this.key = options.key;
    this.value = options.value;
    this.order = options.order;
    this.label = options.label || '';
    this.controlType = options.controlType!;
  }
}
