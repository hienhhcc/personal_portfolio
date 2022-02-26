// 1. import `extendTheme` function
import { extendTheme } from '@chakra-ui/react';

import styles from './styles';

// 2. Add your color mode config
const config = {
  initialColorMode: 'dark',
  useSystemColorMode: false,
  styles,
};

// 3. extend the theme
const theme = extendTheme({
  config,
});

export default theme;
