<script>
  import Hidden from './Hidden.svelte';

  export let text, above, below;
</script>

<Hidden {above} {below}>
  {text}
</Hidden>

