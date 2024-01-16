export interface IvaluesProps<S = undefined, T = undefined, W = undefined> {
  selectProps?: { [key: string]: string | S };
  textfieldProps?: { [key: string]: string | T };
  switchChecked?: { [key: string]: boolean | W };
}
