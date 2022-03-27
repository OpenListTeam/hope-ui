import { css } from "@/styled-system/stitches.config";
import { toCssObject } from "@/styled-system/utils";

import { borderPropNames, BorderProps } from "./props/border";
import { colorPropNames, ColorProps } from "./props/color";
import { CSSProp, cssPropName } from "./props/css";
import { flexboxPropNames, FlexboxProps } from "./props/flexbox";
import { gridLayoutPropNames, GridLayoutProps } from "./props/grid";
import { interactivityPropNames, InteractivityProps } from "./props/interactivity";
import { layoutPropNames, LayoutProps } from "./props/layout";
import { marginPropNames, MarginProps } from "./props/margin";
import { paddingPropNames, PaddingProps } from "./props/padding";
import { positionPropNames, PositionProps } from "./props/position";
import { pseudoSelectorPropNames, PseudoSelectorProps } from "./props/pseudo-selector";
import { radiiPropNames, RadiiProps } from "./props/radii";
import { shadowPropNames, ShadowProps } from "./props/shadow";
import { sizePropNames, SizeProps } from "./props/size";
import { transformPropNames, TransformProps } from "./props/transform";
import { transitionPropNames, TransitionProps } from "./props/transition";
import { typographyPropNames, TypographyProps } from "./props/typography";
import { KeysOf, ResponsiveProps, SystemStyleObject } from "./types";

/**
 * All styled system props.
 */
export type StyleProps = ResponsiveProps<
  BorderProps &
    ColorProps &
    FlexboxProps &
    GridLayoutProps &
    InteractivityProps &
    LayoutProps &
    MarginProps &
    PaddingProps &
    PositionProps &
    RadiiProps &
    ShadowProps &
    SizeProps &
    TransformProps &
    TransitionProps &
    TypographyProps &
    PseudoSelectorProps
> &
  CSSProp;

export const stylePropNames: KeysOf<StyleProps> = {
  ...borderPropNames,
  ...colorPropNames,
  ...flexboxPropNames,
  ...gridLayoutPropNames,
  ...interactivityPropNames,
  ...layoutPropNames,
  ...marginPropNames,
  ...paddingPropNames,
  ...positionPropNames,
  ...radiiPropNames,
  ...shadowPropNames,
  ...sizePropNames,
  ...transformPropNames,
  ...transitionPropNames,
  ...typographyPropNames,
  ...pseudoSelectorPropNames,
  ...cssPropName,
};

/**
 * Base stitches css object of all Hope UI components.
 */
const styledSystemStyles = css({});

/**
 * Generate a css class based on style props and optional `baseStyles`.
 * `baseStyles` objects should be declared in the order of desired style override.
 */
export function createStyledSystemClass(props: StyleProps, baseStyles?: Array<SystemStyleObject | undefined>) {
  return styledSystemStyles({ css: toCssObject(props, baseStyles) });
}

/**
 * Take a props object and return only the keys that match a style prop.
 */
export function getUsedStylePropNames(props: Record<string | number, any>) {
  return Object.keys(props).filter(key => key in stylePropNames) as Array<keyof StyleProps>;
}
