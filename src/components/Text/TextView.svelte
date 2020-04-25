<script>
  import Text from './Text.svelte';

  export let size, inline, text;
</script>
<Text {size} {inline}>
  {text}
</Text>