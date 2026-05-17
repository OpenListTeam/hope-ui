import { VariantProps } from "@stitches/core";
export declare const spinnerStyles: import("@stitches/core/types/styled-component").CssComponent<never, {
    size?: "sm" | "md" | "lg" | "xl" | "xs" | undefined;
}, {
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
        readonly "32": "8rem";
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
        readonly "32": "8rem";
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
    readonly _hover: (value: import("../../styled-system/stitches-utils/type").UtilsCSS) => {
        "&:hover, &[data-hover]": import("../../styled-system/stitches-utils/type").UtilsCSS;
    };
    readonly _active: (value: import("../../styled-system/stitches-utils/type").UtilsCSS) => {
        "&:active, &[data-active]": import("../../styled-system/stitches-utils/type").UtilsCSS;
    };
    readonly _focus: (value: import("../../styled-system/stitches-utils/type").UtilsCSS) => {
        "&:focus, &[data-focus]": import("../../styled-system/stitches-utils/type").UtilsCSS;
    };
    readonly _highlighted: (value: import("../../styled-system/stitches-utils/type").UtilsCSS) => {
        "&[data-highlighted]": import("../../styled-system/stitches-utils/type").UtilsCSS;
    };
    readonly _focusWithin: (value: import("../../styled-system/stitches-utils/type").UtilsCSS) => {
        "&:focus-within": import("../../styled-system/stitches-utils/type").UtilsCSS;
    };
    readonly _focusVisible: (value: import("../../styled-system/stitches-utils/type").UtilsCSS) => {
        "&:focus-visible": import("../../styled-system/stitches-utils/type").UtilsCSS;
    };
    readonly _disabled: (value: import("../../styled-system/stitches-utils/type").UtilsCSS) => {
        "&[disabled], &[aria-disabled=true], &[data-disabled]": import("../../styled-system/stitches-utils/type").UtilsCSS;
    };
    readonly _readOnly: (value: import("../../styled-system/stitches-utils/type").UtilsCSS) => {
        "&[aria-readonly=true], &[readonly], &[data-readonly]": import("../../styled-system/stitches-utils/type").UtilsCSS;
    };
    readonly _before: (value: import("../../styled-system/stitches-utils/type").UtilsCSS) => {
        "&::before": import("../../styled-system/stitches-utils/type").UtilsCSS;
    };
    readonly _after: (value: import("../../styled-system/stitches-utils/type").UtilsCSS) => {
        "&::after": import("../../styled-system/stitches-utils/type").UtilsCSS;
    };
    readonly _empty: (value: import("../../styled-system/stitches-utils/type").UtilsCSS) => {
        "&:empty": import("../../styled-system/stitches-utils/type").UtilsCSS;
    };
    readonly _expanded: (value: import("../../styled-system/stitches-utils/type").UtilsCSS) => {
        "&[aria-expanded=true], &[data-expanded]": import("../../styled-system/stitches-utils/type").UtilsCSS;
    };
    readonly _checked: (value: import("../../styled-system/stitches-utils/type").UtilsCSS) => {
        "&[aria-checked=true], &[data-checked]": import("../../styled-system/stitches-utils/type").UtilsCSS;
    };
    readonly _grabbed: (value: import("../../styled-system/stitches-utils/type").UtilsCSS) => {
        "&[aria-grabbed=true], &[data-grabbed]": import("../../styled-system/stitches-utils/type").UtilsCSS;
    };
    readonly _pressed: (value: import("../../styled-system/stitches-utils/type").UtilsCSS) => {
        "&[aria-pressed=true], &[data-pressed]": import("../../styled-system/stitches-utils/type").UtilsCSS;
    };
    readonly _invalid: (value: import("../../styled-system/stitches-utils/type").UtilsCSS) => {
        "&[aria-invalid=true], &[data-invalid]": import("../../styled-system/stitches-utils/type").UtilsCSS;
    };
    readonly _valid: (value: import("../../styled-system/stitches-utils/type").UtilsCSS) => {
        "&[data-valid], &[data-state=valid]": import("../../styled-system/stitches-utils/type").UtilsCSS;
    };
    readonly _loading: (value: import("../../styled-system/stitches-utils/type").UtilsCSS) => {
        "&[data-loading], &[aria-busy=true]": import("../../styled-system/stitches-utils/type").UtilsCSS;
    };
    readonly _selected: (value: import("../../styled-system/stitches-utils/type").UtilsCSS) => {
        "&[aria-selected=true], &[data-selected]": import("../../styled-system/stitches-utils/type").UtilsCSS;
    };
    readonly _hidden: (value: import("../../styled-system/stitches-utils/type").UtilsCSS) => {
        "&[hidden], &[data-hidden]": import("../../styled-system/stitches-utils/type").UtilsCSS;
    };
    readonly _even: (value: import("../../styled-system/stitches-utils/type").UtilsCSS) => {
        "&:nth-of-type(even)": import("../../styled-system/stitches-utils/type").UtilsCSS;
    };
    readonly _odd: (value: import("../../styled-system/stitches-utils/type").UtilsCSS) => {
        "&:nth-of-type(odd)": import("../../styled-system/stitches-utils/type").UtilsCSS;
    };
    readonly _first: (value: import("../../styled-system/stitches-utils/type").UtilsCSS) => {
        "&:first-of-type": import("../../styled-system/stitches-utils/type").UtilsCSS;
    };
    readonly _last: (value: import("../../styled-system/stitches-utils/type").UtilsCSS) => {
        "&:last-of-type": import("../../styled-system/stitches-utils/type").UtilsCSS;
    };
    readonly _notFirst: (value: import("../../styled-system/stitches-utils/type").UtilsCSS) => {
        "&:not(:first-of-type)": import("../../styled-system/stitches-utils/type").UtilsCSS;
    };
    readonly _notLast: (value: import("../../styled-system/stitches-utils/type").UtilsCSS) => {
        "&:not(:last-of-type)": import("../../styled-system/stitches-utils/type").UtilsCSS;
    };
    readonly _visited: (value: import("../../styled-system/stitches-utils/type").UtilsCSS) => {
        "&:visited": import("../../styled-system/stitches-utils/type").UtilsCSS;
    };
    readonly _activeLink: (value: import("../../styled-system/stitches-utils/type").UtilsCSS) => {
        "&[aria-current=page]": import("../../styled-system/stitches-utils/type").UtilsCSS;
    };
    readonly _activeStep: (value: import("../../styled-system/stitches-utils/type").UtilsCSS) => {
        "&[aria-current=step]": import("../../styled-system/stitches-utils/type").UtilsCSS;
    };
    readonly _indeterminate: (value: import("../../styled-system/stitches-utils/type").UtilsCSS) => {
        "&:indeterminate, &[aria-checked=mixed], &[data-indeterminate]": import("../../styled-system/stitches-utils/type").UtilsCSS;
    };
    readonly _groupHover: (value: import("../../styled-system/stitches-utils/type").UtilsCSS) => {
        [x: string]: import("../../styled-system/stitches-utils/type").UtilsCSS;
    };
    readonly _peerHover: (value: import("../../styled-system/stitches-utils/type").UtilsCSS) => {
        [x: string]: import("../../styled-system/stitches-utils/type").UtilsCSS;
    };
    readonly _groupFocus: (value: import("../../styled-system/stitches-utils/type").UtilsCSS) => {
        [x: string]: import("../../styled-system/stitches-utils/type").UtilsCSS;
    };
    readonly _peerFocus: (value: import("../../styled-system/stitches-utils/type").UtilsCSS) => {
        [x: string]: import("../../styled-system/stitches-utils/type").UtilsCSS;
    };
    readonly _groupFocusVisible: (value: import("../../styled-system/stitches-utils/type").UtilsCSS) => {
        [x: string]: import("../../styled-system/stitches-utils/type").UtilsCSS;
    };
    readonly _peerFocusVisible: (value: import("../../styled-system/stitches-utils/type").UtilsCSS) => {
        [x: string]: import("../../styled-system/stitches-utils/type").UtilsCSS;
    };
    readonly _groupActive: (value: import("../../styled-system/stitches-utils/type").UtilsCSS) => {
        [x: string]: import("../../styled-system/stitches-utils/type").UtilsCSS;
    };
    readonly _peerActive: (value: import("../../styled-system/stitches-utils/type").UtilsCSS) => {
        [x: string]: import("../../styled-system/stitches-utils/type").UtilsCSS;
    };
    readonly _groupSelected: (value: import("../../styled-system/stitches-utils/type").UtilsCSS) => {
        [x: string]: import("../../styled-system/stitches-utils/type").UtilsCSS;
    };
    readonly _peerSelected: (value: import("../../styled-system/stitches-utils/type").UtilsCSS) => {
        [x: string]: import("../../styled-system/stitches-utils/type").UtilsCSS;
    };
    readonly _groupDisabled: (value: import("../../styled-system/stitches-utils/type").UtilsCSS) => {
        [x: string]: import("../../styled-system/stitches-utils/type").UtilsCSS;
    };
    readonly _peerDisabled: (value: import("../../styled-system/stitches-utils/type").UtilsCSS) => {
        [x: string]: import("../../styled-system/stitches-utils/type").UtilsCSS;
    };
    readonly _groupInvalid: (value: import("../../styled-system/stitches-utils/type").UtilsCSS) => {
        [x: string]: import("../../styled-system/stitches-utils/type").UtilsCSS;
    };
    readonly _peerInvalid: (value: import("../../styled-system/stitches-utils/type").UtilsCSS) => {
        [x: string]: import("../../styled-system/stitches-utils/type").UtilsCSS;
    };
    readonly _groupChecked: (value: import("../../styled-system/stitches-utils/type").UtilsCSS) => {
        [x: string]: import("../../styled-system/stitches-utils/type").UtilsCSS;
    };
    readonly _peerChecked: (value: import("../../styled-system/stitches-utils/type").UtilsCSS) => {
        [x: string]: import("../../styled-system/stitches-utils/type").UtilsCSS;
    };
    readonly _groupFocusWithin: (value: import("../../styled-system/stitches-utils/type").UtilsCSS) => {
        [x: string]: import("../../styled-system/stitches-utils/type").UtilsCSS;
    };
    readonly _peerFocusWithin: (value: import("../../styled-system/stitches-utils/type").UtilsCSS) => {
        [x: string]: import("../../styled-system/stitches-utils/type").UtilsCSS;
    };
    readonly _peerPlaceholderShown: (value: import("../../styled-system/stitches-utils/type").UtilsCSS) => {
        [x: string]: import("../../styled-system/stitches-utils/type").UtilsCSS;
    };
    readonly _placeholder: (value: import("../../styled-system/stitches-utils/type").UtilsCSS) => {
        "&::placeholder": import("../../styled-system/stitches-utils/type").UtilsCSS;
    };
    readonly _placeholderShown: (value: import("../../styled-system/stitches-utils/type").UtilsCSS) => {
        "&:placeholder-shown": import("../../styled-system/stitches-utils/type").UtilsCSS;
    };
    readonly _fullScreen: (value: import("../../styled-system/stitches-utils/type").UtilsCSS) => {
        "&:fullscreen": import("../../styled-system/stitches-utils/type").UtilsCSS;
    };
    readonly _selection: (value: import("../../styled-system/stitches-utils/type").UtilsCSS) => {
        "&::selection": import("../../styled-system/stitches-utils/type").UtilsCSS;
    };
    readonly _mediaDark: (value: import("../../styled-system/stitches-utils/type").UtilsCSS) => {
        "@media (prefers-color-scheme: dark)": import("../../styled-system/stitches-utils/type").UtilsCSS;
    };
    readonly _mediaReduceMotion: (value: import("../../styled-system/stitches-utils/type").UtilsCSS) => {
        "@media (prefers-reduced-motion: reduce)": import("../../styled-system/stitches-utils/type").UtilsCSS;
    };
    readonly _dark: (value: import("../../styled-system/stitches-utils/type").UtilsCSS) => {
        ".hope-ui-dark &": import("../../styled-system/stitches-utils/type").UtilsCSS;
    };
    readonly _light: (value: import("../../styled-system/stitches-utils/type").UtilsCSS) => {
        ".hope-ui-light &": import("../../styled-system/stitches-utils/type").UtilsCSS;
    };
}>>;
export declare type SpinnerVariants = VariantProps<typeof spinnerStyles>;
//# sourceMappingURL=spinner.styles.d.ts.map