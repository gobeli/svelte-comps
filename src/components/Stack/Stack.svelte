<script>
  import { onMount } from 'svelte';
  import { css } from 'emotion';
  import { theme } from '../../util/theme';

  export let space = 'small';
</script>

<div class={css`
  > * {
    margin-bottom: ${$theme.space[space]};
    &:last-child {
      margin-bottom: 0;
    }
  }
`}>
  <slot></slot>
</div>