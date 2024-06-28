/* eslint-disable @typescript-eslint/no-explicit-any */
import { inube } from "@inubekit/foundations";

function getTokenNameFromValue(tokenValue: string, theme?: typeof inube) {
  const palette = theme?.palette || inube.palette;

  for (const category in palette) {
    if (Object.prototype.hasOwnProperty.call(palette, category)) {
      const tokens: any = palette[category as keyof typeof palette];
      for (const tokenName in tokens) {
        if (tokens[tokenName] === tokenValue) {
          return { tokenName, category };
        }
      }
    }
  }

  return null;
}

export { getTokenNameFromValue };
