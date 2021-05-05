import { ControlType } from '../enums';
import { Dictionary } from '../types/dictionary.type';
import { BaseControl } from './base-control.model';

export class SelectBox extends BaseControl<
  string | string[],
  ControlType.SelectBox
> {
  multiple?: boolean;
  options: Dictionary[];

  constructor(options: SelectBox) {
    super(options);
    this.options = options.options;
  }
}
