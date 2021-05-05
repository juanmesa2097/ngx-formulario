import { ControlType } from '../enums';
import { BaseControl } from './base-control.model';

export class CheckboxList extends BaseControl<
  string[],
  ControlType.CheckboxList
> {}
