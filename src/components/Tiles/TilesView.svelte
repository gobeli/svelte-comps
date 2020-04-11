<script>
  import Tiles from './Tiles.svelte';
  import Placeholder from '../private/Placeholder.svelte';

  export let space = 'small', columns = [1, 1, 1];
</script>

<Tiles {space} {columns}>
  <Placeholder />
  <Placeholder />
  <Placeholder />
  <Placeholder />
  <Placeholder />
  <Placeholder />
</Tiles>