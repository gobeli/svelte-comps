import Divider from './Divider.svelte';

export default {
  title: 'Divider',
  component: Divider,
};

export const Regular = () => ({
  Component: Divider,
});

export const Strong = () => ({
  Component: Divider,
  props: { weight: 'strong' },
});