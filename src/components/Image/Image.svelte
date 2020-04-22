<script>
  import { onMount } from 'svelte';

  import { intersectionObserverAvailable, getObserver } from './intersection.service';

  let source = '', imgElement;

  const defaultPlaceholder = `data:image/svg+xml;utf8,%3Csvg xmlns%3D"http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg" width%3D"100" height%3D"100"%3E%0A %3Cg%3E%0A %3Crect fill%3D"%23000000" height%3D"100" width%3D"100" %2F%3E%0A %3C%2Fg%3E%0A %3C%2Fsvg%3E`

  onMount(() => {
    source = source || placeholder;
    if (intersectionObserverAvailable()) {
      getObserver().observe(imgElement);
    } else {
      source = src;
    }
  });

  export let src, alt, placeholder = defaultPlaceholder, width = 'auto', height  = 'auto';
</script>

<img src={source} data-src={src} {alt} {width} {height} bind:this={imgElement}>
