<script>
  import { css } from 'emotion';

  import { theme } from '../../util/theme';

  export let size = 'standard', align = 'left', weight = 'normal', inline;

  $: styles = css`
    font-size: ${$theme.typography.text[size]}px;
    text-align: ${align};
    font-weight: ${weight};
  `
</script>

{#if inline}
  <span class={styles}><slot></slot></span>
{:else}
  <p class={styles}><slot></slot></p>
{/if}
