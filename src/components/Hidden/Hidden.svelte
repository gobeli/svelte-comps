<script>
  import { css } from 'emotion';
  import { resolveResponsive, resolveResponsiveRange } from '../../util/breakpoint';

  const displayCss = 'display: none;';


  $: styles = resolveResponsive(
    resolveResponsiveRange({ above, below })
        .map(b => b ? 'none' : (inline ? 'inline' : 'block'))
        .map(d => `display: ${d};`)
      )

  export let below, above, inline;
</script>
<div class={css`
  ${styles}
`}>
  <slot></slot>
</div>


