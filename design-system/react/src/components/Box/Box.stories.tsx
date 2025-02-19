import type { BoxProps } from './Box';
import { Box } from './Box';

export default {
  component: Box,
  title: 'Base/Layout/Box',
  argTypes: {},
};

export const Usage = (args: BoxProps) => <Box {...args}>Hello world</Box>;
