import type { PropertyValue } from "@stitches/core";
export declare const size: {
    /**
     * The CSS `width` property
     */
    readonly w: (value: PropertyValue<"width">) => {
        width: {
            readonly [$$PropertyValue]: "width";
        };
    };
    /**
     * The CSS `min-width` property
     */
    readonly minW: (value: PropertyValue<"minWidth">) => {
        minWidth: {
            readonly [$$PropertyValue]: "minWidth";
        };
    };
    /**
     * The CSS `max-width` property
     */
    readonly maxW: (value: PropertyValue<"maxWidth">) => {
        maxWidth: {
            readonly [$$PropertyValue]: "maxWidth";
        };
    };
    /**
     * The CSS `height` property
     */
    readonly h: (value: PropertyValue<"height">) => {
        height: {
            readonly [$$PropertyValue]: "height";
        };
    };
    /**
     * The CSS `min-height` property
     */
    readonly minH: (value: PropertyValue<"minHeight">) => {
        minHeight: {
            readonly [$$PropertyValue]: "minHeight";
        };
    };
    /**
     * The CSS `max-height` property
     */
    readonly maxH: (value: PropertyValue<"maxHeight">) => {
        maxHeight: {
            readonly [$$PropertyValue]: "maxHeight";
        };
    };
    /**
     * The CSS `width` and `height` property
     */
    readonly boxSize: (value: PropertyValue<"width">) => {
        width: {
            readonly [$$PropertyValue]: "width";
        };
        height: {
            readonly [$$PropertyValue]: "width";
        };
    };
};
//# sourceMappingURL=size.d.ts.map