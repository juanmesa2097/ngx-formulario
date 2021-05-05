import { ControlType } from '../enums';
import { BaseControl } from './base-control.model';

export class RadioButtonList extends BaseControl<
  string,
  ControlType.RadioButtonList
> {}
