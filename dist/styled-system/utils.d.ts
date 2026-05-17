import { StyleProps } from "./system";
import { ResponsiveValue, StitchesThemeConfig, SystemStyleObject } from "./types";
/**
 * Return a valid Stitches CSS object based on the given style props.
 * `baseStyles` objects should be declared in the order of desired style override.
 */
export declare function toCssObject(props: StyleProps, baseStyles?: Array<SystemStyleObject | undefined>): SystemStyleObject;
/**
 * Create new stitches dark or light theme.
 * @return a merged theme object containing the base stitches theme and the override values.
 *
 * @internal
 */
export declare function extendBaseTheme<T extends StitchesThemeConfig>(type: "light" | "dark", themeConfig: T): string & {
    className: string;
    selector: string;
} & {
    colors: {
        readonly whiteAlpha1: import("@stitches/core/types/theme").Token<"whiteAlpha1", string, "colors", "hope">;
        readonly whiteAlpha2: import("@stitches/core/types/theme").Token<"whiteAlpha2", string, "colors", "hope">;
        readonly whiteAlpha3: import("@stitches/core/types/theme").Token<"whiteAlpha3", string, "colors", "hope">;
        readonly whiteAlpha4: import("@stitches/core/types/theme").Token<"whiteAlpha4", string, "colors", "hope">;
        readonly whiteAlpha5: import("@stitches/core/types/theme").Token<"whiteAlpha5", string, "colors", "hope">;
        readonly whiteAlpha6: import("@stitches/core/types/theme").Token<"whiteAlpha6", string, "colors", "hope">;
        readonly whiteAlpha7: import("@stitches/core/types/theme").Token<"whiteAlpha7", string, "colors", "hope">;
        readonly whiteAlpha8: import("@stitches/core/types/theme").Token<"whiteAlpha8", string, "colors", "hope">;
        readonly whiteAlpha9: import("@stitches/core/types/theme").Token<"whiteAlpha9", string, "colors", "hope">;
        readonly whiteAlpha10: import("@stitches/core/types/theme").Token<"whiteAlpha10", string, "colors", "hope">;
        readonly whiteAlpha11: import("@stitches/core/types/theme").Token<"whiteAlpha11", string, "colors", "hope">;
        readonly whiteAlpha12: import("@stitches/core/types/theme").Token<"whiteAlpha12", string, "colors", "hope">;
        readonly blackAlpha1: import("@stitches/core/types/theme").Token<"blackAlpha1", string, "colors", "hope">;
        readonly blackAlpha2: import("@stitches/core/types/theme").Token<"blackAlpha2", string, "colors", "hope">;
        readonly blackAlpha3: import("@stitches/core/types/theme").Token<"blackAlpha3", string, "colors", "hope">;
        readonly blackAlpha4: import("@stitches/core/types/theme").Token<"blackAlpha4", string, "colors", "hope">;
        readonly blackAlpha5: import("@stitches/core/types/theme").Token<"blackAlpha5", string, "colors", "hope">;
        readonly blackAlpha6: import("@stitches/core/types/theme").Token<"blackAlpha6", string, "colors", "hope">;
        readonly blackAlpha7: import("@stitches/core/types/theme").Token<"blackAlpha7", string, "colors", "hope">;
        readonly blackAlpha8: import("@stitches/core/types/theme").Token<"blackAlpha8", string, "colors", "hope">;
        readonly blackAlpha9: import("@stitches/core/types/theme").Token<"blackAlpha9", string, "colors", "hope">;
        readonly blackAlpha10: import("@stitches/core/types/theme").Token<"blackAlpha10", string, "colors", "hope">;
        readonly blackAlpha11: import("@stitches/core/types/theme").Token<"blackAlpha11", string, "colors", "hope">;
        readonly blackAlpha12: import("@stitches/core/types/theme").Token<"blackAlpha12", string, "colors", "hope">;
        readonly loContrast: import("@stitches/core/types/theme").Token<"loContrast", string, "colors", "hope">;
        readonly background: import("@stitches/core/types/theme").Token<"background", string, "colors", "hope">;
        readonly focusRing: import("@stitches/core/types/theme").Token<"focusRing", string, "colors", "hope">;
        readonly closeButtonHoverBackground: import("@stitches/core/types/theme").Token<"closeButtonHoverBackground", string, "colors", "hope">;
        readonly closeButtonActiveBackground: import("@stitches/core/types/theme").Token<"closeButtonActiveBackground", string, "colors", "hope">;
        readonly progressStripe: import("@stitches/core/types/theme").Token<"progressStripe", string, "colors", "hope">;
        readonly danger1: import("@stitches/core/types/theme").Token<"danger1", string, "colors", "hope">;
        readonly danger2: import("@stitches/core/types/theme").Token<"danger2", string, "colors", "hope">;
        readonly danger3: import("@stitches/core/types/theme").Token<"danger3", string, "colors", "hope">;
        readonly danger4: import("@stitches/core/types/theme").Token<"danger4", string, "colors", "hope">;
        readonly danger5: import("@stitches/core/types/theme").Token<"danger5", string, "colors", "hope">;
        readonly danger6: import("@stitches/core/types/theme").Token<"danger6", string, "colors", "hope">;
        readonly danger7: import("@stitches/core/types/theme").Token<"danger7", string, "colors", "hope">;
        readonly danger8: import("@stitches/core/types/theme").Token<"danger8", string, "colors", "hope">;
        readonly danger9: import("@stitches/core/types/theme").Token<"danger9", string, "colors", "hope">;
        readonly danger10: import("@stitches/core/types/theme").Token<"danger10", string, "colors", "hope">;
        readonly danger11: import("@stitches/core/types/theme").Token<"danger11", string, "colors", "hope">;
        readonly danger12: import("@stitches/core/types/theme").Token<"danger12", string, "colors", "hope">;
        readonly warning1: import("@stitches/core/types/theme").Token<"warning1", string, "colors", "hope">;
        readonly warning2: import("@stitches/core/types/theme").Token<"warning2", string, "colors", "hope">;
        readonly warning3: import("@stitches/core/types/theme").Token<"warning3", string, "colors", "hope">;
        readonly warning4: import("@stitches/core/types/theme").Token<"warning4", string, "colors", "hope">;
        readonly warning5: import("@stitches/core/types/theme").Token<"warning5", string, "colors", "hope">;
        readonly warning6: import("@stitches/core/types/theme").Token<"warning6", string, "colors", "hope">;
        readonly warning7: import("@stitches/core/types/theme").Token<"warning7", string, "colors", "hope">;
        readonly warning8: import("@stitches/core/types/theme").Token<"warning8", string, "colors", "hope">;
        readonly warning9: import("@stitches/core/types/theme").Token<"warning9", string, "colors", "hope">;
        readonly warning10: import("@stitches/core/types/theme").Token<"warning10", string, "colors", "hope">;
        readonly warning11: import("@stitches/core/types/theme").Token<"warning11", string, "colors", "hope">;
        readonly warning12: import("@stitches/core/types/theme").Token<"warning12", string, "colors", "hope">;
        readonly info1: import("@stitches/core/types/theme").Token<"info1", string, "colors", "hope">;
        readonly info2: import("@stitches/core/types/theme").Token<"info2", string, "colors", "hope">;
        readonly info3: import("@stitches/core/types/theme").Token<"info3", string, "colors", "hope">;
        readonly info4: import("@stitches/core/types/theme").Token<"info4", string, "colors", "hope">;
        readonly info5: import("@stitches/core/types/theme").Token<"info5", string, "colors", "hope">;
        readonly info6: import("@stitches/core/types/theme").Token<"info6", string, "colors", "hope">;
        readonly info7: import("@stitches/core/types/theme").Token<"info7", string, "colors", "hope">;
        readonly info8: import("@stitches/core/types/theme").Token<"info8", string, "colors", "hope">;
        readonly info9: import("@stitches/core/types/theme").Token<"info9", string, "colors", "hope">;
        readonly info10: import("@stitches/core/types/theme").Token<"info10", string, "colors", "hope">;
        readonly info11: import("@stitches/core/types/theme").Token<"info11", string, "colors", "hope">;
        readonly info12: import("@stitches/core/types/theme").Token<"info12", string, "colors", "hope">;
        readonly success1: import("@stitches/core/types/theme").Token<"success1", string, "colors", "hope">;
        readonly success2: import("@stitches/core/types/theme").Token<"success2", string, "colors", "hope">;
        readonly success3: import("@stitches/core/types/theme").Token<"success3", string, "colors", "hope">;
        readonly success4: import("@stitches/core/types/theme").Token<"success4", string, "colors", "hope">;
        readonly success5: import("@stitches/core/types/theme").Token<"success5", string, "colors", "hope">;
        readonly success6: import("@stitches/core/types/theme").Token<"success6", string, "colors", "hope">;
        readonly success7: import("@stitches/core/types/theme").Token<"success7", string, "colors", "hope">;
        readonly success8: import("@stitches/core/types/theme").Token<"success8", string, "colors", "hope">;
        readonly success9: import("@stitches/core/types/theme").Token<"success9", string, "colors", "hope">;
        readonly success10: import("@stitches/core/types/theme").Token<"success10", string, "colors", "hope">;
        readonly success11: import("@stitches/core/types/theme").Token<"success11", string, "colors", "hope">;
        readonly success12: import("@stitches/core/types/theme").Token<"success12", string, "colors", "hope">;
        readonly neutral1: import("@stitches/core/types/theme").Token<"neutral1", string, "colors", "hope">;
        readonly neutral2: import("@stitches/core/types/theme").Token<"neutral2", string, "colors", "hope">;
        readonly neutral3: import("@stitches/core/types/theme").Token<"neutral3", string, "colors", "hope">;
        readonly neutral4: import("@stitches/core/types/theme").Token<"neutral4", string, "colors", "hope">;
        readonly neutral5: import("@stitches/core/types/theme").Token<"neutral5", string, "colors", "hope">;
        readonly neutral6: import("@stitches/core/types/theme").Token<"neutral6", string, "colors", "hope">;
        readonly neutral7: import("@stitches/core/types/theme").Token<"neutral7", string, "colors", "hope">;
        readonly neutral8: import("@stitches/core/types/theme").Token<"neutral8", string, "colors", "hope">;
        readonly neutral9: import("@stitches/core/types/theme").Token<"neutral9", string, "colors", "hope">;
        readonly neutral10: import("@stitches/core/types/theme").Token<"neutral10", string, "colors", "hope">;
        readonly neutral11: import("@stitches/core/types/theme").Token<"neutral11", string, "colors", "hope">;
        readonly neutral12: import("@stitches/core/types/theme").Token<"neutral12", string, "colors", "hope">;
        readonly accent1: import("@stitches/core/types/theme").Token<"accent1", string, "colors", "hope">;
        readonly accent2: import("@stitches/core/types/theme").Token<"accent2", string, "colors", "hope">;
        readonly accent3: import("@stitches/core/types/theme").Token<"accent3", string, "colors", "hope">;
        readonly accent4: import("@stitches/core/types/theme").Token<"accent4", string, "colors", "hope">;
        readonly accent5: import("@stitches/core/types/theme").Token<"accent5", string, "colors", "hope">;
        readonly accent6: import("@stitches/core/types/theme").Token<"accent6", string, "colors", "hope">;
        readonly accent7: import("@stitches/core/types/theme").Token<"accent7", string, "colors", "hope">;
        readonly accent8: import("@stitches/core/types/theme").Token<"accent8", string, "colors", "hope">;
        readonly accent9: import("@stitches/core/types/theme").Token<"accent9", string, "colors", "hope">;
        readonly accent10: import("@stitches/core/types/theme").Token<"accent10", string, "colors", "hope">;
        readonly accent11: import("@stitches/core/types/theme").Token<"accent11", string, "colors", "hope">;
        readonly accent12: import("@stitches/core/types/theme").Token<"accent12", string, "colors", "hope">;
        readonly primary1: import("@stitches/core/types/theme").Token<"primary1", string, "colors", "hope">;
        readonly primary2: import("@stitches/core/types/theme").Token<"primary2", string, "colors", "hope">;
        readonly primary3: import("@stitches/core/types/theme").Token<"primary3", string, "colors", "hope">;
        readonly primary4: import("@stitches/core/types/theme").Token<"primary4", string, "colors", "hope">;
        readonly primary5: import("@stitches/core/types/theme").Token<"primary5", string, "colors", "hope">;
        readonly primary6: import("@stitches/core/types/theme").Token<"primary6", string, "colors", "hope">;
        readonly primary7: import("@stitches/core/types/theme").Token<"primary7", string, "colors", "hope">;
        readonly primary8: import("@stitches/core/types/theme").Token<"primary8", string, "colors", "hope">;
        readonly primary9: import("@stitches/core/types/theme").Token<"primary9", string, "colors", "hope">;
        readonly primary10: import("@stitches/core/types/theme").Token<"primary10", string, "colors", "hope">;
        readonly primary11: import("@stitches/core/types/theme").Token<"primary11", string, "colors", "hope">;
        readonly primary12: import("@stitches/core/types/theme").Token<"primary12", string, "colors", "hope">;
    };
    space: {
        readonly px: import("@stitches/core/types/theme").Token<"px", string, "space", "hope">;
        readonly "0_5": import("@stitches/core/types/theme").Token<"0_5", string, "space", "hope">;
        readonly 1: import("@stitches/core/types/theme").Token<"1", string, "space", "hope">;
        readonly "1_5": import("@stitches/core/types/theme").Token<"1_5", string, "space", "hope">;
        readonly 2: import("@stitches/core/types/theme").Token<"2", string, "space", "hope">;
        readonly "2_5": import("@stitches/core/types/theme").Token<"2_5", string, "space", "hope">;
        readonly 3: import("@stitches/core/types/theme").Token<"3", string, "space", "hope">;
        readonly "3_5": import("@stitches/core/types/theme").Token<"3_5", string, "space", "hope">;
        readonly 4: import("@stitches/core/types/theme").Token<"4", string, "space", "hope">;
        readonly 5: import("@stitches/core/types/theme").Token<"5", string, "space", "hope">;
        readonly 6: import("@stitches/core/types/theme").Token<"6", string, "space", "hope">;
        readonly 7: import("@stitches/core/types/theme").Token<"7", string, "space", "hope">;
        readonly 8: import("@stitches/core/types/theme").Token<"8", string, "space", "hope">;
        readonly 9: import("@stitches/core/types/theme").Token<"9", string, "space", "hope">;
        readonly 10: import("@stitches/core/types/theme").Token<"10", string, "space", "hope">;
        readonly 12: import("@stitches/core/types/theme").Token<"12", string, "space", "hope">;
        readonly 14: import("@stitches/core/types/theme").Token<"14", string, "space", "hope">;
        readonly 16: import("@stitches/core/types/theme").Token<"16", string, "space", "hope">;
        readonly 20: import("@stitches/core/types/theme").Token<"20", string, "space", "hope">;
        readonly 24: import("@stitches/core/types/theme").Token<"24", string, "space", "hope">;
        readonly 28: import("@stitches/core/types/theme").Token<"28", string, "space", "hope">;
        readonly 32: import("@stitches/core/types/theme").Token<"32", string, "space", "hope">;
        readonly 36: import("@stitches/core/types/theme").Token<"36", string, "space", "hope">;
        readonly 40: import("@stitches/core/types/theme").Token<"40", string, "space", "hope">;
        readonly 44: import("@stitches/core/types/theme").Token<"44", string, "space", "hope">;
        readonly 48: import("@stitches/core/types/theme").Token<"48", string, "space", "hope">;
        readonly 52: import("@stitches/core/types/theme").Token<"52", string, "space", "hope">;
        readonly 56: import("@stitches/core/types/theme").Token<"56", string, "space", "hope">;
        readonly 60: import("@stitches/core/types/theme").Token<"60", string, "space", "hope">;
        readonly 64: import("@stitches/core/types/theme").Token<"64", string, "space", "hope">;
        readonly 72: import("@stitches/core/types/theme").Token<"72", string, "space", "hope">;
        readonly 80: import("@stitches/core/types/theme").Token<"80", string, "space", "hope">;
        readonly 96: import("@stitches/core/types/theme").Token<"96", string, "space", "hope">;
    };
    sizes: {
        readonly prose: import("@stitches/core/types/theme").Token<"prose", string, "sizes", "hope">;
        readonly max: import("@stitches/core/types/theme").Token<"max", string, "sizes", "hope">;
        readonly min: import("@stitches/core/types/theme").Token<"min", string, "sizes", "hope">;
        readonly full: import("@stitches/core/types/theme").Token<"full", string, "sizes", "hope">;
        readonly screenW: import("@stitches/core/types/theme").Token<"screenW", string, "sizes", "hope">;
        readonly screenH: import("@stitches/core/types/theme").Token<"screenH", string, "sizes", "hope">;
        readonly xs: import("@stitches/core/types/theme").Token<"xs", string, "sizes", "hope">;
        readonly sm: import("@stitches/core/types/theme").Token<"sm", string, "sizes", "hope">;
        readonly md: import("@stitches/core/types/theme").Token<"md", string, "sizes", "hope">;
        readonly lg: import("@stitches/core/types/theme").Token<"lg", string, "sizes", "hope">;
        readonly xl: import("@stitches/core/types/theme").Token<"xl", string, "sizes", "hope">;
        readonly "2xl": import("@stitches/core/types/theme").Token<"2xl", string, "sizes", "hope">;
        readonly "3xl": import("@stitches/core/types/theme").Token<"3xl", string, "sizes", "hope">;
        readonly "4xl": import("@stitches/core/types/theme").Token<"4xl", string, "sizes", "hope">;
        readonly "5xl": import("@stitches/core/types/theme").Token<"5xl", string, "sizes", "hope">;
        readonly "6xl": import("@stitches/core/types/theme").Token<"6xl", string, "sizes", "hope">;
        readonly "7xl": import("@stitches/core/types/theme").Token<"7xl", string, "sizes", "hope">;
        readonly "8xl": import("@stitches/core/types/theme").Token<"8xl", string, "sizes", "hope">;
        readonly containerSm: import("@stitches/core/types/theme").Token<"containerSm", string, "sizes", "hope">;
        readonly containerMd: import("@stitches/core/types/theme").Token<"containerMd", string, "sizes", "hope">;
        readonly containerLg: import("@stitches/core/types/theme").Token<"containerLg", string, "sizes", "hope">;
        readonly containerXl: import("@stitches/core/types/theme").Token<"containerXl", string, "sizes", "hope">;
        readonly container2xl: import("@stitches/core/types/theme").Token<"container2xl", string, "sizes", "hope">;
        readonly px: import("@stitches/core/types/theme").Token<"px", string, "sizes", "hope">;
        readonly "0_5": import("@stitches/core/types/theme").Token<"0_5", string, "sizes", "hope">;
        readonly 1: import("@stitches/core/types/theme").Token<"1", string, "sizes", "hope">;
        readonly "1_5": import("@stitches/core/types/theme").Token<"1_5", string, "sizes", "hope">;
        readonly 2: import("@stitches/core/types/theme").Token<"2", string, "sizes", "hope">;
        readonly "2_5": import("@stitches/core/types/theme").Token<"2_5", string, "sizes", "hope">;
        readonly 3: import("@stitches/core/types/theme").Token<"3", string, "sizes", "hope">;
        readonly "3_5": import("@stitches/core/types/theme").Token<"3_5", string, "sizes", "hope">;
        readonly 4: import("@stitches/core/types/theme").Token<"4", string, "sizes", "hope">;
        readonly 5: import("@stitches/core/types/theme").Token<"5", string, "sizes", "hope">;
        readonly 6: import("@stitches/core/types/theme").Token<"6", string, "sizes", "hope">;
        readonly 7: import("@stitches/core/types/theme").Token<"7", string, "sizes", "hope">;
        readonly 8: import("@stitches/core/types/theme").Token<"8", string, "sizes", "hope">;
        readonly 9: import("@stitches/core/types/theme").Token<"9", string, "sizes", "hope">;
        readonly 10: import("@stitches/core/types/theme").Token<"10", string, "sizes", "hope">;
        readonly 12: import("@stitches/core/types/theme").Token<"12", string, "sizes", "hope">;
        readonly 14: import("@stitches/core/types/theme").Token<"14", string, "sizes", "hope">;
        readonly 16: import("@stitches/core/types/theme").Token<"16", string, "sizes", "hope">;
        readonly 20: import("@stitches/core/types/theme").Token<"20", string, "sizes", "hope">;
        readonly 24: import("@stitches/core/types/theme").Token<"24", string, "sizes", "hope">;
        readonly 28: import("@stitches/core/types/theme").Token<"28", string, "sizes", "hope">;
        readonly 32: import("@stitches/core/types/theme").Token<"32", string, "sizes", "hope">;
        readonly 36: import("@stitches/core/types/theme").Token<"36", string, "sizes", "hope">;
        readonly 40: import("@stitches/core/types/theme").Token<"40", string, "sizes", "hope">;
        readonly 44: import("@stitches/core/types/theme").Token<"44", string, "sizes", "hope">;
        readonly 48: import("@stitches/core/types/theme").Token<"48", string, "sizes", "hope">;
        readonly 52: import("@stitches/core/types/theme").Token<"52", string, "sizes", "hope">;
        readonly 56: import("@stitches/core/types/theme").Token<"56", string, "sizes", "hope">;
        readonly 60: import("@stitches/core/types/theme").Token<"60", string, "sizes", "hope">;
        readonly 64: import("@stitches/core/types/theme").Token<"64", string, "sizes", "hope">;
        readonly 72: import("@stitches/core/types/theme").Token<"72", string, "sizes", "hope">;
        readonly 80: import("@stitches/core/types/theme").Token<"80", string, "sizes", "hope">;
        readonly 96: import("@stitches/core/types/theme").Token<"96", string, "sizes", "hope">;
    };
    fonts: {
        readonly sans: import("@stitches/core/types/theme").Token<"sans", string, "fonts", "hope">;
        readonly serif: import("@stitches/core/types/theme").Token<"serif", string, "fonts", "hope">;
        readonly mono: import("@stitches/core/types/theme").Token<"mono", string, "fonts", "hope">;
    };
    fontSizes: {
        readonly "2xs": import("@stitches/core/types/theme").Token<"2xs", string, "fontSizes", "hope">;
        readonly xs: import("@stitches/core/types/theme").Token<"xs", string, "fontSizes", "hope">;
        readonly sm: import("@stitches/core/types/theme").Token<"sm", string, "fontSizes", "hope">;
        readonly base: import("@stitches/core/types/theme").Token<"base", string, "fontSizes", "hope">;
        readonly lg: import("@stitches/core/types/theme").Token<"lg", string, "fontSizes", "hope">;
        readonly xl: import("@stitches/core/types/theme").Token<"xl", string, "fontSizes", "hope">;
        readonly "2xl": import("@stitches/core/types/theme").Token<"2xl", string, "fontSizes", "hope">;
        readonly "3xl": import("@stitches/core/types/theme").Token<"3xl", string, "fontSizes", "hope">;
        readonly "4xl": import("@stitches/core/types/theme").Token<"4xl", string, "fontSizes", "hope">;
        readonly "5xl": import("@stitches/core/types/theme").Token<"5xl", string, "fontSizes", "hope">;
        readonly "6xl": import("@stitches/core/types/theme").Token<"6xl", string, "fontSizes", "hope">;
        readonly "7xl": import("@stitches/core/types/theme").Token<"7xl", string, "fontSizes", "hope">;
        readonly "8xl": import("@stitches/core/types/theme").Token<"8xl", string, "fontSizes", "hope">;
        readonly "9xl": import("@stitches/core/types/theme").Token<"9xl", string, "fontSizes", "hope">;
    };
    fontWeights: {
        readonly hairline: import("@stitches/core/types/theme").Token<"hairline", string, "fontWeights", "hope">;
        readonly thin: import("@stitches/core/types/theme").Token<"thin", string, "fontWeights", "hope">;
        readonly light: import("@stitches/core/types/theme").Token<"light", string, "fontWeights", "hope">;
        readonly normal: import("@stitches/core/types/theme").Token<"normal", string, "fontWeights", "hope">;
        readonly medium: import("@stitches/core/types/theme").Token<"medium", string, "fontWeights", "hope">;
        readonly semibold: import("@stitches/core/types/theme").Token<"semibold", string, "fontWeights", "hope">;
        readonly bold: import("@stitches/core/types/theme").Token<"bold", string, "fontWeights", "hope">;
        readonly extrabold: import("@stitches/core/types/theme").Token<"extrabold", string, "fontWeights", "hope">;
        readonly black: import("@stitches/core/types/theme").Token<"black", string, "fontWeights", "hope">;
    };
    letterSpacings: {
        readonly tighter: import("@stitches/core/types/theme").Token<"tighter", string, "letterSpacings", "hope">;
        readonly tight: import("@stitches/core/types/theme").Token<"tight", string, "letterSpacings", "hope">;
        readonly normal: import("@stitches/core/types/theme").Token<"normal", string, "letterSpacings", "hope">;
        readonly wide: import("@stitches/core/types/theme").Token<"wide", string, "letterSpacings", "hope">;
        readonly wider: import("@stitches/core/types/theme").Token<"wider", string, "letterSpacings", "hope">;
        readonly widest: import("@stitches/core/types/theme").Token<"widest", string, "letterSpacings", "hope">;
    };
    lineHeights: {
        readonly normal: import("@stitches/core/types/theme").Token<"normal", string, "lineHeights", "hope">;
        readonly none: import("@stitches/core/types/theme").Token<"none", string, "lineHeights", "hope">;
        readonly shorter: import("@stitches/core/types/theme").Token<"shorter", string, "lineHeights", "hope">;
        readonly short: import("@stitches/core/types/theme").Token<"short", string, "lineHeights", "hope">;
        readonly base: import("@stitches/core/types/theme").Token<"base", string, "lineHeights", "hope">;
        readonly tall: import("@stitches/core/types/theme").Token<"tall", string, "lineHeights", "hope">;
        readonly taller: import("@stitches/core/types/theme").Token<"taller", string, "lineHeights", "hope">;
        readonly 3: import("@stitches/core/types/theme").Token<"3", string, "lineHeights", "hope">;
        readonly 4: import("@stitches/core/types/theme").Token<"4", string, "lineHeights", "hope">;
        readonly 5: import("@stitches/core/types/theme").Token<"5", string, "lineHeights", "hope">;
        readonly 6: import("@stitches/core/types/theme").Token<"6", string, "lineHeights", "hope">;
        readonly 7: import("@stitches/core/types/theme").Token<"7", string, "lineHeights", "hope">;
        readonly 8: import("@stitches/core/types/theme").Token<"8", string, "lineHeights", "hope">;
        readonly 9: import("@stitches/core/types/theme").Token<"9", string, "lineHeights", "hope">;
        readonly 10: import("@stitches/core/types/theme").Token<"10", string, "lineHeights", "hope">;
    };
    radii: {
        readonly none: import("@stitches/core/types/theme").Token<"none", string, "radii", "hope">;
        readonly xs: import("@stitches/core/types/theme").Token<"xs", string, "radii", "hope">;
        readonly sm: import("@stitches/core/types/theme").Token<"sm", string, "radii", "hope">;
        readonly md: import("@stitches/core/types/theme").Token<"md", string, "radii", "hope">;
        readonly lg: import("@stitches/core/types/theme").Token<"lg", string, "radii", "hope">;
        readonly xl: import("@stitches/core/types/theme").Token<"xl", string, "radii", "hope">;
        readonly "2xl": import("@stitches/core/types/theme").Token<"2xl", string, "radii", "hope">;
        readonly "3xl": import("@stitches/core/types/theme").Token<"3xl", string, "radii", "hope">;
        readonly full: import("@stitches/core/types/theme").Token<"full", string, "radii", "hope">;
    };
    shadows: {
        readonly none: import("@stitches/core/types/theme").Token<"none", string, "shadows", "hope">;
        readonly xs: import("@stitches/core/types/theme").Token<"xs", string, "shadows", "hope">;
        readonly sm: import("@stitches/core/types/theme").Token<"sm", string, "shadows", "hope">;
        readonly md: import("@stitches/core/types/theme").Token<"md", string, "shadows", "hope">;
        readonly lg: import("@stitches/core/types/theme").Token<"lg", string, "shadows", "hope">;
        readonly xl: import("@stitches/core/types/theme").Token<"xl", string, "shadows", "hope">;
        readonly "2xl": import("@stitches/core/types/theme").Token<"2xl", string, "shadows", "hope">;
        readonly inner: import("@stitches/core/types/theme").Token<"inner", string, "shadows", "hope">;
        readonly outline: import("@stitches/core/types/theme").Token<"outline", string, "shadows", "hope">;
    };
    zIndices: {
        readonly hide: import("@stitches/core/types/theme").Token<"hide", string, "zIndices", "hope">;
        readonly auto: import("@stitches/core/types/theme").Token<"auto", string, "zIndices", "hope">;
        readonly base: import("@stitches/core/types/theme").Token<"base", string, "zIndices", "hope">;
        readonly docked: import("@stitches/core/types/theme").Token<"docked", string, "zIndices", "hope">;
        readonly sticky: import("@stitches/core/types/theme").Token<"sticky", string, "zIndices", "hope">;
        readonly banner: import("@stitches/core/types/theme").Token<"banner", string, "zIndices", "hope">;
        readonly overlay: import("@stitches/core/types/theme").Token<"overlay", string, "zIndices", "hope">;
        readonly modal: import("@stitches/core/types/theme").Token<"modal", string, "zIndices", "hope">;
        readonly dropdown: import("@stitches/core/types/theme").Token<"dropdown", string, "zIndices", "hope">;
        readonly popover: import("@stitches/core/types/theme").Token<"popover", string, "zIndices", "hope">;
        readonly tooltip: import("@stitches/core/types/theme").Token<"tooltip", string, "zIndices", "hope">;
        readonly skipLink: import("@stitches/core/types/theme").Token<"skipLink", string, "zIndices", "hope">;
        readonly notification: import("@stitches/core/types/theme").Token<"notification", string, "zIndices", "hope">;
    };
} & {
    className: string;
    selector: string;
} & import("@stitches/core/types/stitches").ThemeTokens<T, "hope">;
/**
 * Map a responsive value to a new one
 */
