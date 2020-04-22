<script>
  import { css } from 'emotion';

  export let text, height = '40px';
</script>

<div class={css`
  height: ${height};
  width: 100%;
  border: 2px solid #ddd;
  background-color: #eee;
  display: flex;
  align-items: center;
  justify-content: center;
`}> 
  {#if text}
    <label>{text}</label>
  {:else}
    <svg xmlns="http://www.w3.org/2000/svg">
      <line
        x1={0}
        y1={0}
        x2="100%"
        y2="100%"
      />
      <line
        x1="100%"
        y1={0}
        x2={0}
        y2="100%"
      />
    </svg>
  {/if}
</div>

<style>
  svg {
    height: 100%;
    width: 100%;
  }

  line {    
    stroke-width: 2px;
    stroke: #ddd;
  }
</style>