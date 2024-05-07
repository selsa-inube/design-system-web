import { inube } from "@inube/design-system";
interface ITitle {
  id: string;
  titleName: string;
  priority: number;
}

interface IEntry {
  id: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any;
}

interface IAction {
  id: string;
  actionName: string;
  content: (entry: IEntry) => React.ReactNode;
  mobilePriority?: boolean;
}

interface IBreakpoint {
  breakpoint: string;
  totalColumns: number;
}

const textAppearance = Object.keys(inube.color.text);
const strokeAppearance = Object.keys(inube.color.stroke);
const surfaceAppearance = Object.keys(inube.color.surface);

type TextAppearanceType = keyof typeof inube.color.text;
type StrokeAppearanceType = keyof typeof inube.color.stroke;
type SurfaceAppearanceType = keyof typeof inube.color.surface;

export { textAppearance, strokeAppearance, surfaceAppearance };
export type {
  IAction,
  IBreakpoint,
  IEntry,
  ITitle,
  TextAppearanceType,
  StrokeAppearanceType,
  SurfaceAppearanceType,
};
