import { Breadcrumbs } from "@inubekit/breadcrumbs";
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
  frame: (
    <iframe
      src="https://codesandbox.io/embed/66sfh9?view=split&hidenavigation=0+%2B+preview&module=%2Fsrc%2FApp.tsx"
      style={{
        width: "100%",
        height: "500px",
        border: "0",
        borderRadius: "4px",
        overflow: "hidden",
      }}
      title="Avatar"
      sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
    />
  ),
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
