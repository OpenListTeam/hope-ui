import { background } from "./background";
import { border } from "./border";
import { display } from "./display";
import { margin } from "./margin";
import { padding } from "./padding";
import { position } from "./position";
import { pseudoSelectors } from "./pseudo-selector";
import { radii } from "./radii";
import { shadow } from "./shadow";
import { size } from "./size";
import { typography } from "./typography";
import type { Utils } from "./type";

export const baseUtils: Utils & typeof pseudoSelectors = {
  ...background,
  ...border,
  ...display,
  ...position,
  ...radii,
  ...margin,
  ...padding,
  ...shadow,
  ...size,
  ...typography,
  ...pseudoSelectors,
} as const;
