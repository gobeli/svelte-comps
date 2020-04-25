import { writable } from 'svelte/store';
import { injectGlobal } from 'emotion';

import baseTheme from '../themes/base';

export const theme = writable(baseTheme);

theme.subscribe(t => {
  injectGlobal`
    body {
      font-family: ${t.typography.fontFamily};
    }
  `
})