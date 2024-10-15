/* eslint-disable @typescript-eslint/no-explicit-any */
import { assisted } from "./feedback/Assisted";
import { avatar } from "./data/Avatar";
import { blanket } from "./utils/Blanket";
import { breadcrumbs } from "./navigation/Breadcrumbs";
import { button } from "./inputs/Button";
import { countdownBar } from "./feedback/CountdownBar";
import { datefield } from "./inputs/Datefield";
import { divider } from "./layout/Divider";
import { fieldset } from "./inputs/Fieldset";
import { flag } from "./feedback/Flag";
import { fullscreenNav } from "./navigation/FullscreenNav";
import { grid } from "./layout/Grid";
import { header } from "./navigation/Header";
import { icon } from "./data/Icon";
import { label } from "./inputs/Label";
import { link } from "./navigation/Link";
import { nav } from "./navigation/Nav";
import { navLink } from "./navigation/NavLink";
import { select } from "./inputs/Select";
import { skeletonIcon } from "./feedback/SkeletonIcon";
import { skeletonLine } from "./feedback/SkeletonLine";
import { spinner } from "./feedback/Spinner";
import { stack } from "./layout/Stack";
import { table } from "./data/Table";
import { tabs } from "./navigation/Tabs";
import { tag } from "./data/Tag";
import { text } from "./data/Text";
import { textarea } from "./inputs/Textarea";
import { toggle } from "./inputs/Toggle";
import { user } from "./data/User";
import { menu } from "./navigation/Menu";
import { progressBar } from "./feedback/ProgressBar";
import { monthpicker } from "./inputs/Monthpicker";
import { input } from "./inputs/Input";

interface Components {
  [key: string]: {
    description: string;
    installation?: string;
    name: string;
    example: any;
    props: any;
  };
}

const components: Components = {
  assisted,
  avatar,
  blanket,
  breadcrumbs,
  button,
  countdownBar,
  datefield,
  divider,
  fieldset,
  flag,
  fullscreenNav,
  grid,
  header,
  icon,
  input,
  label,
  link,
  nav,
  navLink,
  menu,
  monthpicker,
  select,
  skeletonIcon,
  skeletonLine,
  spinner,
  stack,
  progressBar,
  table,
  tabs,
  tag,
  text,
  textarea,
  toggle,
  user,
};

export { components };
