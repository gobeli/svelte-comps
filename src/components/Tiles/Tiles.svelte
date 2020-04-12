<script>
  import { css } from 'emotion';
  import { theme } from '../../util/theme';
  import { resolveResponsive } from '../../util/breakpoint';

  
  $: breakpoints = resolveResponsive(
    columns
      .map(cols => [...Array(cols)].map(col => '1fr').join(' '))
      .map(col => `grid-template-columns: ${col}`)
  );

  export let space = 'small', columns = [1, 1, 1];
</script>

<div class={css`
  display: grid;
  grid-gap: ${$theme.space[space]};
  ${breakpoints}
`}>
  <slot></slot>
</div>