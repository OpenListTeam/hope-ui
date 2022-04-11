import { splitProps } from "solid-js";

import { useStyleConfig } from "../../hope-provider";
import { classNames, createClassSelector } from "../../utils/css";
import { Icon, IconProps } from "../icon/icon";
import { ElementType } from "../types";
import { tagLeftIconStyles, tagRightIconStyles } from "./tag.styles";

/* -------------------------------------------------------------------------------------------------
 * TagLeftIcon
 * -----------------------------------------------------------------------------------------------*/

export type TagLeftIconProps<C extends ElementType = "svg"> = IconProps<C>;

const hopeTagLeftIconClass = "hope-tag-left-icon";

export function TagLeftIcon<C extends ElementType = "svg">(props: TagLeftIconProps<C>) {
  const theme = useStyleConfig().Tag;

  const [local, others] = splitProps(props, ["class"]);

  const classes = () => classNames(local.class, hopeTagLeftIconClass, tagLeftIconStyles());

  return <Icon class={classes()} __baseStyle={theme?.baseStyle?.icon} {...others} />;
}

TagLeftIcon.toString = () => createClassSelector(hopeTagLeftIconClass);

/* -------------------------------------------------------------------------------------------------
 * TagRightIcon
 * -----------------------------------------------------------------------------------------------*/

export type TagRightIconProps<C extends ElementType = "svg"> = IconProps<C>;

const hopeTagRightIconClass = "hope-tag-right-icon";

export function TagRightIcon<C extends ElementType = "svg">(props: TagRightIconProps<C>) {
  const theme = useStyleConfig().Tag;

  const [local, others] = splitProps(props, ["class"]);

  const classes = () => classNames(local.class, hopeTagRightIconClass, tagRightIconStyles());

  return <Icon class={classes()} __baseStyle={theme?.baseStyle?.icon} {...others} />;
}

TagRightIcon.toString = () => createClassSelector(hopeTagRightIconClass);
