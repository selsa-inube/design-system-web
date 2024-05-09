/* eslint-disable @typescript-eslint/no-explicit-any */
import { getTokenNameFromValue } from "@pages/Components/DynamicComponent/Tabs/utils/getTokenNameFromValue";

interface TokenConfigItem {
  id: string;
  order: number;
}

interface TokenConfig {
  businessUnit: string;
  component: string;
  include: TokenConfigItem[];
  block?: string;
  element?: string;
  value?: string;
  [key: string]: any;
}

function buildTokenDescriptions(
  tokenObject: any,
  config: TokenConfig,
  path: string[] = [],
  parentPath = "",
) {
  const tokens: any = {};

  Object.keys(tokenObject).forEach((piece) => {
    const currentPath = [...path, piece];
    const fullPath = parentPath ? `${parentPath}.${piece}` : piece;

    if (
      typeof tokenObject[piece] === "object" &&
      !Array.isArray(tokenObject[piece])
    ) {
      const subTokens = buildTokenDescriptions(
        tokenObject[piece],
        config,
        currentPath,
        fullPath,
      );
      Object.assign(tokens, subTokens);
    } else {
      const tokenName = currentPath
        .map((p: string) => p.charAt(0).toUpperCase() + p.slice(1))
        .join("");

      const tokenDescription: any = {};
      const fullPathParts = fullPath.split(".");

      const sortedInclude = [...config.include].sort(
        (a, b) => a.order - b.order,
      );

      let pathIndex = 0;
      sortedInclude.forEach((item) => {
        switch (item.id) {
          case "businessUnit":
            tokenDescription[item.id] = config.businessUnit;
            break;
          case "component":
            tokenDescription[item.id] = config.component;
            break;
          case "token":
            tokenDescription[item.id] =
              `${config.businessUnit}.${config.component}.${fullPath}`;
            break;
          default:
            tokenDescription[item.id] =
              fullPathParts[pathIndex] || config[item.id];
            pathIndex++;
            break;
        }
      });

      const tokenDetails = getTokenNameFromValue(tokenObject[piece]);
      tokenDescription.reference = tokenDetails
        ? `${config.businessUnit}.palette.${tokenDetails.category}.${tokenDetails.tokenName}`
        : "";

      tokens[tokenName] = tokenDescription;
    }
  });

  return tokens;
}

export { buildTokenDescriptions };
