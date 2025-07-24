import type { CSS, ScaleValue } from "@stitches/core";

import type { BorderProps } from "./props/border";
import type { ColorProps } from "./props/color";
import type { CSSProp } from "./props/css";
import type { FlexboxProps } from "./props/flexbox";
import type { GridLayoutProps } from "./props/grid";
import type { LayoutProps } from "./props/layout";
import type { MarginProps } from "./props/margin";
import type { PaddingProps } from "./props/padding";
import type { PositionProps } from "./props/position";
import type { PseudoSelectorProps } from "./props/pseudo-selector";
import type { RadiiProps } from "./props/radii";
import type { ShadowProps } from "./props/shadow";
import type { SizeProps } from "./props/size";
import type { TypographyProps } from "./props/typography";
import type { baseTheme, config } from "./stitches.config";
import type { baseThemeTokens } from "./tokens";

/**
 * Hope UI - Stitches theme interface.
 */
export type HopeTheme = typeof baseTheme;

/**
 * Stitches theme config interface.
 */
export type StitchesThemeConfig = {
  [Scale in keyof typeof baseThemeTokens]?: {
    [Token in keyof typeof baseThemeTokens[Scale]]?: boolean | number | string;
  };
} & {
  [Scale in keyof typeof baseThemeTokens]?: {
    [Token in string]: boolean | number | string;
  };
} & {
  [Scale in string]: {
    [Token in string]: boolean | number | string;
  };
};

/**
 * Stitches config type.
 */
export type SystemConfig = typeof config;

/**
 * Media interface based on the stitches media.
 */
export type SystemMedia = typeof config.media;

/**
 * Style interface based on the stitches configuration.
 */
export type SystemStyleObject = CSS<SystemConfig>;

/**
 * Stitches config `colors` scale value.
 */
export type ColorScaleValue = ScaleValue<"colors", SystemConfig>;

/**
 * Stitches config `space` scale value.
 */
export type SpaceScaleValue = ScaleValue<"space", SystemConfig>;

/**
 * Stitches config `sizes` scale value.
 */
export type SizeScaleValue = ScaleValue<"sizes", SystemConfig>;

/**
 * Stitches config `fonts` scale value.
 */
export type FontScaleValue = ScaleValue<"fonts", SystemConfig>;

/**
 * Stitches config `fontSizes` scale value.
 */
export type FontSizeScaleValue = ScaleValue<"fontSizes", SystemConfig>;

/**
 * Stitches config `fontWeights` scale value.
 */
export type FontWeightScaleValue = ScaleValue<"fontWeights", SystemConfig>;

/**
 * Stitches config `letterSpacings` scale value.
 */
export type LetterSpacingScaleValue = ScaleValue<"letterSpacings", SystemConfig>;

/**
 * Stitches config `lineHeights` scale value.
 */
export type LineHeightScaleValue = ScaleValue<"lineHeights", SystemConfig>;

/**
 * Stitches config `radii` scale value.
 */
export type RadiiScaleValue = ScaleValue<"radii", SystemConfig>;

/**
 * Stitches config `shadows` scale value.
 */
export type ShadowScaleValue = ScaleValue<"shadows", SystemConfig>;

/**
 * Stitches config `zIndices` scale value.
 */
export type ZIndiceScaleValue = ScaleValue<"zIndices", SystemConfig>;

/**
 * Utility type to get an object containing all keys of another type
 */
export type KeysOf<T> = Record<keyof T, true>;

/**
 * Utility to prefix keys of a type.
 */
export type Prefixed<K extends string, T> = `${K}${Extract<T, boolean | number | string>}`;

/**
 * All system media css selectors
 */
export type SystemMediaCssSelector = Prefixed<"@", keyof SystemMedia>;

/**
 * All breakpoint css selectors
 */
export type BreakpointCssSelector =
  | "@initial"
  | Exclude<SystemMediaCssSelector, "@reduce-motion" | "@light" | "@dark">;

/**
 * Utility type to convert a given props type to a stitches responsive variant-like type.
 */
export type ResponsiveProps<Props> = {
  [K in keyof Props]:
    | Props[K]
    | {
        [KMedia in "@initial" | SystemMediaCssSelector]?: Props[K];
      };
};

/**
 * Utility type to convert a given value type to a stitches responsive variant-like type.
 */
export type ResponsiveValue<T> =
  | T
  | {
      [KMedia in "@initial" | SystemMediaCssSelector]?: T;
    };

/**
 * All style props types.
 */
export type StyleProps = ResponsiveProps<
  BorderProps &
    ColorProps &
    FlexboxProps &
    GridLayoutProps &
    LayoutProps &
    MarginProps &
    PaddingProps &
    PositionProps &
    RadiiProps &
    ShadowProps &
    SizeProps &
    TypographyProps &
    PseudoSelectorProps
> &
  CSSProp;
