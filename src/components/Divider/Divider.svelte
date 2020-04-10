<script>
  import { css } from 'emotion';
  import { theme } from '../../util/theme';


  export let size;
</script>

<div style={css`
  height: ${$theme.space[size]};
`}>
</div>
