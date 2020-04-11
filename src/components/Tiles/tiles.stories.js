import TilesView from './TilesView.svelte';

export default {
  title: 'Tiles',
  component: TilesView,
};

export const Regular = () => ({
  Component: TilesView,
  props: { columns: [3] },
});

export const Breakpoints = () => ({
  Component: TilesView,
  props: { columns: [1, 2, 3] },
});