export declare function mapResponsive(prop: ResponsiveValue<any>, mapper: (val: any) => any): any;
/**
 * Return the css variable associated with the given token if exists, or the token itself otherwise.
 *
 * @example
 * "$primary9" -> "var(--hope-colors-primary9)"
 * "tomato" -> "tomato"
 */
export declare function colorTokenToCssVar(token: string): string;
/**
 * Visually hide an element without hiding it from screen readers.
 */
export declare const visuallyHiddenStyles: import("@stitches/core/types/styled-component").CssComponent<never, {}, {
    readonly sm: "(min-width: 640px)";
    readonly md: "(min-width: 768px)";
    readonly lg: "(min-width: 1024px)";
    readonly xl: "(min-width: 1280px)";
    readonly "2xl": "(min-width: 1536px)";
    readonly "reduce-motion": "(prefers-reduced-motion: reduce)";
    readonly light: "(prefers-color-scheme: light)";
    readonly dark: "(prefers-color-scheme: dark)";
}, import("@stitches/core/types/css-util").CSS<{
    readonly sm: "(min-width: 640px)";
    readonly md: "(min-width: 768px)";
    readonly lg: "(min-width: 1024px)";
    readonly xl: "(min-width: 1280px)";
    readonly "2xl": "(min-width: 1536px)";
    readonly "reduce-motion": "(prefers-reduced-motion: reduce)";
    readonly light: "(prefers-color-scheme: light)";
    readonly dark: "(prefers-color-scheme: dark)";
}, {
    colors: {
        readonly whiteAlpha1: "#ffffff00";
        readonly whiteAlpha2: "#ffffff03";
        readonly whiteAlpha3: "#ffffff09";
        readonly whiteAlpha4: "#ffffff0e";
        readonly whiteAlpha5: "#ffffff16";
        readonly whiteAlpha6: "#ffffff20";
        readonly whiteAlpha7: "#ffffff2d";
        readonly whiteAlpha8: "#ffffff3f";
        readonly whiteAlpha9: "#ffffff62";
        readonly whiteAlpha10: "#ffffff72";
        readonly whiteAlpha11: "#ffffff97";
        readonly whiteAlpha12: "#ffffffeb";
        readonly blackAlpha1: "#00000003";
        readonly blackAlpha2: "#00000007";
        readonly blackAlpha3: "#0000000c";
        readonly blackAlpha4: "#00000012";
        readonly blackAlpha5: "#00000017";
        readonly blackAlpha6: "#0000001d";
        readonly blackAlpha7: "#00000024";
        readonly blackAlpha8: "#00000038";
        readonly blackAlpha9: "#00000070";
        readonly blackAlpha10: "#0000007a";
        readonly blackAlpha11: "#00000090";
        readonly blackAlpha12: "#000000e8";
    } & {
        readonly loContrast: "white";
        readonly background: "$loContrast";
        readonly focusRing: "#96c7f2";
        readonly closeButtonHoverBackground: "$blackAlpha4";
        readonly closeButtonActiveBackground: "$blackAlpha5";
        readonly progressStripe: "$whiteAlpha6";
        readonly danger1: "#fffcfc";
        readonly danger2: "#fff8f8";
        readonly danger3: "#ffefef";
        readonly danger4: "#ffe5e5";
        readonly danger5: "#fdd8d8";
        readonly danger6: "#f9c6c6";
        readonly danger7: "#f3aeaf";
        readonly danger8: "#eb9091";
        readonly danger9: "#e5484d";
        readonly danger10: "#dc3d43";
        readonly danger11: "#cd2b31";
        readonly danger12: "#381316";
        readonly warning1: "#fefdfb";
        readonly warning2: "#fff9ed";
        readonly warning3: "#fff4d5";
        readonly warning4: "#ffecbc";
        readonly warning5: "#ffe3a2";
        readonly warning6: "#ffd386";
        readonly warning7: "#f3ba63";
        readonly warning8: "#ee9d2b";
        readonly warning9: "#ffb224";
        readonly warning10: "#ffa01c";
        readonly warning11: "#ad5700";
        readonly warning12: "#4e2009";
        readonly info1: "#fbfdff";
        readonly info2: "#f5faff";
        readonly info3: "#edf6ff";
        readonly info4: "#e1f0ff";
        readonly info5: "#cee7fe";
        readonly info6: "#b7d9f8";
        readonly info7: "#96c7f2";
        readonly info8: "#5eb0ef";
        readonly info9: "#0091ff";
        readonly info10: "#0081f1";
        readonly info11: "#006adc";
        readonly info12: "#00254d";
        readonly success1: "#fbfefc";
        readonly success2: "#f2fcf5";
        readonly success3: "#e9f9ee";
        readonly success4: "#ddf3e4";
        readonly success5: "#ccebd7";
        readonly success6: "#b4dfc4";
        readonly success7: "#92ceac";
        readonly success8: "#5bb98c";
        readonly success9: "#30a46c";
        readonly success10: "#299764";
        readonly success11: "#18794e";
        readonly success12: "#153226";
        readonly neutral1: "#fbfcfd";
        readonly neutral2: "#f8f9fa";
        readonly neutral3: "#f1f3f5";
        readonly neutral4: "#eceef0";
        readonly neutral5: "#e6e8eb";
        readonly neutral6: "#dfe3e6";
        readonly neutral7: "#d7dbdf";
        readonly neutral8: "#c1c8cd";
        readonly neutral9: "#889096";
        readonly neutral10: "#7e868c";
        readonly neutral11: "#687076";
        readonly neutral12: "#11181c";
        readonly accent1: "#fdfcfe";
        readonly accent2: "#fbfaff";
        readonly accent3: "#f5f2ff";
        readonly accent4: "#ede9fe";
        readonly accent5: "#e4defc";
        readonly accent6: "#d7cff9";
        /**
         * Destination object containing all responsive styles grouped by `@media` rule.
         */
        readonly accent7: "#c4b8f3";
        readonly accent8: "#aa99ec";
        readonly accent9: "#6e56cf";
        readonly accent10: "#644fc1";
        readonly accent11: "#5746af";
        readonly accent12: "#20134b";
        readonly primary1: "#fafdfe";
        readonly primary2: "#f2fcfd";
        readonly primary3: "#e7f9fb";
        readonly primary4: "#d8f3f6";
        readonly primary5: "#c4eaef";
        readonly primary6: "#aadee6";
        readonly primary7: "#84cdda";
        readonly primary8: "#3db9cf";
        readonly primary9: "#05a2c2";
        readonly primary10: "#0894b3";
        readonly primary11: "#0c7792";
        readonly primary12: "#04313c";
    };
    space: {
        readonly px: "1px";
        readonly "0_5": "0.125rem";
        readonly "1": "0.25rem";
        readonly "1_5": "0.375rem";
        readonly "2": "0.5rem";
        readonly "2_5": "0.625rem";
        readonly "3": "0.75rem";
        readonly "3_5": "0.875rem";
        readonly "4": "1rem";
        readonly "5": "1.25rem";
        readonly "6": "1.5rem";
        readonly "7": "1.75rem";
        readonly "8": "2rem";
        readonly "9": "2.25rem";
        readonly "10": "2.5rem";
        readonly "12": "3rem";
        readonly "14": "3.5rem";
        readonly "16": "4rem";
        readonly "20": "5rem";
        readonly "24": "6rem";
        readonly "28": "7rem";
        readonly "32": "8rem"; /**
         * Merge a source SystemStyleObject to both normal and responsive destination SystemStyleObject.
         * This function mutate the `destination` objects.
         */
        readonly "36": "9rem";
        readonly "40": "10rem";
        readonly "44": "11rem";
        readonly "48": "12rem";
        readonly "52": "13rem";
        readonly "56": "14rem";
        readonly "60": "15rem";
        readonly "64": "16rem";
        readonly "72": "18rem";
        readonly "80": "20rem";
        readonly "96": "24rem";
    };
    sizes: {
        readonly prose: "65ch";
        readonly max: "max-content";
        readonly min: "min-content";
        readonly full: "100%";
        readonly screenW: "100vw";
        readonly screenH: "100vh";
        readonly xs: "20rem";
        readonly sm: "24rem";
        readonly md: "28rem";
        readonly lg: "32rem";
        readonly xl: "36rem";
        readonly "2xl": "42rem";
        readonly "3xl": "48rem";
        readonly "4xl": "56rem";
        readonly "5xl": "64rem";
        readonly "6xl": "72rem";
        readonly "7xl": "80rem";
        readonly "8xl": "90rem";
        readonly containerSm: "640px";
        readonly containerMd: "768px";
        readonly containerLg: "1024px";
        readonly containerXl: "1280px";
        readonly container2xl: "1536px";
        readonly px: "1px";
        readonly "0_5": "0.125rem";
        readonly "1": "0.25rem";
        readonly "1_5": "0.375rem";
        readonly "2": "0.5rem";
        readonly "2_5": "0.625rem";
        readonly "3": "0.75rem";
        readonly "3_5": "0.875rem";
        readonly "4": "1rem";
        readonly "5": "1.25rem";
        readonly "6": "1.5rem";
        readonly "7": "1.75rem";
        readonly "8": "2rem";
        readonly "9": "2.25rem";
        readonly "10": "2.5rem";
        readonly "12": "3rem";
        readonly "14": "3.5rem";
        readonly "16": "4rem";
        readonly "20": "5rem";
        readonly "24": "6rem";
        readonly "28": "7rem";
        readonly "32": "8rem"; /**
         * Merge a source SystemStyleObject to both normal and responsive destination SystemStyleObject.
         * This function mutate the `destination` objects.
         */
        readonly "36": "9rem";
        readonly "40": "10rem";
        readonly "44": "11rem";
        readonly "48": "12rem";
        readonly "52": "13rem";
        readonly "56": "14rem";
        readonly "60": "15rem";
        readonly "64": "16rem";
        readonly "72": "18rem";
        readonly "80": "20rem";
        readonly "96": "24rem";
    };
    fonts: {
        readonly sans: "ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\",\"Noto Color Emoji\"";
        readonly serif: "ui-serif, Georgia, Cambria, \"Times New Roman\", Times, serif";
        readonly mono: "ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, \"Liberation Mono\", \"Courier New\", monospace";
    };
    fontSizes: {
        readonly "2xs": "0.625rem";
        readonly xs: "0.75rem";
        readonly sm: "0.875rem";
        readonly base: "1rem";
        readonly lg: "1.125rem";
        readonly xl: "1.25rem";
        readonly "2xl": "1.5rem";
        readonly "3xl": "1.875rem";
        readonly "4xl": "2.25rem";
        readonly "5xl": "3rem";
        readonly "6xl": "3.75rem";
        readonly "7xl": "4.5rem";
        readonly "8xl": "6rem";
        readonly "9xl": "8rem";
    };
    fontWeights: {
        readonly hairline: 100;
        readonly thin: 200;
        readonly light: 300;
        readonly normal: 400;
        readonly medium: 500;
        readonly semibold: 600;
        readonly bold: 700;
        readonly extrabold: 800;
        readonly black: 900;
    };
    letterSpacings: {
        readonly tighter: "-0.05em";
        readonly tight: "-0.025em";
        readonly normal: "0";
        readonly wide: "0.025em";
        readonly wider: "0.05em";
        readonly widest: "0.1em";
    };
    lineHeights: {
        readonly normal: "normal";
        readonly none: 1;
        readonly shorter: 1.25;
        readonly short: 1.375;
        readonly base: 1.5;
        readonly tall: 1.625;
        readonly taller: 2;
        readonly "3": ".75rem";
        readonly "4": "1rem";
        readonly "5": "1.25rem";
        readonly "6": "1.5rem";
        readonly "7": "1.75rem";
        readonly "8": "2rem";
        readonly "9": "2.25rem";
        readonly "10": "2.5rem";
    };
    radii: {
        readonly none: "0";
        readonly xs: "0.125rem";
        readonly sm: "0.25rem";
        readonly md: "0.375rem";
        readonly lg: "0.5rem";
        readonly xl: "0.75rem";
        readonly "2xl": "1rem";
        readonly "3xl": "1.5rem";
        readonly full: "9999px";
    };
    shadows: {
        readonly none: "0 0 #0000";
        readonly xs: "0 1px 2px 0 rgb(0 0 0 / 0.05)";
        readonly sm: "0 1px 3px 0 rgb(0 0 0 / 0.09), 0 1px 2px -1px rgb(0 0 0 / 0.1)";
        readonly md: "0 4px 6px -1px rgb(0 0 0 / 0.09), 0 2px 4px -2px rgb(0 0 0 / 0.1)";
        readonly lg: "0 10px 15px -3px rgb(0 0 0 / 0.09), 0 4px 6px -4px rgb(0 0 0 / 0.1)";
        readonly xl: "0 20px 25px -5px rgb(0 0 0 / 0.09), 0 8px 10px -6px rgb(0 0 0 / 0.1)";
        readonly "2xl": "0 25px 50px -12px rgb(0 0 0 / 0.24)";
        readonly inner: "inset 0 2px 4px 0 rgb(0 0 0 / 0.06)";
        readonly outline: "0 0 0 3px $colors$focusRing";
    };
    zIndices: {
        readonly hide: -1;
        readonly auto: "auto";
        readonly base: 0;
        readonly docked: 10;
        readonly sticky: 1000;
        readonly banner: 1100;
        readonly overlay: 1200;
        readonly modal: 1300;
        readonly dropdown: 1400;
        readonly popover: 1500;
        readonly tooltip: 1600;
        readonly skipLink: 1700;
        readonly notification: 1800;
    };
}, {
    readonly borderWidth: "sizes";
    readonly borderTopWidth: "sizes";
    readonly borderRightWidth: "sizes";
    readonly borderBottomWidth: "sizes";
    readonly borderLeftWidth: "sizes";
    readonly strokeWidth: "sizes";
    readonly gap: "space";
    readonly gridGap: "space";
    readonly columnGap: "space";
    readonly gridColumnGap: "space";
    readonly rowGap: "space";
    readonly gridRowGap: "space";
    readonly inset: "space";
    readonly insetBlock: "space";
    readonly insetBlockEnd: "space";
    readonly insetBlockStart: "space";
    readonly insetInline: "space";
    readonly insetInlineEnd: "space";
    readonly insetInlineStart: "space";
    readonly margin: "space";
    readonly marginTop: "space";
    readonly marginRight: "space";
    readonly marginBottom: "space";
    readonly marginLeft: "space";
    readonly marginBlock: "space";
    readonly marginBlockEnd: "space";
    readonly marginBlockStart: "space";
    readonly marginInline: "space";
    readonly marginInlineEnd: "space";
    readonly marginInlineStart: "space";
    readonly padding: "space";
    readonly paddingTop: "space";
    readonly paddingRight: "space";
    readonly paddingBottom: "space";
    readonly paddingLeft: "space";
    readonly paddingBlock: "space";
    readonly paddingBlockEnd: "space";
    readonly paddingBlockStart: "space";
    readonly paddingInline: "space";
    readonly paddingInlineEnd: "space";
    readonly paddingInlineStart: "space";
    readonly scrollMargin: "space";
    readonly scrollMarginTop: "space";
    readonly scrollMarginRight: "space";
    readonly scrollMarginBottom: "space";
    readonly scrollMarginLeft: "space";
    readonly scrollMarginBlock: "space";
    readonly scrollMarginBlockEnd: "space";
    readonly scrollMarginBlockStart: "space";
    readonly scrollMarginInline: "space";
    readonly scrollMarginInlineEnd: "space";
    readonly scrollMarginInlineStart: "space";
    readonly scrollPadding: "space";
    readonly scrollPaddingTop: "space";
    readonly scrollPaddingRight: "space";
    readonly scrollPaddingBottom: "space";
    readonly scrollPaddingLeft: "space";
    readonly scrollPaddingBlock: "space";
    readonly scrollPaddingBlockEnd: "space";
    readonly scrollPaddingBlockStart: "space";
    readonly scrollPaddingInline: "space";
    readonly scrollPaddingInlineEnd: "space";
    readonly scrollPaddingInlineStart: "space";
    readonly top: "space";
    readonly right: "space";
    readonly bottom: "space";
    readonly left: "space";
    readonly fontSize: "fontSizes";
    readonly background: "colors";
    readonly backgroundColor: "colors";
    readonly backgroundImage: "colors";
    readonly borderImage: "colors";
    readonly border: "colors";
    readonly borderBlock: "colors";
    readonly borderBlockEnd: "colors";
    readonly borderBlockStart: "colors";
    readonly borderBottom: "colors";
    readonly borderBottomColor: "colors";
    readonly borderColor: "colors";
    readonly borderInline: "colors";
    readonly borderInlineEnd: "colors";
    readonly borderInlineStart: "colors";
    readonly borderLeft: "colors";
    readonly borderLeftColor: "colors";
    readonly borderRight: "colors";
    readonly borderRightColor: "colors";
    readonly borderTop: "colors";
    readonly borderTopColor: "colors";
    readonly caretColor: "colors";
    readonly color: "colors";
    readonly columnRuleColor: "colors";
    readonly outline: "colors";
    readonly outlineColor: "colors";
    readonly fill: "colors";
    readonly stroke: "colors";
    readonly textDecorationColor: "colors";
    readonly fontFamily: "fonts";
    readonly fontWeight: "fontWeights";
    readonly lineHeight: "lineHeights";
    readonly letterSpacing: "letterSpacings";
    readonly blockSize: "sizes";
    readonly minBlockSize: "sizes";
    readonly maxBlockSize: "sizes";
    readonly inlineSize: "sizes";
    readonly minInlineSize: "sizes";
    readonly maxInlineSize: "sizes";
    readonly width: "sizes";
    readonly minWidth: "sizes";
    readonly maxWidth: "sizes";
    readonly height: "sizes";
    readonly minHeight: "sizes";
    readonly maxHeight: "sizes";
    readonly flexBasis: "sizes";
    readonly gridTemplateColumns: "sizes";
    readonly gridTemplateRows: "sizes";
    readonly borderStyle: "borderStyles";
    readonly borderTopStyle: "borderStyles";
    readonly borderLeftStyle: "borderStyles";
    readonly borderRightStyle: "borderStyles";
    readonly borderBottomStyle: "borderStyles";
    readonly borderRadius: "radii";
    readonly borderTopLeftRadius: "radii";
    readonly borderTopRightRadius: "radii";
    readonly borderBottomRightRadius: "radii";
    readonly borderBottomLeftRadius: "radii";
    readonly boxShadow: "shadows";
    readonly textShadow: "shadows";
    readonly transition: "transitions";
    readonly zIndex: "zIndices";
}, {
    readonly bg: (value: {
        readonly [$$PropertyValue]: "background";
    }) => {
        background: {
            readonly [$$PropertyValue]: "background";
        };
    };
    readonly bgColor: (value: {
        readonly [$$PropertyValue]: "backgroundColor";
    }) => {
        backgroundColor: {
            readonly [$$PropertyValue]: "backgroundColor";
        };
    };
} & {
    readonly borderX: (value: {
        readonly [$$PropertyValue]: "borderLeft";
    }) => {
        borderLeft: {
            readonly [$$PropertyValue]: "borderLeft";
        };
        borderRight: {
            readonly [$$PropertyValue]: "borderLeft";
        };
    };
    readonly borderY: (value: {
        readonly [$$PropertyValue]: "borderTop";
    }) => {
        borderTop: {
            readonly [$$PropertyValue]: "borderTop";
        };
        borderBottom: {
            readonly [$$PropertyValue]: "borderTop";
        };
    };
} & {
    readonly d: (value: {
        readonly [$$PropertyValue]: "display";
    }) => {
        display: {
            readonly [$$PropertyValue]: "display";
        };
    };
} & {
    readonly pos: (value: {
        readonly [$$PropertyValue]: "position";
    }) => {
        position: {
            readonly [$$PropertyValue]: "position";
        };
    };
} & {
    readonly borderTopRadius: (value: {
        readonly [$$PropertyValue]: "borderTopLeftRadius";
    }) => {
        borderTopLeftRadius: {
            readonly [$$PropertyValue]: "borderTopLeftRadius";
        };
        borderTopRightRadius: {
            readonly [$$PropertyValue]: "borderTopLeftRadius";
        };
    };
    readonly borderRightRadius: (value: {
        readonly [$$PropertyValue]: "borderTopRightRadius";
    }) => {
        borderTopRightRadius: {
            readonly [$$PropertyValue]: "borderTopRightRadius";
        };
        borderBottomRightRadius: {
            readonly [$$PropertyValue]: "borderTopRightRadius";
        };
    };
    readonly borderStartRadius: (value: {
        readonly [$$PropertyValue]: "borderStartStartRadius";
    }) => {
        borderStartStartRadius: {
            readonly [$$PropertyValue]: "borderStartStartRadius";
        };
        borderEndStartRadius: {
            readonly [$$PropertyValue]: "borderStartStartRadius";
        };
    };
    readonly borderBottomRadius: (value: {
        readonly [$$PropertyValue]: "borderBottomLeftRadius";
    }) => {
        borderBottomLeftRadius: {
            readonly [$$PropertyValue]: "borderBottomLeftRadius";
        };
        borderBottomRightRadius: {
            readonly [$$PropertyValue]: "borderBottomLeftRadius";
        };
    };
    readonly borderLeftRadius: (value: {
        readonly [$$PropertyValue]: "borderTopLeftRadius";
    }) => {
        borderTopLeftRadius: {
            readonly [$$PropertyValue]: "borderTopLeftRadius";
        };
        borderBottomLeftRadius: {
            readonly [$$PropertyValue]: "borderTopLeftRadius";
        };
    };
    readonly borderEndRadius: (value: {
        readonly [$$PropertyValue]: "borderStartEndRadius";
    }) => {
        borderStartEndRadius: {
            readonly [$$PropertyValue]: "borderStartEndRadius";
        };
        borderEndEndRadius: {
            readonly [$$PropertyValue]: "borderStartEndRadius";
        };
    };
    readonly rounded: (value: {
        readonly [$$PropertyValue]: "borderRadius";
    }) => {
        borderRadius: {
            readonly [$$PropertyValue]: "borderRadius";
        };
    };
    readonly roundedTop: (value: {
        readonly [$$PropertyValue]: "borderTopLeftRadius";
    }) => {
        borderTopLeftRadius: {
            readonly [$$PropertyValue]: "borderTopLeftRadius";
        };
        borderTopRightRadius: {
            readonly [$$PropertyValue]: "borderTopLeftRadius";
        };
    };
    readonly roundedRight: (value: {
        readonly [$$PropertyValue]: "borderTopRightRadius";
    }) => {
        borderTopRightRadius: {
            readonly [$$PropertyValue]: "borderTopRightRadius";
        };
        borderBottomRightRadius: {
            readonly [$$PropertyValue]: "borderTopRightRadius";
        };
    };
    readonly roundedStart: (value: {
        readonly [$$PropertyValue]: "borderStartStartRadius";
    }) => {
        borderStartStartRadius: {
            readonly [$$PropertyValue]: "borderStartStartRadius";
        };
        borderEndStartRadius: {
            readonly [$$PropertyValue]: "borderStartStartRadius";
        };
    };
    readonly roundedBottom: (value: {
        readonly [$$PropertyValue]: "borderBottomLeftRadius";
    }) => {
        borderBottomLeftRadius: {
            readonly [$$PropertyValue]: "borderBottomLeftRadius";
        };
        borderBottomRightRadius: {
            readonly [$$PropertyValue]: "borderBottomLeftRadius";
        };
    };
    readonly roundedLeft: (value: {
        readonly [$$PropertyValue]: "borderTopLeftRadius";
    }) => {
        borderTopLeftRadius: {
            readonly [$$PropertyValue]: "borderTopLeftRadius";
        };
        borderBottomLeftRadius: {
            readonly [$$PropertyValue]: "borderTopLeftRadius";
        };
    };
    readonly roundedEnd: (value: {
        readonly [$$PropertyValue]: "borderStartEndRadius";
    }) => {
        borderStartEndRadius: {
            readonly [$$PropertyValue]: "borderStartEndRadius";
        };
        borderEndEndRadius: {
            readonly [$$PropertyValue]: "borderStartEndRadius";
        };
    };
} & {
    readonly m: (value: {
        readonly [$$PropertyValue]: "margin";
    }) => {
        margin: {
            readonly [$$PropertyValue]: "margin";
        };
    };
    readonly mt: (value: {
        readonly [$$PropertyValue]: "marginTop";
    }) => {
        marginTop: {
            readonly [$$PropertyValue]: "marginTop";
        };
    };
    readonly mr: (value: {
        readonly [$$PropertyValue]: "marginRight";
    }) => {
        marginRight: {
            readonly [$$PropertyValue]: "marginRight";
        };
    };
    readonly marginStart: (value: {
        readonly [$$PropertyValue]: "marginInlineStart";
    }) => {
        marginInlineStart: {
            readonly [$$PropertyValue]: "marginInlineStart";
        };
    };
    readonly ms: (value: {
        readonly [$$PropertyValue]: "marginInlineStart";
    }) => {
        marginInlineStart: {
            readonly [$$PropertyValue]: "marginInlineStart";
        };
    };
    readonly mb: (value: {
        readonly [$$PropertyValue]: "marginBottom";
    }) => {
        marginBottom: {
            readonly [$$PropertyValue]: "marginBottom";
        };
    };
    readonly ml: (value: {
        readonly [$$PropertyValue]: "marginLeft";
    }) => {
        marginLeft: {
            readonly [$$PropertyValue]: "marginLeft";
        };
    };
    readonly marginEnd: (value: {
        readonly [$$PropertyValue]: "marginInlineEnd";
    }) => {
        marginInlineEnd: {
            readonly [$$PropertyValue]: "marginInlineEnd";
        };
    };
    readonly me: (value: {
        readonly [$$PropertyValue]: "marginInlineEnd";
    }) => {
        marginInlineEnd: {
            readonly [$$PropertyValue]: "marginInlineEnd";
        };
    };
    readonly mx: (value: {
        readonly [$$PropertyValue]: "marginInlineStart";
    }) => {
        marginInlineStart: {
            readonly [$$PropertyValue]: "marginInlineStart";
        };
        marginInlineEnd: {
            readonly [$$PropertyValue]: "marginInlineStart";
        };
    };
    readonly my: (value: {
        readonly [$$PropertyValue]: "marginTop";
    }) => {
        marginTop: {
            readonly [$$PropertyValue]: "marginTop";
        };
        marginBottom: {
            readonly [$$PropertyValue]: "marginTop";
        };
    };
    readonly spaceX: (value: {
        readonly [$$PropertyValue]: "marginLeft";
    }) => {
        "& > * + *": {
            marginLeft: {
                readonly [$$PropertyValue]: "marginLeft";
            };
        };
    };
    readonly spaceY: (value: {
        readonly [$$PropertyValue]: "marginTop";
    }) => {
        "& > * + *": {
            marginTop: {
                readonly [$$PropertyValue]: "marginTop";
            };
        };
    };
} & {
    readonly p: (value: {
        readonly [$$PropertyValue]: "padding";
    }) => {
        padding: {
            readonly [$$PropertyValue]: "padding";
        };
    };
    readonly pt: (value: {
        readonly [$$PropertyValue]: "paddingTop";
    }) => {
        paddingTop: {
            readonly [$$PropertyValue]: "paddingTop";
        };
    };
    readonly pr: (value: {
        readonly [$$PropertyValue]: "paddingRight";
    }) => {
        paddingRight: {
            readonly [$$PropertyValue]: "paddingRight";
        };
    };
    readonly paddingStart: (value: {
        readonly [$$PropertyValue]: "paddingInlineStart";
    }) => {
        paddingInlineStart: {
            readonly [$$PropertyValue]: "paddingInlineStart";
        };
    };
    readonly ps: (value: {
        readonly [$$PropertyValue]: "paddingInlineStart";
    }) => {
        paddingInlineStart: {
            readonly [$$PropertyValue]: "paddingInlineStart";
        };
    };
    readonly pb: (value: {
        readonly [$$PropertyValue]: "paddingBottom";
    }) => {
        paddingBottom: {
            readonly [$$PropertyValue]: "paddingBottom";
        };
    };
    readonly pl: (value: {
        readonly [$$PropertyValue]: "paddingLeft";
    }) => {
        paddingLeft: {
            readonly [$$PropertyValue]: "paddingLeft";
        };
    };
    readonly pe: (value: {
        readonly [$$PropertyValue]: "paddingInlineEnd";
    }) => {
        paddingInlineEnd: {
            readonly [$$PropertyValue]: "paddingInlineEnd";
        };
    };
    readonly paddingEnd: (value: {
        readonly [$$PropertyValue]: "paddingInlineEnd";
    }) => {
        paddingInlineEnd: {
            readonly [$$PropertyValue]: "paddingInlineEnd";
        };
    };
    readonly px: (value: {
        readonly [$$PropertyValue]: "paddingInlineStart";
    }) => {
        paddingInlineStart: {
            readonly [$$PropertyValue]: "paddingInlineStart";
        };
        paddingInlineEnd: {
            readonly [$$PropertyValue]: "paddingInlineStart";
        };
    };
    readonly py: (value: {
        readonly [$$PropertyValue]: "paddingTop";
    }) => {
        paddingTop: {
            readonly [$$PropertyValue]: "paddingTop";
        };
        paddingBottom: {
            readonly [$$PropertyValue]: "paddingTop";
        };
    };
} & {
    readonly shadow: (value: {
        readonly [$$PropertyValue]: "boxShadow";
    }) => {
        boxShadow: {
            readonly [$$PropertyValue]: "boxShadow";
        };
    };
} & {
    readonly w: (value: {
        readonly [$$PropertyValue]: "width";
    }) => {
        width: {
            readonly [$$PropertyValue]: "width";
        };
    };
    readonly minW: (value: {
        readonly [$$PropertyValue]: "minWidth";
    }) => {
        minWidth: {
            readonly [$$PropertyValue]: "minWidth";
        };
    };
    readonly maxW: (value: {
        readonly [$$PropertyValue]: "maxWidth";
    }) => {
        maxWidth: {
            readonly [$$PropertyValue]: "maxWidth";
        };
    };
    readonly h: (value: {
        readonly [$$PropertyValue]: "height";
    }) => {
        height: {
            readonly [$$PropertyValue]: "height";
        };
    };
    readonly minH: (value: {
        readonly [$$PropertyValue]: "minHeight";
    }) => {
        minHeight: {
            readonly [$$PropertyValue]: "minHeight";
        };
    };
    readonly maxH: (value: {
        readonly [$$PropertyValue]: "maxHeight";
    }) => {
        maxHeight: {
            readonly [$$PropertyValue]: "maxHeight";
        };
    };
    readonly boxSize: (value: {
        readonly [$$PropertyValue]: "width";
    }) => {
        width: {
            readonly [$$PropertyValue]: "width";
        };
        height: {
            readonly [$$PropertyValue]: "width";
        };
    };
} & {
    readonly noOfLines: (value: string | number) => {
        readonly overflow: "hidden";
        readonly display: "-webkit-box";
        readonly "-webkit-box-orient": "vertical";
        readonly "-webkit-line-clamp": string | number;
    };
} & {
    readonly _hover: (value: import("./stitches-utils/type").UtilsCSS) => {
        "&:hover, &[data-hover]": import("./stitches-utils/type").UtilsCSS;
    };
    readonly _active: (value: import("./stitches-utils/type").UtilsCSS) => {
        "&:active, &[data-active]": import("./stitches-utils/type").UtilsCSS;
    };
    readonly _focus: (value: import("./stitches-utils/type").UtilsCSS) => {
        "&:focus, &[data-focus]": import("./stitches-utils/type").UtilsCSS;
    };
    readonly _highlighted: (value: import("./stitches-utils/type").UtilsCSS) => {
        "&[data-highlighted]": import("./stitches-utils/type").UtilsCSS;
    };
    readonly _focusWithin: (value: import("./stitches-utils/type").UtilsCSS) => {
        "&:focus-within": import("./stitches-utils/type").UtilsCSS;
    };
    readonly _focusVisible: (value: import("./stitches-utils/type").UtilsCSS) => {
        "&:focus-visible": import("./stitches-utils/type").UtilsCSS;
    };
    readonly _disabled: (value: import("./stitches-utils/type").UtilsCSS) => {
        "&[disabled], &[aria-disabled=true], &[data-disabled]": import("./stitches-utils/type").UtilsCSS;
    };
    readonly _readOnly: (value: import("./stitches-utils/type").UtilsCSS) => {
        "&[aria-readonly=true], &[readonly], &[data-readonly]": import("./stitches-utils/type").UtilsCSS;
    };
    readonly _before: (value: import("./stitches-utils/type").UtilsCSS) => {
        "&::before": import("./stitches-utils/type").UtilsCSS;
    };
    readonly _after: (value: import("./stitches-utils/type").UtilsCSS) => {
        "&::after": import("./stitches-utils/type").UtilsCSS;
    };
    readonly _empty: (value: import("./stitches-utils/type").UtilsCSS) => {
        "&:empty": import("./stitches-utils/type").UtilsCSS;
    };
    readonly _expanded: (value: import("./stitches-utils/type").UtilsCSS) => {
        "&[aria-expanded=true], &[data-expanded]": import("./stitches-utils/type").UtilsCSS;
    };
    readonly _checked: (value: import("./stitches-utils/type").UtilsCSS) => {
        "&[aria-checked=true], &[data-checked]": import("./stitches-utils/type").UtilsCSS;
    };
    readonly _grabbed: (value: import("./stitches-utils/type").UtilsCSS) => {
        "&[aria-grabbed=true], &[data-grabbed]": import("./stitches-utils/type").UtilsCSS;
    };
    readonly _pressed: (value: import("./stitches-utils/type").UtilsCSS) => {
        "&[aria-pressed=true], &[data-pressed]": import("./stitches-utils/type").UtilsCSS;
    };
    readonly _invalid: (value: import("./stitches-utils/type").UtilsCSS) => {
        "&[aria-invalid=true], &[data-invalid]": import("./stitches-utils/type").UtilsCSS;
    };
    readonly _valid: (value: import("./stitches-utils/type").UtilsCSS) => {
        "&[data-valid], &[data-state=valid]": import("./stitches-utils/type").UtilsCSS;
    };
    readonly _loading: (value: import("./stitches-utils/type").UtilsCSS) => {
        "&[data-loading], &[aria-busy=true]": import("./stitches-utils/type").UtilsCSS;
    };
    readonly _selected: (value: import("./stitches-utils/type").UtilsCSS) => {
        "&[aria-selected=true], &[data-selected]": import("./stitches-utils/type").UtilsCSS;
    };
    readonly _hidden: (value: import("./stitches-utils/type").UtilsCSS) => {
        "&[hidden], &[data-hidden]": import("./stitches-utils/type").UtilsCSS;
    };
    readonly _even: (value: import("./stitches-utils/type").UtilsCSS) => {
        "&:nth-of-type(even)": import("./stitches-utils/type").UtilsCSS;
    };
    readonly _odd: (value: import("./stitches-utils/type").UtilsCSS) => {
        "&:nth-of-type(odd)": import("./stitches-utils/type").UtilsCSS;
    };
    readonly _first: (value: import("./stitches-utils/type").UtilsCSS) => {
        "&:first-of-type": import("./stitches-utils/type").UtilsCSS;
    };
    readonly _last: (value: import("./stitches-utils/type").UtilsCSS) => {
        "&:last-of-type": import("./stitches-utils/type").UtilsCSS;
    };
    readonly _notFirst: (value: import("./stitches-utils/type").UtilsCSS) => {
        "&:not(:first-of-type)": import("./stitches-utils/type").UtilsCSS;
    };
    readonly _notLast: (value: import("./stitches-utils/type").UtilsCSS) => {
        "&:not(:last-of-type)": import("./stitches-utils/type").UtilsCSS;
    };
    readonly _visited: (value: import("./stitches-utils/type").UtilsCSS) => {
        "&:visited": import("./stitches-utils/type").UtilsCSS;
    };
    readonly _activeLink: (value: import("./stitches-utils/type").UtilsCSS) => {
        "&[aria-current=page]": import("./stitches-utils/type").UtilsCSS;
    };
    readonly _activeStep: (value: import("./stitches-utils/type").UtilsCSS) => {
        "&[aria-current=step]": import("./stitches-utils/type").UtilsCSS;
    };
    readonly _indeterminate: (value: import("./stitches-utils/type").UtilsCSS) => {
        "&:indeterminate, &[aria-checked=mixed], &[data-indeterminate]": import("./stitches-utils/type").UtilsCSS;
    };
    readonly _groupHover: (value: import("./stitches-utils/type").UtilsCSS) => {
        [x: string]: import("./stitches-utils/type").UtilsCSS;
    };
    readonly _peerHover: (value: import("./stitches-utils/type").UtilsCSS) => {
        [x: string]: import("./stitches-utils/type").UtilsCSS;
    };
    readonly _groupFocus: (value: import("./stitches-utils/type").UtilsCSS) => {
        [x: string]: import("./stitches-utils/type").UtilsCSS;
    };
    readonly _peerFocus: (value: import("./stitches-utils/type").UtilsCSS) => {
        [x: string]: import("./stitches-utils/type").UtilsCSS;
    };
    readonly _groupFocusVisible: (value: import("./stitches-utils/type").UtilsCSS) => {
        [x: string]: import("./stitches-utils/type").UtilsCSS;
    };
    readonly _peerFocusVisible: (value: import("./stitches-utils/type").UtilsCSS) => {
        [x: string]: import("./stitches-utils/type").UtilsCSS;
    };
    readonly _groupActive: (value: import("./stitches-utils/type").UtilsCSS) => {
        [x: string]: import("./stitches-utils/type").UtilsCSS;
    };
    readonly _peerActive: (value: import("./stitches-utils/type").UtilsCSS) => {
        [x: string]: import("./stitches-utils/type").UtilsCSS;
    };
    readonly _groupSelected: (value: import("./stitches-utils/type").UtilsCSS) => {
        [x: string]: import("./stitches-utils/type").UtilsCSS;
    };
    readonly _peerSelected: (value: import("./stitches-utils/type").UtilsCSS) => {
        [x: string]: import("./stitches-utils/type").UtilsCSS;
    };
    readonly _groupDisabled: (value: import("./stitches-utils/type").UtilsCSS) => {
        [x: string]: import("./stitches-utils/type").UtilsCSS;
    };
    readonly _peerDisabled: (value: import("./stitches-utils/type").UtilsCSS) => {
        [x: string]: import("./stitches-utils/type").UtilsCSS;
    };
    readonly _groupInvalid: (value: import("./stitches-utils/type").UtilsCSS) => {
        [x: string]: import("./stitches-utils/type").UtilsCSS;
    };
    readonly _peerInvalid: (value: import("./stitches-utils/type").UtilsCSS) => {
        [x: string]: import("./stitches-utils/type").UtilsCSS;
    };
    readonly _groupChecked: (value: import("./stitches-utils/type").UtilsCSS) => {
        [x: string]: import("./stitches-utils/type").UtilsCSS;
    };
    readonly _peerChecked: (value: import("./stitches-utils/type").UtilsCSS) => {
        [x: string]: import("./stitches-utils/type").UtilsCSS;
    };
    readonly _groupFocusWithin: (value: import("./stitches-utils/type").UtilsCSS) => {
        [x: string]: import("./stitches-utils/type").UtilsCSS;
    };
    readonly _peerFocusWithin: (value: import("./stitches-utils/type").UtilsCSS) => {
        [x: string]: import("./stitches-utils/type").UtilsCSS;
    };
    readonly _peerPlaceholderShown: (value: import("./stitches-utils/type").UtilsCSS) => {
        [x: string]: import("./stitches-utils/type").UtilsCSS;
    };
    readonly _placeholder: (value: import("./stitches-utils/type").UtilsCSS) => {
        "&::placeholder": import("./stitches-utils/type").UtilsCSS;
    };
    readonly _placeholderShown: (value: import("./stitches-utils/type").UtilsCSS) => {
        "&:placeholder-shown": import("./stitches-utils/type").UtilsCSS;
    };
    readonly _fullScreen: (value: import("./stitches-utils/type").UtilsCSS) => {
        "&:fullscreen": import("./stitches-utils/type").UtilsCSS;
    };
    readonly _selection: (value: import("./stitches-utils/type").UtilsCSS) => {
        "&::selection": import("./stitches-utils/type").UtilsCSS;
    };
    readonly _mediaDark: (value: import("./stitches-utils/type").UtilsCSS) => {
        "@media (prefers-color-scheme: dark)": import("./stitches-utils/type").UtilsCSS;
    };
    readonly _mediaReduceMotion: (value: import("./stitches-utils/type").UtilsCSS) => {
        "@media (prefers-reduced-motion: reduce)": import("./stitches-utils/type").UtilsCSS;
    };
    readonly _dark: (value: import("./stitches-utils/type").UtilsCSS) => {
        ".hope-ui-dark &": import("./stitches-utils/type").UtilsCSS;
    };
    readonly _light: (value: import("./stitches-utils/type").UtilsCSS) => {
        ".hope-ui-light &": import("./stitches-utils/type").UtilsCSS;
    };
}>>;
//# sourceMappingURL=utils.d.ts.map