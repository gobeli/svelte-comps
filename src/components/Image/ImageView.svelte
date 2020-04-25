<script>
  import { css } from 'emotion';

  import Image from './Image.svelte';

  export let offset = 0, src = 'https://source.unsplash.com/random/600x400', placeholder;
</script>
<div class={css`
  height: ${offset}px;
`}></div>
<Image alt="Test Image" {src} {placeholder} width="600px" height="400px" />