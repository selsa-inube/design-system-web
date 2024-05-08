import { inube } from "@inube/design-system";

function getTokenNameFromValue(tokenValue: string, theme?: typeof inube) {
  const palette = theme?.color?.palette || inube.color.palette;

  for (const category in palette) {
    if (Object.hasOwn(palette, category)) {
      const tokens = palette[category as keyof typeof palette];
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
