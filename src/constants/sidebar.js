// Constants.
import { entityServiceInfo, formattedPrefixName } from "./services";

export const menus = [
  {
    group_name: "Dashboard",
    items: [
      {
        name: "Homepage",
        icon: "home",
        path: "/",
        isParent: true,
        submenus: [],
      },
      {
        name: formattedPrefixName + "s",

        icon: `${entityServiceInfo.prefix}`,
        path: "",
        isParent: true,
        submenus: [
          {
            name: `${formattedPrefixName} list`,
            icon: "list-alt",
            path: `/${entityServiceInfo.pluralPrefix}/all`,
          },
          {
            name: `Create ${entityServiceInfo.pluralPrefix}`,
            icon: "plus",
            path: `/${entityServiceInfo.pluralPrefix}/create`,
          },
        ],
      },
    ],
  },
  {
    group_name: "System",
    items: [
      {
        name: "Logout",
        icon: "sign-out-alt",
        path: "/logout",
        isParent: true,
        submenus: [],
      },
    ],
  },
];
