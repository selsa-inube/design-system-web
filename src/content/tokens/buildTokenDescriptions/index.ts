/* eslint-disable @typescript-eslint/no-explicit-any */
import { getTokenNameFromValue } from "@pages/Components/DynamicComponent/Tabs/utils/getTokenNameFromValue";

function buildTokenDescriptions(
  tokenObject: any,
  config: any,
  path = [],
  parentPath = "",
) {
  const tokens: any = {};

  Object.keys(tokenObject).forEach((key) => {
    const currentPath: any = [...path, key];
    const fullPath = parentPath ? `${parentPath}.${key}` : key;

    if (
      typeof tokenObject[key] === "object" &&
      !Array.isArray(tokenObject[key])
    ) {
      const subTokens = buildTokenDescriptions(
        tokenObject[key],
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

      config.include.forEach((prop: string) => {
        if (prop === "appearance" && path[0]) {
          tokenDescription[prop] = path[0];
        } else if (prop === "modifier") {
          tokenDescription[prop] = key;
        } else if (prop === "value" && config.value) {
          tokenDescription[prop] = config.value;
        } else if (config[prop]) {
          tokenDescription[prop] = config[prop];
        }
      });

      tokenDescription.token = `${config.businessUnit}.${config.component}.${fullPath}`;
      tokenDescription.reference = `${
        config.businessUnit
      }.palette.${getTokenNameFromValue(tokenObject[key])
        ?.category}.${getTokenNameFromValue(tokenObject[key])?.tokenName}`;

      tokens[tokenName] = tokenDescription;
    }
  });

  return tokens;
}

export { buildTokenDescriptions };
