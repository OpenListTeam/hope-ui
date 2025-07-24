import type { background } from "./background";
import type { border } from "./border";
import type { display } from "./display";
import type { margin } from "./margin";
import type { padding } from "./padding";
import type { position } from "./position";
import type { radii } from "./radii";
import type { shadow } from "./shadow";
import type { size } from "./size";
import type { typography } from "./typography";

export type Utils = typeof background &
  typeof border &
  typeof display &
  typeof position &
  typeof radii &
  typeof margin &
  typeof padding &
  typeof shadow &
  typeof size &
  typeof typography;

import type { CSS } from "@stitches/core/types/css-util";
import type { baseMedia } from "../media";
import type { baseThemeTokens } from "../tokens";
import type { baseThemeMap } from "../theme-map";

export type UtilsCSS = CSS<typeof baseMedia, typeof baseThemeTokens, typeof baseThemeMap, Utils>;
