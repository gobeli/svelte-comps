<script>
  import { css } from 'emotion';
  import { theme } from '../../util/theme';

  export let weight = 'regular';
</script>

<div class={css`
  height: 1px;
  background-color: ${$theme.color.border[weight]};
`}>
</div>
