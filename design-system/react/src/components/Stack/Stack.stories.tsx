import { css } from "@fuel/css";

import type { StackProps } from "./Stack";
import { Stack } from "./Stack";

export default {
  component: Stack,
  title: "Layout/Stack",
  argTypes: {},
};

export const Usage = (args: StackProps) => (
  <>
    <Stack {...args}>
      <div className={css({ background: "$gray7" })()}>&nbsp;</div>
      <div className={css({ background: "$gray7" })()}>&nbsp;</div>
      <div className={css({ background: "$gray7" })()}>&nbsp;</div>
      <div className={css({ background: "$gray7" })()}>&nbsp;</div>
    </Stack>
  </>
);