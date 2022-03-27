import { globalCss } from "../styled-system/stitches.config";

/**
 * Hope UI css reset
 */
export const resetStyles = globalCss({
  /* 
    1. Use a more-intuitive box-sizing model. 
    2. Set default border width and style to apply border props easily. 
  */
  "*, ::before, ::after": {
    boxSizing: "border-box" /* 1 */,
    borderWidth: "0" /* 2  */,
    borderStyle: "solid" /* 2  */,
  },

  /* Remove default margin. */
  "*": {
    margin: 0,
  },

  /* Allow percentage-based heights in the application. */
  "html, body": {
    height: "100%",
  },

  /* 
    1. Use theme `sans` font-family.
    2. Use theme `base` line height.
  */
  html: {
    fontFamily: "$sans" /* 1 */,
    lineHeight: "$base" /* 2 */,
    fontSize: "16px",
  },

  /* 
    1. Use theme `background` color for background-color.
    2. Use theme `neutral` color for text. 
    3. Improve text rendering. 
  */
  body: {
    backgroundColor: "$background" /* 1 */,
    color: "$neutral12" /* 2 */,
    fontFamily: "inherit",
    lineHeight: "inherit",
    "-webkit-font-smoothing": "antialiased",
    "-moz-osx-font-smoothing": "grayscale",
  },

  /* Headings are unstyled. */
  "h1, h2, h3, h4, h5, h6": {
    fontSize: "inherit",
    fontWeight: "inherit",
  },

  /* Avoid text overflows. */
  "p, h1, h2, h3, h4, h5, h6": {
    overflowWrap: "break-word",
  },

  /* Improve media defaults. */
  "img, picture, video, canvas, svg": {
    display: "block",
    maxWidth: "100%",
  },

  /* Remove built-in form typography styles. */
  "button, input, textarea, select, optgroup": {
    fontFamily: "inherit",
    fontSize: "100%",
  },

  /* Buttons have a default outline. */
  "button:focus": {
    outline: "5px auto -webkit-focus-ring-color",
  },

  /* fieldset have no margin and padding. */
  fieldset: {
    margin: 0,
    padding: 0,
  },

  /* List have no margin and padding. */
  "ol, ul": {
    margin: 0,
    padding: 0,
  },

  /* Anchor are unstyled. */
  a: {
    backgroundColor: "transparent",
    color: "inherit",
    textCecoration: "inherit",
  },
});
