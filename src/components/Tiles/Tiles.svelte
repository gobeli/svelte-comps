<script>
  import { onMount } from 'svelte';
  import { css } from 'emotion';
  import { theme } from '../../util/theme';
  import { map } from '../../util/breakpoint';

  $: breakpoints = columns.map((col, index) => {
    const cols = [...Array(col)].map(col => '1fr').join(' ');
    const min = $theme.breakpoint[map(index)];
    console.log(col)
    return `
      @media (min-width: ${min}px) {
        grid-template-columns: ${cols};
      }
    `;
  }).join(' ');

  export let space = 'small', columns = [1, 1, 1];
</script>

<div class={css`
  display: grid;
  grid-gap: ${$theme.space[space]};
  ${breakpoints}
`}>
  <slot></slot>
</div>