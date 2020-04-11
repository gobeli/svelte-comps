<script>
  import { onMount } from 'svelte';
  import { css } from 'emotion';
  import { theme } from '../../util/theme';

  export let space = 'small';
</script>

<div class={css`
  display: grid;
  grid-gap: ${$theme.space[space]};
  grid-template-columns: 100%;
`}>
  <slot></slot>
</div>