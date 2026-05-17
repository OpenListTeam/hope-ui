import { Accessor, PropsWithChildren } from "solid-js";
import { ColorMode } from "./color-mode";
import { ThemeStyleConfig } from "./style-config.types";
import { HopeTheme, StitchesThemeConfig } from "./styled-system/types";
/**
 * Hope UI theme override configuration.
 */
export interface HopeThemeConfig {
    initialColorMode?: ColorMode;
    lightTheme?: StitchesThemeConfig;
    darkTheme?: StitchesThemeConfig;
    components?: ThemeStyleConfig;
}
export interface HopeContextValue {
    components: ThemeStyleConfig;
    theme: Accessor<HopeTheme>;
    colorMode: Accessor<ColorMode>;
    setColorMode: (value: ColorMode) => void;
    toggleColorMode: () => void;
}
export declare const HopeContext: import("solid-js").Context<HopeContextValue | undefined>;
export declare type HopeProviderProps = PropsWithChildren<{
    /**
     * Hope UI theme configuration.
     */
    config?: HopeThemeConfig;
    /**
     * Whether CSS Reset should be applied.
     */
    enableCssReset?: boolean;
}>;
export declare function HopeProvider(props: HopeProviderProps): import("solid-js").JSX.Element;
/**
 * Custom hook that reads from `HopeProvider` context
 * Returns an accessor for the current used theme.
 */
export declare function useTheme(): Accessor<string & {
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
}>;
/**
 * Custom hook that reads from `HopeProvider` context
 * Returns an accessor for the theme based components style config.
 */
export declare function useStyleConfig(): ThemeStyleConfig;
/**
 * Custom hook that reads from `HopeProvider` context
 * Returns an accessor for the color mode and function to toggle it
 */
export declare function useColorMode(): Pick<HopeContextValue, "colorMode" | "setColorMode" | "toggleColorMode">;
/**
 * Change value based on color mode.
 *
 * @param light the light mode value
 * @param dark the dark mode value
 * @return A derived signal based on the color mode.
 */
export declare function useColorModeValue<T = any>(light: T, dark: T): () => T;
//# sourceMappingURL=hope-provider.d.ts.map