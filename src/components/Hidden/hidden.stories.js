import HiddenView from './HiddenView.svelte';

export default {
  title: 'Hidden',
  component: HiddenView,
};

export const HiddenAbove = () => ({
  Component: HiddenView,
  props: { above: 'mobile', text: `I'm hidden above Mobile` }
});

export const HiddenBelow = () => ({
  Component: HiddenView,
  props: { below: 'tablet', text: `I'm hidden below Desktop` }
});
