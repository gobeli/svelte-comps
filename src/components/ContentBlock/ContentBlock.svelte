<script>
  import { css } from 'emotion';
  import { theme } from '../../util/theme';

  export let width = 'medium';
</script>

<div class={css`
  margin: 0 auto;
  max-width: ${$theme.contentWidth[width]}px;
`}>
  <slot></slot>
</div>
