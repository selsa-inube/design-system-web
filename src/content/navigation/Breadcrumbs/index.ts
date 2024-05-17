import { Breadcrumbs } from "@inube/design-system";
import { inube } from "@inubekit/foundations";
import { buildTokenDescriptions } from "../../tokens/buildTokenDescriptions";

const breadcrumbsTokensConfig = {
  businessUnit: "inube",
  component: "breadcrumbs",
  include: [
    { id: "businessUnit", order: 1 },
    { id: "component", order: 2 },
    { id: "block", order: 3 },
    { id: "element", order: 4 },
    { id: "token", order: 5 },
  ],
};

const breadcrumbs = {
  description: "This component uses a filled primary icon for all applications",
  example: Breadcrumbs,
  name: "Breadcrumbs",
  props: {
    crumbs: [
      {
        path: "/home",
        label: "Inicio",
        id: "/home",
        isActive: false,
      },
      {
        path: "/home/users",
        label: "Usuarios",
        id: "/home/users",
        isActive: false,
      },
      {
        path: "/home/users/invitation",
        label: "Invitación",
        id: "/home/users/invitation",
        isActive: false,
      },
      {
        path: "/home/users/invitation/edition",
        label: "Edición",
        id: "/home/users/invitation/edition",
        isActive: false,
      },
      {
        path: "/home/users/invitation/branches",
        label: "Ramas",
        id: "/home/users/invitation/branches",
        isActive: false,
      },
      {
        path: "/home/users/invitation/Branches/city",
        label: "Ciudad",
        id: "/home/users/invitation/Branches/city",
        isActive: true,
      },
    ],
  },
  propTypes: {
    crumbs: {
      description:
        "An array of objects that contain the path, label, id, and isActive properties.",
      type: "IBreadcrumbsRoute[ ]",
    },
  },
  tokens: buildTokenDescriptions(inube.breadcrumbs, breadcrumbsTokensConfig),
};

export { breadcrumbs };
