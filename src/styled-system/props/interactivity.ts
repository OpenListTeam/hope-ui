import { Property } from "csstype";

import { ColorScaleValue, KeysOf } from "../types";

/**
 * Types for interactivity CSS properties
 */
export type InteractivityProps = Partial<{
  /**
   * The CSS `appearance` property
   */
  appearance: Property.Appearance;

  /**
   * The CSS `user-select` property
   */
  userSelect: Property.UserSelect;

  /**
   * The CSS `pointer-events` property
   */
  pointerEvents: Property.PointerEvents;

  /**
   * The CSS `resize` property
   */
  resize: Property.Resize;

  /**
   * The CSS `cursor` property
   */
  cursor: Property.Cursor;

  /**
   * The CSS `outline` property
   */
  outline: Property.Outline<string | 0 | number>;

  /**
   * The CSS `outline-offset` property
   */
  outlineOffset: Property.OutlineOffset<string | 0 | number>;

  /**
   * The CSS `outline-color` property
   */
  outlineColor: Property.OutlineColor | ColorScaleValue;
}>;

/**
 * Style prop names for interactivity CSS related properties
 */
export const interactivityPropNames: KeysOf<InteractivityProps> = {
  appearance: true,
  userSelect: true,
  pointerEvents: true,
  resize: true,
  cursor: true,
  outline: true,
  outlineOffset: true,
  outlineColor: true,
};
