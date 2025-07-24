import { createStitches } from "@stitches/core";
import { baseMedia } from "./media";
import { baseUtils } from "./stitches-utils";
import { baseThemeMap } from "./theme-map";
import { baseThemeTokens } from "./tokens";
import type Stitches from "@stitches/core/types/stitches";

const stitches: Stitches<
  "hope",
  typeof baseMedia,
  typeof baseThemeTokens,
  typeof baseThemeMap,
  typeof baseUtils
> = createStitches({
  prefix: "hope",
  themeMap: baseThemeMap,
  theme: baseThemeTokens,
  media: baseMedia,
  utils: baseUtils,
}) as any;

export const baseTheme: typeof stitches.theme = stitches.theme;
export const css: typeof stitches.css = stitches.css;
export const globalCss: typeof stitches.globalCss = stitches.globalCss;
export const config: typeof stitches.config = stitches.config;
export const createTheme: typeof stitches.createTheme = stitches.createTheme;
export const getCssText: typeof stitches.getCssText = stitches.getCssText;
export const keyframes: typeof stitches.keyframes = stitches.keyframes;
