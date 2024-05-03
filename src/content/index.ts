/* eslint-disable @typescript-eslint/no-explicit-any */
import { icon } from "./data/Icon";
import { avatar } from "./data/Avatar";
import { tag } from "./data/Tag";
import { text } from "./data/Text";
import { user } from "./data/User";
import { button } from "./inputs/Button";
import { label } from "./inputs/Label";
import { toggle } from "./inputs/Toggle";
import { fieldset } from "./inputs/Fieldset";
import { select } from "./inputs/Select";
import { datefield } from "./inputs/Datefield";
import { textarea } from "./inputs/Textarea";
import { textfield } from "./inputs/Textfield";
import { assisted } from "./feedback/Assisted";
import { countdownBar } from "./feedback/CountdownBar";
import { sectionMessage } from "./feedback/SectionMessage";
import { skeletonIcon } from "./feedback/SkeletonIcon";
import { skeletonLine } from "./feedback/SkeletonLine";
import { spinner } from "./feedback/Spinner";
import { breadcrumbs } from "./navigation/Breadcrumbs";
import { fullscreenNav } from "./navigation/FullscreenNav";
import { header } from "./navigation/Header";
import { nav } from "./navigation/Nav";
import { navLink } from "./navigation/NavLink";
import { tabs } from "./navigation/Tabs";
import { blanket } from "./utils/Blanket";
import { link } from "./navigation/Link";
import { stack } from "./layout/Stack";
import { grid } from "./layout/Grid";

interface Components {
  [key: string]: {
    description: string;
    name: string;
    example: any;
    props: any;
  };
}

const components: Components = {
  icon,
  avatar,
  tag,
  text,
  user,
  button,
  label,
  toggle,
  fieldset,
  select,
  stack,
  grid,
  datefield,
  textarea,
  textfield,
  assisted,
  countdownBar,
  sectionMessage,
  skeletonIcon,
  skeletonLine,
  spinner,
  breadcrumbs,
  fullscreenNav,
  header,
  nav,
  navLink,
  tabs,
  link,
  blanket,
};

export { components };
