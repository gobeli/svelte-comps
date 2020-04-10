import { writable } from 'svelte/store';
import baseTheme from '../themes/base';

export const theme = writable(baseTheme);
