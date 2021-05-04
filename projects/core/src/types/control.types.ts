export type BaseControl<T> = {
  key: string;
  value: T;
  label?: string;
  order?: number;
};

export enum ControlType {
  TextBox = 'TextBox',
  TextArea = 'TextArea',
  DropDown = 'DropDown',
  RadioButtons = 'RadioButtons',
  Checkbox = 'Checkbox',
}

export type ControlDefaults<T> = {
  controlType: T;
};

export type TextBoxControl = BaseControl<string> &
  ControlDefaults<ControlType.TextBox>;

export type TextAreaControl = BaseControl<string> &
  ControlDefaults<ControlType.TextArea>;

export type DropDownControl = BaseControl<string> &
  ControlDefaults<ControlType.DropDown> & {
    multiple: boolean;
  };

export type RadioButtonsControl = BaseControl<string> &
  ControlDefaults<ControlType.RadioButtons>;

export type CheckboxControl = BaseControl<string> &
  ControlDefaults<ControlType.Checkbox>;
