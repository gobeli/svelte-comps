<script>
  import Stack from './Stack.svelte';
  import Placeholder from '../private/Placeholder.svelte';

  export let space = 'small';
</script>

<Stack {space}>
  <Placeholder />
  <Placeholder />
  <Placeholder />
</Stack>