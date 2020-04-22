<script>
  import ContentBlock from './ContentBlock.svelte';
  import Placeholder from '../private/Placeholder.svelte';
  
  export let width = 'medium';
</script>

<ContentBlock {width}>
  <Placeholder height="100px" text="Content" />
</ContentBlock>