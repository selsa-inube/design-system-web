import { MdToggleOff, MdModeEdit, MdDelete } from "react-icons/md";
import { Icon } from "@inube/design-system";

export const entries = [
  {
    id: "11",
    username: "David Leonardo Garzón",
    code: "LGARZON",
    userID: "1256545",
    position: "Credit Analyst",
  },
  {
    id: "12",
    username: "Angie Pinilla",
    code: "APINILLA",
    userID: "789654",
    position: "Adviser",
  },
  {
    id: "13",
    username: "Cristian Rojas",
    code: "CROJAS",
    userID: "258963",
    position: "Credit Analyst",
  },
  {
    id: "14",
    username: "Johan Nova",
    code: "JNOVA",
    userID: "589647",
    position: "Adviser",
  },
];

export const titlesMuck = [
  {
    id: "username",
    titleName: "Username",
    priority: 1,
  },
  {
    id: "code",
    titleName: "Code",
    priority: 2,
  },
  {
    id: "userID",
    titleName: "User Id",
    priority: 0,
  },
  {
    id: "position",
    titleName: "Position",
    priority: 3,
  },
];

export const actionsMuck = [
  {
    id: "Activate",
    actionName: "Activate",
    content: () => <Icon appearance="dark" icon={<MdToggleOff />} />,
    type: "secondary",
  },
  {
    id: "Edit",
    actionName: "Edit",
    content: () => <Icon appearance="dark" icon={<MdModeEdit />} />,
    type: "primary",
  },
  {
    id: "Deleten ",
    actionName: "Delete",
    content: () => <Icon appearance="dark" icon={<MdDelete />} />,
    type: "remove",
  },
];

export const breakPointsMuck = [
  { breakpoint: "(min-width: 1091px)", totalColumns: 4 },
  { breakpoint: "(max-width: 1090px)", totalColumns: 3 },
  { breakpoint: "(max-width: 980px)", totalColumns: 2 },
  { breakpoint: "(max-width: 850px)", totalColumns: 4 },
  { breakpoint: "(max-width: 680px)", totalColumns: 3 },
  { breakpoint: "(max-width: 550px)", totalColumns: 2 },
  { breakpoint: "(max-width: 360px)", totalColumns: 1 },
];
