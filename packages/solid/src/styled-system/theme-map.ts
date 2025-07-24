import { defaultThemeMap } from "@stitches/core";

export const baseThemeMap = {
  ...defaultThemeMap,
  borderWidth: "sizes",
  borderTopWidth: "sizes",
  borderRightWidth: "sizes",
  borderBottomWidth: "sizes",
  borderLeftWidth: "sizes",
  strokeWidth: "sizes",
} as const;
