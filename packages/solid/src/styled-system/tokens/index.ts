import { commonColors, darkColors, lightColors } from "./colors";
import { radii } from "./radii";
import { darkShadows, shadows } from "./shadows";
import { sizes } from "./sizes";
import { space } from "./space";
import { fonts, fontSizes, fontWeights, letterSpacings, lineHeights } from "./typography";
import { zIndices } from "./z-indices";

/**
 * Base stitches theme tokens - light mode
 */
export const baseThemeTokens: {
  colors: typeof commonColors & typeof lightColors;
  space: typeof space;
  sizes: typeof sizes;
  fonts: typeof fonts;
  fontSizes: typeof fontSizes;
  fontWeights: typeof fontWeights;
  letterSpacings: typeof letterSpacings;
  lineHeights: typeof lineHeights;
  radii: typeof radii;
  shadows: typeof shadows;
  zIndices: typeof zIndices;
} = {
  colors: {
    ...commonColors,
    ...lightColors,
  },
  space,
  sizes,
  fonts,
  fontSizes,
  fontWeights,
  letterSpacings,
  lineHeights,
  radii,
  shadows,
  zIndices,
} as const;

/**
 * Base stitches theme tokens - dark mode
 */
export const baseDarkThemeTokens: {
  colors: typeof darkColors;
  shadows: typeof darkShadows;
} = {
  colors: darkColors,
  shadows: darkShadows,
} as const;
