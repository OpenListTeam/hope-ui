import type { pseudoSelectors } from "../stitches-utils/pseudo-selector";
import { KeysOf, SystemStyleObject } from "../types";
/**
 * Types for common CSS pseudo selectors
 */
export declare type PseudoSelectorProps = Partial<{
    [k in keyof typeof pseudoSelectors]: SystemStyleObject;
}>;
export declare const pseudoSelectorPropNames: KeysOf<PseudoSelectorProps>;
//# sourceMappingURL=pseudo-selector.d.ts.map