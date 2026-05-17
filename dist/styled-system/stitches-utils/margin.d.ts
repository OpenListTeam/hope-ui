import type { PropertyValue } from "@stitches/core";
export declare const margin: {
    /**
     * The CSS `margin` property
     */
    readonly m: (value: PropertyValue<"margin">) => {
        margin: {
            readonly [$$PropertyValue]: "margin";
        };
    };
    /**
     * The CSS `margin-top` property
     */
    readonly mt: (value: PropertyValue<"marginTop">) => {
        marginTop: {
            readonly [$$PropertyValue]: "marginTop";
        };
    };
    /**
     * The CSS `margin-right` property
     */
    readonly mr: (value: PropertyValue<"marginRight">) => {
        marginRight: {
            readonly [$$PropertyValue]: "marginRight";
        };
    };
    /**
     * The CSS `margin-inline-start` property
     */
    readonly marginStart: (value: PropertyValue<"marginInlineStart">) => {
        marginInlineStart: {
            readonly [$$PropertyValue]: "marginInlineStart";
        };
    };
    /**
     * The CSS `margin-inline-start` property
     */
    readonly ms: (value: PropertyValue<"marginInlineStart">) => {
        marginInlineStart: {
            readonly [$$PropertyValue]: "marginInlineStart";
        };
    };
    /**
     * The CSS `margin-bottom` property
     */
    readonly mb: (value: PropertyValue<"marginBottom">) => {
        marginBottom: {
            readonly [$$PropertyValue]: "marginBottom";
        };
    };
    /**
     * The CSS `margin-left`  property
     */
    readonly ml: (value: PropertyValue<"marginLeft">) => {
        marginLeft: {
            readonly [$$PropertyValue]: "marginLeft";
        };
    };
    /**
     * The CSS `margin-inline-end` property
     */
    readonly marginEnd: (value: PropertyValue<"marginInlineEnd">) => {
        marginInlineEnd: {
            readonly [$$PropertyValue]: "marginInlineEnd";
        };
    };
    /**
     * The CSS `margin-inline-end` property
     */
    readonly me: (value: PropertyValue<"marginInlineEnd">) => {
        marginInlineEnd: {
            readonly [$$PropertyValue]: "marginInlineEnd";
        };
    };
    /**
     * The CSS `margin-inline-start` and `margin-inline-end` property
     */
    readonly mx: (value: PropertyValue<"marginInlineStart">) => {
        marginInlineStart: {
            readonly [$$PropertyValue]: "marginInlineStart";
        };
        marginInlineEnd: {
            readonly [$$PropertyValue]: "marginInlineStart";
        };
    };
    /**
     * The CSS `margin-top` and `margin-bottom` property
     */
    readonly my: (value: PropertyValue<"marginTop">) => {
        marginTop: {
            readonly [$$PropertyValue]: "marginTop";
        };
        marginBottom: {
            readonly [$$PropertyValue]: "marginTop";
        };
    };
    /**
     * Utility to space items in a horizontal stack
     */
    readonly spaceX: (value: PropertyValue<"marginLeft">) => {
        "& > * + *": {
            marginLeft: {
                readonly [$$PropertyValue]: "marginLeft";
            };
        };
    };
    /**
     * Utility to space items in a vertial stack
     */
    readonly spaceY: (value: PropertyValue<"marginTop">) => {
        "& > * + *": {
            marginTop: {
                readonly [$$PropertyValue]: "marginTop";
            };
        };
    };
};
//# sourceMappingURL=margin.d.ts.map