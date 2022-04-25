import { splitProps } from "solid-js";

import { useStyleConfig } from "../../hope-provider";
import { classNames, createClassSelector } from "../../utils/css";
import { Box } from "../box/box";
import { ElementType, HTMLHopeProps } from "../types";
import { useTableContext } from "./table";
import { tableBodyStyles } from "./table.styles";

export type TbodyProps<C extends ElementType = "tbody"> = HTMLHopeProps<C>;

const hopeTbodyClass = "hope-tbody";

export function Tbody<C extends ElementType = "tbody">(props: TbodyProps<C>) {
  const theme = useStyleConfig().Table;

  const tableContext = useTableContext();

  const [local, others] = splitProps(props, ["class"]);

  const classes = () =>
    classNames(
      local.class,
      hopeTbodyClass,
      tableBodyStyles({
        striped: tableContext.striped,
        highlightOnHover: tableContext.highlightOnHover,
      })
    );

  return (
    <Box
      as="tbody"
      role="rowgroup"
      class={classes()}
      __baseStyle={theme?.baseStyle?.tbody}
      {...others}
    />
  );
}

Tbody.toString = () => createClassSelector(hopeTbodyClass);
